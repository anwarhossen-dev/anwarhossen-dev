import React from 'react';

export default function SampleImpactSection() {
  const impacts = [
    { number: '< 2 Years', label: 'Development Experience', sub: 'Active Software Engineer', color: 'text-purple-400' },
    { number: '.NET & MERN', label: 'Core Specialization', sub: 'ASP.NET Core, C#, React, Next.js', color: 'text-[#00d2ff]' },
    { number: 'Genuine Tech', label: 'Current Employer', sub: '& Research Ltd.', color: 'text-emerald-400' }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2 font-mono">
          📊 Engineering Overview
        </h3>
        <p className="text-xs text-purple-300 font-mono mt-1">
          Professional milestone indicators
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {impacts.map((imp, idx) => (
          <div
            key={idx}
            className="purple-glass p-8 rounded-3xl text-center space-y-2 border border-purple-500/40 hover:border-[#00d2ff] transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`text-3xl sm:text-4xl font-black font-mono ${imp.color}`}>
              {imp.number}
            </div>
            <h4 className="text-sm font-bold text-white font-mono">{imp.label}</h4>
            <span className="text-xs text-gray-400 font-mono block">{imp.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
