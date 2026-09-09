import React, { useState } from 'react';
import { TrendingUp, Sparkles, Activity } from 'lucide-react';

export default function SmoothWaveGraph() {
  const [activePoint, setActivePoint] = useState(null);

  const points = [
    { x: 30, y: 140, month: 'Jan', commits: 115, hours: 130 },
    { x: 90, y: 90, month: 'Feb', commits: 142, hours: 155 },
    { x: 150, y: 120, month: 'Mar', commits: 128, hours: 140 },
    { x: 210, y: 60, month: 'Apr', commits: 175, hours: 185 },
    { x: 270, y: 40, month: 'May', commits: 198, hours: 210 },
    { x: 330, y: 80, month: 'Jun', commits: 156, hours: 168 },
    { x: 390, y: 50, month: 'Jul', commits: 182, hours: 195 },
    { x: 450, y: 30, month: 'Aug', commits: 210, hours: 225 },
    { x: 510, y: 20, month: 'Sep', commits: 235, hours: 240 },
  ];

  return (
    <div className="purple-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-500/40 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-mono">
            <TrendingUp className="w-6 h-6 text-[#00d2ff]" />
            Ultra-Smooth Commit & Coding Velocity Wave Graph
          </h3>
          <p className="text-xs text-purple-300 mt-1 font-mono">
            Continuous spline curve visualizing monthly coding intensity and commit throughput
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-gray-300 bg-[#070414] px-3.5 py-1.5 rounded-xl border border-purple-500/30">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>Peak Velocity: 235 Commits/Mo</span>
        </div>
      </div>

      {/* Tooltip Header */}
      <div className="h-6 flex items-center justify-between text-xs font-mono">
        {activePoint ? (
          <span className="text-[#00d2ff] font-bold">
            📍 {activePoint.month}: {activePoint.commits} Commits • {activePoint.hours} Coding Hours
          </span>
        ) : (
          <span className="text-gray-400">Hover over curve data points to inspect monthly metrics</span>
        )}
        <span className="text-purple-400 font-bold">SMOOTH SPLINE WAVE</span>
      </div>

      {/* SVG Wave Graph */}
      <div className="relative bg-[#070414] p-4 rounded-2xl border border-purple-500/30 overflow-x-auto">
        <svg width="100%" height="220" viewBox="0 0 540 200" className="overflow-visible">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#070414" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>

          {/* Grid Horizontal Lines */}
          <line x1="0" y1="40" x2="540" y2="40" stroke="#1E2D4A" strokeDasharray="3 3" />
          <line x1="0" y1="90" x2="540" y2="90" stroke="#1E2D4A" strokeDasharray="3 3" />
          <line x1="0" y1="140" x2="540" y2="140" stroke="#1E2D4A" strokeDasharray="3 3" />

          {/* Area Wave Path */}
          <path
            d="M 30 140 Q 60 90 90 90 T 150 120 T 210 60 T 270 40 T 330 80 T 390 50 T 450 30 T 510 20 L 510 180 L 30 180 Z"
            fill="url(#waveGradient)"
          />

          {/* Stroke Spline Curve */}
          <path
            d="M 30 140 Q 60 90 90 90 T 150 120 T 210 60 T 270 40 T 330 80 T 390 50 T 450 30 T 510 20"
            fill="none"
            stroke="url(#strokeGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Data Points */}
          {points.map((p, idx) => (
            <g
              key={idx}
              onMouseEnter={() => setActivePoint(p)}
              onMouseLeave={() => setActivePoint(null)}
              className="cursor-pointer group"
            >
              <circle
                cx={p.x}
                cy={p.y}
                r="6"
                fill="#070414"
                stroke="#00D2FF"
                strokeWidth="2.5"
                className="transition-transform group-hover:scale-150"
              />
              <text
                x={p.x}
                y="195"
                textAnchor="middle"
                fill="#94A3B8"
                fontSize="11"
                fontFamily="monospace"
                className="group-hover:fill-[#00d2ff] transition-colors"
              >
                {p.month}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
