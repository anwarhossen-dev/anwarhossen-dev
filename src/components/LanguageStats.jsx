import React from 'react';
import { BarChart3, Code2, PieChart, Database, Terminal } from 'lucide-react';

export default function LanguageStats() {
  const languages = [
    { name: 'C# / ASP.NET', percentage: 42, color: 'bg-purple-500', text: 'text-purple-400', repos: 18 },
    { name: 'JavaScript / JSX', percentage: 32, color: 'bg-amber-400', text: 'text-amber-400', repos: 24 },
    { name: 'HTML5 & CSS3', percentage: 14, color: 'bg-[#00d2ff]', text: 'text-[#00d2ff]', repos: 12 },
    { name: 'SQL & T-SQL', percentage: 8, color: 'bg-emerald-400', text: 'text-emerald-400', repos: 10 },
    { name: 'TypeScript / Other', percentage: 4, color: 'bg-rose-400', text: 'text-rose-400', repos: 6 },
  ];

  return (
    <div className="glass-panel rounded-2xl p-6 shadow-xl border border-[#1E2D4A] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#00d2ff]" />
            Language Proficiency & Repository Ratio
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Client-side repository code composition analysis • Zero External Server Reliance
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-gray-300 bg-[#09101d] px-3 py-1.5 rounded-xl border border-[#1E2D4A]">
          <PieChart className="w-4 h-4 text-teal-400" />
          <span>70+ Total Repositories Analyzed</span>
        </div>
      </div>

      {/* Stack Ratio Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
          <span>CODEBASE COMPOSITION</span>
          <span>100% SELF-CONTAINED</span>
        </div>

        <div className="w-full h-4 bg-[#09101d] rounded-full overflow-hidden flex p-0.5 border border-[#1E2D4A]">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className={`h-full ${lang.color} transition-all duration-700 hover:opacity-80 relative group`}
              style={{ width: `${lang.percentage}%` }}
              title={`${lang.name}: ${lang.percentage}%`}
            ></div>
          ))}
        </div>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {languages.map((lang, idx) => (
          <div key={idx} className="bg-[#09101d] p-3 rounded-xl border border-[#1E2D4A] space-y-2">
            <div className="flex items-center justify-between">
              <span className={`w-3 h-3 rounded-full ${lang.color}`}></span>
              <span className="text-xs font-mono font-bold text-white">{lang.percentage}%</span>
            </div>

            <div>
              <h4 className={`text-xs font-bold ${lang.text}`}>{lang.name}</h4>
              <span className="text-[10px] text-gray-400 font-mono block mt-0.5">
                {lang.repos} Active Repos
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
