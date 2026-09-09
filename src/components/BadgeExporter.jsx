import React, { useState } from 'react';
import { Copy, Check, Shield, Code, Sparkles, Terminal } from 'lucide-react';

export default function BadgeExporter() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const snippets = [
    {
      title: 'Header Banner (Pure Inline HTML/SVG)',
      description: 'Zero third-party header banner with gradient text and glowing badges',
      code: `<div align="center">
  <h1 align="center" style="font-family: monospace; color: #00d2ff;">
    ⚡ MD. ANWAR HOSSEN
  </h1>
  <p align="center">
    <b>Full-Stack Software Engineer | Expert in .NET Core & MERN Stack</b><br/>
    Building Enterprise ERPs, Microservices & Scalable Web Apps
  </p>
</div>`
    },
    {
      title: 'Local Time & Bangladesh Badge',
      description: 'Clean SVG pill badge for location and timezone',
      code: `<div align="center">
  <svg width="280" height="35" xmlns="http://www.w3.org/2000/svg">
    <rect width="280" height="35" rx="8" fill="#0B1120" stroke="#00d2ff" stroke-width="1.5"/>
    <text x="15" y="22" fill="#00d2ff" font-family="monospace" font-size="12" font-weight="bold">📍 Bangladesh (GMT+6)</text>
    <circle cx="255" cy="18" r="5" fill="#10B981"/>
  </svg>
</div>`
    },
    {
      title: 'Tech Stack Pure HTML Badges',
      description: 'Zero-API technology tags for .NET, C#, React, Next.js, and SQL',
      code: `<div align="center">
  <span style="background:#0B1120; color:#00d2ff; padding:6px 12px; border-radius:6px; border:1px solid #00d2ff; font-family:monospace;">ASP.NET Core</span>
  <span style="background:#0B1120; color:#00d2ff; padding:6px 12px; border-radius:6px; border:1px solid #00d2ff; font-family:monospace;">C#</span>
  <span style="background:#0B1120; color:#00d2ff; padding:6px 12px; border-radius:6px; border:1px solid #00d2ff; font-family:monospace;">React.js</span>
  <span style="background:#0B1120; color:#00d2ff; padding:6px 12px; border-radius:6px; border:1px solid #00d2ff; font-family:monospace;">Next.js 14</span>
  <span style="background:#0B1120; color:#00d2ff; padding:6px 12px; border-radius:6px; border:1px solid #00d2ff; font-family:monospace;">SQL Server</span>
</div>`
    }
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 shadow-xl border border-[#1E2D4A] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#00d2ff]" />
            Self-Hosted GitHub README Snippet Exporter
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Export 100% self-contained HTML/SVG snippets for your GitHub Profile README
          </p>
        </div>

        <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> 0 3rd-Party Server Calls
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {snippets.map((snip, idx) => (
          <div key={idx} className="bg-[#09101d] p-4 rounded-xl border border-[#1E2D4A] flex flex-col justify-between space-y-3">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-[#00d2ff]" />
                {snip.title}
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                {snip.description}
              </p>

              <div className="bg-[#050811] p-2.5 rounded-lg border border-[#152136] font-mono text-[11px] text-teal-300 mt-3 overflow-x-auto max-h-24">
                <pre>{snip.code}</pre>
              </div>
            </div>

            <button
              onClick={() => handleCopy(snip.code, idx)}
              className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-mono font-semibold bg-[#152136] hover:bg-[#00d2ff] hover:text-black text-[#00d2ff] py-2 rounded-lg border border-[#00d2ff]/30 transition-all"
            >
              {copiedIndex === idx ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>COPIED TO CLIPBOARD!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY SNIPPET</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
