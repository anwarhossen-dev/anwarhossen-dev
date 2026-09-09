import React from 'react';
import { Code, Server, BookOpen, MessageSquare, Cpu, Users } from 'lucide-react';

export default function SampleSixFactorsGrid() {
  const pillars = [
    {
      icon: <Server className="w-6 h-6 text-purple-400" />,
      title: '🔭 Working On',
      items: ['Enterprise ERP Systems', 'RESTful Web APIs', 'C# & ASP.NET Core Modules'],
      highlight: 'Active Focus'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#00d2ff]" />,
      title: '🌱 Learning & Exploring',
      items: ['Next.js 14 App Router & SSR', 'Microservices Architecture', 'Azure Cloud Deployment'],
      highlight: 'Up-skilling'
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: '👯 Collaboration',
      items: ['Open for Full-Stack Projects', 'ASP.NET Core & React Solutions', 'Scalable Web Applications'],
      highlight: 'Open to Work'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-amber-400" />,
      title: '💬 Ask Me About',
      items: ['C# & ASP.NET Core Development', 'React.js & Frontend State UI', 'SQL Query Optimization'],
      highlight: 'Consulting'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white font-mono flex items-center justify-center gap-2">
          ⚡ Professional Focus & Interests
        </h3>
        <p className="text-xs text-purple-300 font-mono mt-1">
          Current focus, learning roadmap, and engineering capabilities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p, idx) => (
          <div
            key={idx}
            className="purple-glass p-6 rounded-3xl border border-purple-500/40 hover:border-[#00d2ff] transition-all duration-300 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-purple-950/60 rounded-2xl border border-purple-500/30">
                {p.icon}
              </div>
              <span className="text-[10px] font-mono text-[#00d2ff] px-2.5 py-0.5 rounded-full bg-[#0b071e] border border-[#00d2ff]/40">
                {p.highlight}
              </span>
            </div>

            <h4 className="text-xl font-bold text-white">{p.title}</h4>

            <ul className="space-y-1.5 text-xs text-gray-300 font-sans list-disc list-inside">
              {p.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
