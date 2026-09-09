import React, { useState } from 'react';
import { GitPullRequest, CheckCircle2, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function PrVelocityChart() {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const prData = [
    { month: 'Apr', prs: 14, issues: 22, reviews: 18 },
    { month: 'May', prs: 18, issues: 28, reviews: 24 },
    { month: 'Jun', prs: 15, issues: 20, reviews: 19 },
    { month: 'Jul', prs: 19, issues: 31, reviews: 26 },
    { month: 'Aug', prs: 22, issues: 35, reviews: 29 },
    { month: 'Sep', prs: 26, issues: 40, reviews: 34 },
  ];

  return (
    <div className="ultra-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#00d2ff]/40 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <GitPullRequest className="w-6 h-6 text-[#00d2ff]" />
            Pull Request & Ticket Resolution Velocity Chart
          </h3>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            Monthly breakdown of merged PRs, resolved enterprise tickets, and code reviews
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs text-gray-300 bg-[#09101d] px-3.5 py-1.5 rounded-xl border border-[#1E2D4A]">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>142 PRs Merged Total</span>
        </div>
      </div>

      {/* Legend Header */}
      <div className="flex items-center justify-between bg-[#070d1a] p-4 rounded-2xl border border-[#1E2D4A] text-xs font-mono">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#00d2ff] font-bold">
            <span className="w-3 h-3 rounded-full bg-[#00d2ff]"></span> Merged PRs
          </span>
          <span className="flex items-center gap-1.5 text-purple-400 font-bold">
            <span className="w-3 h-3 rounded-full bg-purple-400"></span> Resolved Tickets
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span> Code Reviews
          </span>
        </div>

        {selectedMonth && (
          <span className="text-xs text-[#00d2ff] font-bold">
            {selectedMonth.month}: {selectedMonth.prs} PRs | {selectedMonth.issues} Tickets | {selectedMonth.reviews} Reviews
          </span>
        )}
      </div>

      {/* Grouped Bar Graph */}
      <div className="h-60 bg-[#050914] p-5 rounded-2xl border border-[#1E2D4A] flex items-end justify-between gap-4">
        {prData.map((d, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setSelectedMonth(d)}
            onMouseLeave={() => setSelectedMonth(null)}
            className="flex-1 flex flex-col items-center gap-2 group cursor-pointer h-full justify-end"
          >
            <div className="flex items-end gap-1.5 h-44 w-full justify-center">
              {/* PRs Bar */}
              <div
                className="w-3 bg-gradient-to-t from-cyan-600 to-[#00d2ff] rounded-t-md transition-all duration-300 group-hover:scale-105"
                style={{ height: `${(d.prs / 45) * 100}%` }}
              ></div>
              {/* Issues Bar */}
              <div
                className="w-3 bg-gradient-to-t from-purple-700 to-purple-400 rounded-t-md transition-all duration-300 group-hover:scale-105"
                style={{ height: `${(d.issues / 45) * 100}%` }}
              ></div>
              {/* Reviews Bar */}
              <div
                className="w-3 bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-t-md transition-all duration-300 group-hover:scale-105"
                style={{ height: `${(d.reviews / 45) * 100}%` }}
              ></div>
            </div>

            <span className="text-xs font-mono text-gray-400 group-hover:text-[#00d2ff] transition-colors">
              {d.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
