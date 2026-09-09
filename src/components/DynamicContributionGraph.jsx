import React, { useState, useMemo } from 'react';
import { Activity, Flame, Calendar, GitCommit, Zap, RefreshCw } from 'lucide-react';

export default function DynamicContributionGraph() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredDay, setHoveredDay] = useState(null);

  // Recent commits feed simulation
  const recentCommits = [
    { hash: 'a8f3b91', msg: '[feat]: Implemented ASP.NET Core EF Core Repository Pattern', time: '10 mins ago', type: '.NET' },
    { hash: 'c4e2d10', msg: '[perf]: Optimized SQL Server indexing & sub-query execution', time: '2 hours ago', type: 'SQL' },
    { hash: 'e9b7a44', msg: '[feat]: Built Next.js 14 App Router SSR page with Tailwind UI', time: '5 hours ago', type: 'React' },
    { hash: 'f2c1e89', msg: '[fix]: Resolved Express.js JWT authentication middleware route', time: '1 day ago', type: 'Node' },
  ];

  // Generate 52 weeks (364 days) of realistic dynamic contribution data
  const gridData = useMemo(() => {
    const weeks = [];
    const endDate = new Date(2026, 8, 10);
    let totalCount = 0;
    let maxStreak = 42;
    let currStreak = 18;

    for (let w = 51; w >= 0; w--) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const offset = (w * 7) + d;
        const date = new Date(endDate);
        date.setDate(date.getDate() - offset);

        const dayOfWeek = date.getDay();
        let count = (dayOfWeek === 0 || dayOfWeek === 6)
          ? Math.floor(Math.random() * 3)
          : Math.floor(Math.random() * 8) + 2;

        if (activeFilter === 'dotnet' && offset % 2 === 0) count = Math.max(0, count - 2);
        if (activeFilter === 'mern' && offset % 2 !== 0) count = Math.max(0, count - 3);

        totalCount += count;

        days.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          count
        });
      }
      weeks.unshift({ days });
    }

    return { weeks, totalCount, currStreak, maxStreak };
  }, [activeFilter]);

  const getTileColor = (count) => {
    if (count === 0) return 'bg-[#130b2e] border-purple-950/40';
    if (count <= 2) return 'bg-purple-900/60 border-purple-700/50 text-[#00d2ff]';
    if (count <= 5) return 'bg-purple-600 border-purple-400 text-white';
    if (count <= 8) return 'bg-[#00d2ff] border-cyan-300 text-black font-bold shadow-sm shadow-[#00d2ff]/50';
    return 'bg-emerald-400 border-emerald-200 text-black font-extrabold shadow-md shadow-emerald-400/60 animate-pulse';
  };

  return (
    <div className="purple-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-500/40 space-y-6">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-mono">
            <Activity className="w-6 h-6 text-[#00d2ff]" />
            Dynamic Git Contribution Graph
          </h3>
          <p className="text-xs text-purple-300 mt-1 font-mono">
            Interactive 365-day commit activity heatmap • 100% Zero 3rd-Party Server Reliance
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-[#070414] p-1 rounded-xl border border-purple-500/30 text-xs font-mono">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeFilter === 'all' ? 'bg-[#00d2ff] text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            All Activity
          </button>
          <button
            onClick={() => setActiveFilter('dotnet')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeFilter === 'dotnet' ? 'bg-[#00d2ff] text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            .NET Core
          </button>
          <button
            onClick={() => setActiveFilter('mern')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeFilter === 'mern' ? 'bg-[#00d2ff] text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            MERN Stack
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#070414] p-4 rounded-2xl border border-purple-500/30 flex items-center gap-3">
          <div className="p-2.5 bg-purple-950/60 rounded-xl text-[#00d2ff]">
            <GitCommit className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-gray-400 block font-mono">1-YEAR COMMITS</span>
            <span className="text-xl font-black text-white font-mono">{gridData.totalCount.toLocaleString()}</span>
          </div>
        </div>

        <div className="bg-[#070414] p-4 rounded-2xl border border-purple-500/30 flex items-center gap-3">
          <div className="p-2.5 bg-amber-950/60 rounded-xl text-amber-400">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-gray-400 block font-mono">CURRENT STREAK</span>
            <span className="text-xl font-black text-amber-400 font-mono">{gridData.currStreak} Days</span>
          </div>
        </div>

        <div className="bg-[#070414] p-4 rounded-2xl border border-purple-500/30 flex items-center gap-3">
          <div className="p-2.5 bg-emerald-950/60 rounded-xl text-emerald-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-gray-400 block font-mono">LONGEST STREAK</span>
            <span className="text-xl font-black text-emerald-400 font-mono">{gridData.maxStreak} Days</span>
          </div>
        </div>

        <div className="bg-[#070414] p-4 rounded-2xl border border-purple-500/30 flex items-center gap-3">
          <div className="p-2.5 bg-cyan-950/60 rounded-xl text-cyan-400">
            <RefreshCw className="w-5 h-5 animate-spin" style={{ animationDuration: '10s' }} />
          </div>
          <div>
            <span className="text-[10px] text-gray-400 block font-mono">DAILY AVG</span>
            <span className="text-xl font-black text-cyan-400 font-mono">4.2 / Day</span>
          </div>
        </div>
      </div>

      {/* Heatmap Grid Box */}
      <div className="bg-[#070414] p-4 rounded-2xl border border-purple-500/30 space-y-2">
        <div className="h-6 flex items-center justify-between text-xs text-gray-300 font-mono">
          <span>
            {hoveredDay ? (
              <span className="text-[#00d2ff] font-bold">
                {hoveredDay.count} commits on {hoveredDay.display}
              </span>
            ) : (
              'Hover over squares for day-by-day commit details'
            )}
          </span>
          <span className="text-[10px] text-gray-400">365 DAYS (52 WEEKS)</span>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="inline-flex gap-1.5 min-w-[720px]">
            {gridData.weeks.map((week, wIndex) => (
              <div key={wIndex} className="flex flex-col gap-1.5">
                {week.days.map((day, dIndex) => (
                  <div
                    key={dIndex}
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    className={`w-3.5 h-3.5 rounded-sm border transition-transform hover:scale-125 cursor-pointer ${getTileColor(
                      day.count
                    )}`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend Footer */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-purple-500/30 font-mono">
          <span className="flex items-center gap-1 text-[11px]">
            <Calendar className="w-3.5 h-3.5 text-purple-400" /> Sep 2025 – Sep 2026
          </span>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Less</span>
            <div className="w-3 h-3 rounded-sm bg-[#130b2e] border border-purple-950"></div>
            <div className="w-3 h-3 rounded-sm bg-purple-900/60 border border-purple-700"></div>
            <div className="w-3 h-3 rounded-sm bg-purple-600"></div>
            <div className="w-3 h-3 rounded-sm bg-[#00d2ff]"></div>
            <div className="w-3 h-3 rounded-sm bg-emerald-400"></div>
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Live Recent Commit Ticker */}
      <div className="bg-[#070414] p-4 rounded-2xl border border-purple-500/30 space-y-2">
        <span className="text-xs font-mono text-gray-400 uppercase font-bold block">
          ⚡ Recent Git Commit Activity Log
        </span>

        <div className="space-y-2">
          {recentCommits.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs font-mono bg-[#0b071e] p-2.5 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-2">
                <span className="text-purple-400 font-bold">[{item.hash}]</span>
                <span className="text-gray-200">{item.msg}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#130b2e] text-[#00d2ff] border border-[#00d2ff]/30">
                  {item.type}
                </span>
                <span className="text-gray-500 text-[10px]">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
