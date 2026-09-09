import React from 'react';
import { Cpu, Terminal, Database, Code, ShieldCheck } from 'lucide-react';

export default function TechStackTable() {
  const categories = [
    {
      name: 'Languages',
      badgeColor: 'bg-purple-950/60 border-purple-500/40 text-purple-300',
      items: [
        { label: 'C#', bg: 'bg-[#512bd4] text-white' },
        { label: 'JavaScript (ES6+)', bg: 'bg-[#f7df1e] text-black font-bold' },
        { label: 'SQL (T-SQL)', bg: 'bg-[#3178c6] text-white' }
      ]
    },
    {
      name: 'Backend Frameworks',
      badgeColor: 'bg-blue-950/60 border-blue-500/40 text-blue-300',
      items: [
        { label: 'ASP.NET Core', bg: 'bg-[#512bd4] text-white' },
        { label: 'Node.js', bg: 'bg-[#68a063] text-white' },
        { label: 'Express.js', bg: 'bg-[#303030] text-white' }
      ]
    },
    {
      name: 'Frontend Technologies',
      badgeColor: 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300',
      items: [
        { label: 'React.js', bg: 'bg-[#61dafb] text-black font-bold' },
        { label: 'Next.js 14', bg: 'bg-black text-white border border-[#58a6ff]' },
        { label: 'Tailwind CSS', bg: 'bg-[#38bdf8] text-black font-bold' },
        { label: 'Bootstrap', bg: 'bg-[#7952b3] text-white' }
      ]
    },
    {
      name: 'Databases',
      badgeColor: 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300',
      items: [
        { label: 'MySQL', bg: 'bg-[#00758f] text-white' },
        { label: 'MongoDB', bg: 'bg-[#47a248] text-white' }
      ]
    },
    {
      name: 'Tools & Environments',
      badgeColor: 'bg-amber-950/60 border-amber-500/40 text-amber-300',
      items: [
        { label: 'Git & GitHub', bg: 'bg-[#f05032] text-white' },
        { label: 'Postman', bg: 'bg-[#ff6c37] text-white' },
        { label: 'VS Code', bg: 'bg-[#007acc] text-white' },
        { label: 'Visual Studio 2022', bg: 'bg-[#5c2d91] text-white' }
      ]
    }
  ];

  return (
    <div className="purple-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-500/40 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-mono">
            <Cpu className="w-6 h-6 text-[#00d2ff]" />
            Clean Categorized Tech Stack Table
          </h3>
          <p className="text-xs text-purple-300 mt-1 font-mono">
            Structured breakdown of production technologies (.NET Core & MERN Stack)
          </p>
        </div>

        <span className="px-3.5 py-1.5 rounded-xl bg-[#070414] border border-purple-500/30 text-purple-300 font-mono text-xs">
          Sample Image Structured Layout
        </span>
      </div>

      {/* Structured Table Container */}
      <div className="overflow-x-auto rounded-2xl border border-purple-500/30 bg-[#070414]">
        <table className="w-full text-left font-mono text-xs border-collapse">
          <thead>
            <tr className="bg-[#111625] border-b border-purple-500/30 text-purple-300">
              <th className="py-3.5 px-5 font-bold uppercase tracking-wider w-1/3">Category</th>
              <th className="py-3.5 px-5 font-bold uppercase tracking-wider w-2/3">Technologies</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-500/20">
            {categories.map((cat, idx) => (
              <tr key={idx} className="hover:bg-[#0b0f1a] transition-colors">
                <td className="py-4 px-5 font-bold text-white flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-lg border text-[11px] ${cat.badgeColor}`}>
                    {cat.name}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className={`px-3 py-1 rounded-md text-xs font-semibold shadow-sm ${item.bg}`}
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
