import React, { useState } from 'react';
import { Cpu, Sparkles } from 'lucide-react';

export default function SkillRadarGraph() {
  const skills = [
    { name: 'ASP.NET Core & C#', value: 85, label: 'Enterprise Backend Logic & APIs', color: '#00D2FF' },
    { name: 'React & MERN Stack', value: 88, label: 'Frontend Component Architecture', color: '#10B981' },
    { name: 'SQL Optimization', value: 82, label: 'MySQL & Query Performance', color: '#8B5CF6' },
    { name: 'MongoDB & NoSQL', value: 80, label: 'Document Schemas & Mongoose', color: '#F59E0B' },
    { name: 'Git & Development Ops', value: 86, label: 'Versioning & Postman Testing', color: '#EC4899' },
  ];

  return (
    <div className="purple-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-500/40 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-mono">
            <Cpu className="w-6 h-6 text-[#00d2ff]" />
            Engineering Proficiency Radar
          </h3>
          <p className="text-xs text-purple-300 mt-1 font-mono">
            Visualizing technical skill balance across .NET Core & MERN Stack (&lt; 2 Years Experience)
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#070414] border border-purple-500/40 text-purple-300 font-mono text-xs">
          <Sparkles className="w-4 h-4 text-purple-400" /> Balanced Full-Stack
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative flex items-center justify-center p-4 bg-[#070414] rounded-3xl border border-purple-500/30 min-h-[280px]">
          <svg width="260" height="260" viewBox="0 0 300 300" className="overflow-visible">
            <polygon points="150,30 264,113 220,247 80,247 36,113" fill="none" stroke="#1E2D4A" strokeWidth="1.5" />
            <polygon points="150,65 231,124 200,220 100,220 69,124" fill="none" stroke="#1E2D4A" strokeWidth="1" strokeDasharray="3 3" />
            <polygon points="150,35 250,115 210,235 90,235 48,115" fill="rgba(124, 58, 237, 0.25)" stroke="#A855F7" strokeWidth="2.5" />
            <circle cx="150" cy="35" r="5" fill="#00D2FF" />
            <circle cx="250" cy="115" r="5" fill="#10B981" />
            <circle cx="210" cy="235" r="5" fill="#8B5CF6" />
            <circle cx="90" cy="235" r="5" fill="#F59E0B" />
            <circle cx="48" cy="115" r="5" fill="#EC4899" />
          </svg>
        </div>

        <div className="space-y-3">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-[#070414] p-3.5 rounded-2xl border border-purple-500/30 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: skill.color }}></span>
                  {skill.name}
                </span>
                <span className="text-xs font-mono font-bold" style={{ color: skill.color }}>
                  {skill.value}%
                </span>
              </div>

              <div className="w-full bg-[#152136] h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${skill.value}%`, backgroundColor: skill.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
