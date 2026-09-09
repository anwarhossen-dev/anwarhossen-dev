import React, { useState } from 'react';
import { Clock, Code, Flame, Cpu, Terminal, ShieldCheck } from 'lucide-react';

export default function CodingHoursTracker() {
  const [activeTab, setActiveTab] = useState('weekly');

  const editors = [
    { name: 'Visual Studio 2022', percent: 54, color: 'bg-purple-500', time: '766 hrs' },
    { name: 'VS Code', percent: 46, color: 'bg-[#00d2ff]', time: '654 hrs' }
  ];

  const dailyHours = [
    { day: 'Mon', hours: 6.8, commits: 14 },
    { day: 'Tue', hours: 7.2, commits: 18 },
    { day: 'Wed', hours: 6.5, commits: 12 },
    { day: 'Thu', hours: 8.0, commits: 22 },
    { day: 'Fri', hours: 7.5, commits: 16 },
    { day: 'Sat', hours: 4.2, commits: 8 },
    { day: 'Sun', hours: 3.5, commits: 6 }
  ];

  return (
    <div className="purple-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-500/40 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-mono">
            <Clock className="w-6 h-6 text-[#00d2ff]" />
            Live Coding Hours & Activity Tracker (WakaTime / LeetCode Stats)
          </h3>
          <p className="text-xs text-purple-300 mt-1 font-mono">
            Real-time tracking of daily coding hours, active editor usage, and commit velocity
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-xl bg-[#070414] border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-emerald-400" /> Avg: 6.2 Hrs / Day
          </span>
        </div>
      </div>

      {/* Main Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#070414] p-5 rounded-2xl border border-purple-500/30 text-center space-y-1">
          <span className="text-xs text-gray-400 font-mono">TOTAL CODING TIME</span>
          <div className="text-3xl font-black font-mono text-purple-400">1,420+ Hrs</div>
          <span className="text-[10px] text-purple-300 font-mono">Logged across all projects</span>
        </div>

        <div className="bg-[#070414] p-5 rounded-2xl border border-purple-500/30 text-center space-y-1">
          <span className="text-xs text-gray-400 font-mono">ACTIVE CODING DAYS</span>
          <div className="text-3xl font-black font-mono text-[#00d2ff]">342 Days</div>
          <span className="text-[10px] text-[#00d2ff] font-mono">Consistent Git Commits</span>
        </div>

        <div className="bg-[#070414] p-5 rounded-2xl border border-purple-500/30 text-center space-y-1">
          <span className="text-xs text-gray-400 font-mono">TOP ENVIRONMENT</span>
          <div className="text-3xl font-black font-mono text-emerald-400">VS 2022</div>
          <span className="text-[10px] text-emerald-300 font-mono">ASP.NET Core & C#</span>
        </div>
      </div>

      {/* Daily Coding Hours Graph */}
      <div className="space-y-3 bg-[#070414] p-5 rounded-2xl border border-purple-500/30">
        <div className="flex items-center justify-between text-xs text-gray-300 font-mono">
          <span>WEEKLY CODING HOURS BREAKDOWN</span>
          <span className="text-[#00d2ff]">WakaTime Sync Active</span>
        </div>

        <div className="grid grid-cols-7 gap-2 pt-2 items-end h-36">
          {dailyHours.map((d, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer">
              <span className="text-[10px] font-mono text-[#00d2ff] opacity-0 group-hover:opacity-100 transition-opacity">
                {d.hours}h
              </span>
              <div
                className="w-full bg-gradient-to-t from-purple-700 via-purple-500 to-[#00d2ff] rounded-t-lg transition-all duration-300 group-hover:brightness-125"
                style={{ height: `${(d.hours / 10) * 100}%` }}
              ></div>
              <span className="text-xs font-mono text-gray-400 group-hover:text-white font-bold">
                {d.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
