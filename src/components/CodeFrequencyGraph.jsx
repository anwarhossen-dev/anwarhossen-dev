import React, { useState } from 'react';
import { TrendingUp, GitCommit, ArrowUpRight, Calendar, Filter } from 'lucide-react';

export default function CodeFrequencyGraph() {
  const [timeframe, setTimeframe] = useState('12m'); // '12m' | '6m' | '30d'
  const [activePoint, setActivePoint] = useState(null);

  // Monthly data points for additions, deletions, and total commits
  const monthlyData = [
    { month: 'Oct 25', commits: 112, additions: 4200, deletions: 1200 },
    { month: 'Nov 25', commits: 135, additions: 5800, deletions: 1900 },
    { month: 'Dec 25', commits: 98, additions: 3900, deletions: 1100 },
    { month: 'Jan 26', commits: 145, additions: 6400, deletions: 2300 },
    { month: 'Feb 26', commits: 160, additions: 7100, deletions: 2800 },
    { month: 'Mar 26', commits: 128, additions: 5200, deletions: 1700 },
    { month: 'Apr 26', commits: 172, additions: 8300, deletions: 3100 },
    { month: 'May 26', commits: 188, additions: 9100, deletions: 3400 },
    { month: 'Jun 26', commits: 154, additions: 6800, deletions: 2400 },
    { month: 'Jul 26', commits: 165, additions: 7600, deletions: 2900 },
    { month: 'Aug 26', commits: 195, additions: 9800, deletions: 3600 },
    { month: 'Sep 26', commits: 210, additions: 10400, deletions: 4100 },
  ];

  const maxAdditions = 12000;

  return (
    <div className="ultra-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#00d2ff]/40 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-[#00d2ff]" />
            Code Frequency & Commit Velocity Graph
          </h3>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            Visualizing monthly code additions (+), deletions (-), and total git commits across all projects
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-[#09101d] p-1 rounded-xl border border-[#1E2D4A] text-xs font-mono">
            {['12m', '6m', '30d'].map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  timeframe === t ? 'bg-[#00d2ff] text-black font-bold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Legend & Tooltip Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#070d1a] p-4 rounded-2xl border border-[#1E2D4A] text-xs font-mono">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span> Additions (+)
          </span>
          <span className="flex items-center gap-1.5 text-rose-400 font-bold">
            <span className="w-3 h-3 rounded-full bg-rose-400"></span> Deletions (-)
          </span>
          <span className="flex items-center gap-1.5 text-[#00d2ff] font-bold">
            <span className="w-3 h-3 rounded-full bg-[#00d2ff]"></span> Total Commits
          </span>
        </div>

        {activePoint ? (
          <div className="text-xs text-[#00d2ff] font-bold bg-[#111c33] px-3 py-1 rounded-lg border border-[#00d2ff]/40">
            {activePoint.month}: +{activePoint.additions.toLocaleString()} / -{activePoint.deletions.toLocaleString()} lines ({activePoint.commits} commits)
          </div>
        ) : (
          <span className="text-gray-400">Hover over chart columns for monthly breakdown</span>
        )}
      </div>

      {/* Area Wave / Column Graph */}
      <div className="relative h-64 w-full bg-[#050914] p-4 rounded-2xl border border-[#1E2D4A] flex items-end justify-between gap-2 overflow-x-auto">
        {monthlyData.map((item, idx) => {
          const addHeight = (item.additions / maxAdditions) * 100;
          const delHeight = (item.deletions / maxAdditions) * 100;

          return (
            <div
              key={idx}
              onMouseEnter={() => setActivePoint(item)}
              onMouseLeave={() => setActivePoint(null)}
              className="flex-1 flex flex-col items-center gap-2 group cursor-pointer h-full justify-end min-w-[36px]"
            >
              {/* Stacked Bar Visual */}
              <div className="w-full flex justify-center items-end gap-1 h-48 relative">
                {/* Additions Bar */}
                <div
                  className="w-3 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-md transition-all duration-300 group-hover:brightness-125 group-hover:scale-105"
                  style={{ height: `${addHeight}%` }}
                ></div>
                {/* Deletions Bar */}
                <div
                  className="w-3 bg-gradient-to-t from-rose-600 to-rose-400 rounded-t-md transition-all duration-300 group-hover:brightness-125 group-hover:scale-105"
                  style={{ height: `${delHeight}%` }}
                ></div>
              </div>

              {/* Month Label */}
              <span className="text-[10px] font-mono text-gray-400 group-hover:text-[#00d2ff] transition-colors">
                {item.month}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
