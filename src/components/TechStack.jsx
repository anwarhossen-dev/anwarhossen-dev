import React, { useState } from 'react';
import { Code, Server, Database, Layers, CheckCircle2, Cpu } from 'lucide-react';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'backend', name: 'Backend & Logic (.NET / Node)' },
    { id: 'frontend', name: 'Frontend & UI (React / Next)' },
    { id: 'dbops', name: 'Database & Ops (SQL / Mongo / Cloud)' },
  ];

  const technologies = [
    // Backend
    { name: 'ASP.NET Core & C#', category: 'backend', level: 95, exp: '4+ Years', icon: '⚡', highlight: true, tag: 'Primary Stack' },
    { name: 'Node.js & Express', category: 'backend', level: 90, exp: '3+ Years', icon: '🟢', tag: 'MERN Backend' },
    { name: 'RESTful APIs & Microservices', category: 'backend', level: 92, exp: '4+ Years', icon: '🔌', tag: 'Architecture' },
    { name: 'EF Core & Dapper', category: 'backend', level: 88, exp: '3+ Years', icon: '🎯', tag: 'ORM & Querying' },

    // Frontend
    { name: 'React.js & Hooks', category: 'frontend', level: 94, exp: '4+ Years', icon: '⚛️', highlight: true, tag: 'Primary Frontend' },
    { name: 'Next.js 14 / SSR', category: 'frontend', level: 88, exp: '2+ Years', icon: '▲', tag: 'Fullstack React' },
    { name: 'Tailwind CSS & UI', category: 'frontend', level: 96, exp: '3+ Years', icon: '🎨', tag: 'Styling Engine' },
    { name: 'Bootstrap & HTML5/CSS3', category: 'frontend', level: 95, exp: '4+ Years', icon: '💅', tag: 'Responsive UI' },

    // Database & Ops
    { name: 'Microsoft SQL Server', category: 'dbops', level: 92, exp: '4+ Years', icon: '🗄️', highlight: true, tag: 'Enterprise RDBMS' },
    { name: 'MySQL & Optimization', category: 'dbops', level: 90, exp: '3+ Years', icon: '🐬', tag: 'RDBMS' },
    { name: 'MongoDB & Mongoose', category: 'dbops', level: 88, exp: '3+ Years', icon: '🍃', tag: 'NoSQL' },
    { name: 'Git & Azure Cloud', category: 'dbops', level: 90, exp: '4+ Years', icon: '☁️', tag: 'DevOps & Versioning' },
  ];

  const filteredTech = activeTab === 'all'
    ? technologies
    : technologies.filter(t => t.category === activeTab);

  return (
    <div className="glass-panel rounded-2xl p-6 shadow-xl border border-[#1E2D4A] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#00d2ff]" />
            Core Tech Stack & Specialized Tools
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Production-proven engineering capabilities in .NET Ecosystem & MERN Stack
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-1.5 bg-[#09101d] p-1 rounded-xl border border-[#1E2D4A] text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === cat.id
                  ? 'bg-[#00d2ff] text-black font-semibold shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredTech.map((tech, idx) => (
          <div
            key={idx}
            className={`bg-[#09101d] p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
              tech.highlight
                ? 'border-[#00d2ff]/50 shadow-md shadow-[#00d2ff]/10'
                : 'border-[#1E2D4A] hover:border-gray-600'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#152136] text-[#00d2ff] border border-[#00d2ff]/30">
                {tech.tag}
              </span>
            </div>

            <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-1.5">
              {tech.name}
            </h4>

            <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-2">
              <span>Exp: {tech.exp}</span>
              <span className="text-[#00d2ff] font-bold">{tech.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#152136] h-2 rounded-full overflow-hidden p-0.5 border border-[#1E2D4A]">
              <div
                className="h-full bg-gradient-to-r from-teal-500 to-[#00d2ff] rounded-full transition-all duration-1000"
                style={{ width: `${tech.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
