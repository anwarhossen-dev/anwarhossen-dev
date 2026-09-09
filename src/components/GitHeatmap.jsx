import React, { useState, useMemo } from 'react';
import { Activity, Flame, Calendar, GitCommit, GitPullRequest, Zap } from 'lucide-react';

export default function GitHeatmap() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 52 weeks (364 days) of realistic commit activity data
  const heatmapData = useMemo(() => {
    const weeks = [];
    const now = new Date(2026, 8, 9); // Sep 9, 2026
    let totalCommitsCount = 0;
    let maxStreak = 0;
    let currStreak = 0;

    for (let w = 51; w >= 0; w--) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const dayOffset = (w * 7) + d;
        const date = new Date(now);
        date.setDate(date.getDate() - dayOffset);
        
        // Seed pseudo-random commits based on day of week and date
        const dayOfWeek = date.getDay();
        let baseCount = (dayOfWeek === 0 || dayOfWeek === 6) ? Math.floor(Math.random() * 4) : Math.floor(Math.random() * 12) + 2;
        
        // Boost commit count on recent days
        if (w < 4) baseCount += 3;

        if (filterCategory === 'dotnet' && dayOffset % 2 !== 0) {
          baseCount = Math.max(0, baseCount - 2);
        } else if (filterCategory === 'mern' && dayOffset % 2 === 0) {
          baseCount = Math.max(0, baseCount - 3);
        }

        totalCommitsCount += baseCount;

        if (baseCount > 0) {
          currStreak++;
          if (currStreak > maxStreak) maxStreak = currStreak;
        } else {
          currStreak = 0;
        }

        days.push({
          date: date.toISOString().split('T')[0],
          displayDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          count: baseCount
        });
      }
      weeks.unshift({ days });
    }

    return {
      weeks,
      totalCommits: totalCommitsCount,
      currentStreak: 18,
      longestStreak: 45,
    };
  }, [filterCategory]);

  const getColorClass = (count) => {
    if (count === 0) return 'bg-[#152136] border-[#1E2D4A]';
    if (count <= 3) return 'bg-teal-900/60 border-teal-700/50 text-[#00d2ff]';
    if (count <= 6) return 'bg-teal-600/80 border-teal-500 text-white';
    if (count <= 9) return 'bg-[#00d2ff]/90 border-cyan-400 text-black font-bold';
    return 'bg-[#00d2ff] border-white text-black font-extrabold shadow-sm shadow-[#00d2ff]/50';
  };

  return (
    <div className="glass-panel rounded-2xl p-6 shadow-xl border border-[#1E2D4A] space-y-6">
      {/* Top Title & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#00d2ff]" />
            Dynamic Git Activity Graph
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Client-side 365-day commit velocity visualizer • 0 External API Calls
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 bg-[#09101d] p-1 rounded-xl border border-[#1E2D4A] text-xs">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterCategory === 'all'
                ? 'bg-[#00d2ff] text-black font-semibold shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            All Activity
          </button>
          <button
            onClick={() => setFilterCategory('dotnet')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterCategory === 'dotnet'
                ? 'bg-[#00d2ff] text-black font-semibold shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            .NET Core
          </button>
          <button
            onClick={() => setFilterCategory('mern')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterCategory === 'mern'
                ? 'bg-[#00d2ff] text-black font-semibold shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            MERN Stack
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#09101d] p-3.5 rounded-xl border border-[#1E2D4A] flex items-center gap-3">
          <div className="p-2 bg-[#00d2ff]/10 rounded-lg text-[#00d2ff]">
            <GitCommit className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-gray-400 block font-mono">1-YEAR COMMITS</span>
            <span className="text-lg font-bold text-white font-mono">{heatmapData.totalCommits.toLocaleString()}</span>
          </div>
        </div>

        <div className="bg-[#09101d] p-3.5 rounded-xl border border-[#1E2D4A] flex items-center gap-3">
          <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-gray-400 block font-mono">CURRENT STREAK</span>
            <span className="text-lg font-bold text-amber-400 font-mono">{heatmapData.currentStreak} Days</span>
          </div>
        </div>

        <div className="bg-[#09101d] p-3.5 rounded-xl border border-[#1E2D4A] flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-gray-400 block font-mono">LONGEST STREAK</span>
            <span className="text-lg font-bold text-emerald-400 font-mono">{heatmapData.longestStreak} Days</span>
          </div>
        </div>

        <div className="bg-[#09101d] p-3.5 rounded-xl border border-[#1E2D4A] flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
            <GitPullRequest className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-gray-400 block font-mono">PULL REQUESTS</span>
            <span className="text-lg font-bold text-indigo-300 font-mono">142 Merged</span>
          </div>
        </div>
      </div>

      {/* Interactive Grid Container */}
      <div className="relative">
        {/* Tooltip Display */}
        <div className="h-6 flex items-center justify-between text-xs text-gray-400 font-mono mb-2">
          <span>
            {hoveredCell ? (
              <span className="text-[#00d2ff] font-semibold">
                {hoveredCell.count} commits on {hoveredCell.displayDate}
              </span>
            ) : (
              'Hover over any square to see commit details'
            )}
          </span>
          <span className="text-[10px] text-gray-500">52 WEEKS</span>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex gap-1 min-w-[700px]">
            {heatmapData.weeks.map((week, wIndex) => (
              <div key={wIndex} className="flex flex-col gap-1">
                {week.days.map((day, dIndex) => (
                  <div
                    key={dIndex}
                    onMouseEnter={() => setHoveredCell(day)}
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`w-3 h-3 rounded-[2px] border transition-transform hover:scale-125 cursor-pointer ${getColorClass(
                      day.count
                    )}`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend Footer */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-[#1E2D4A]">
          <span className="flex items-center gap-1 font-mono text-[11px]">
            <Calendar className="w-3.5 h-3.5 text-gray-500" /> Sep 2025 – Sep 2026
          </span>
          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            <span>Less</span>
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#152136] border border-[#1E2D4A]"></div>
            <div className="w-2.5 h-2.5 rounded-[2px] bg-teal-900/60 border border-teal-700"></div>
            <div className="w-2.5 h-2.5 rounded-[2px] bg-teal-600/80 border border-teal-500"></div>
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#00d2ff]"></div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
