import React from 'react';
import { Gauge, Zap, ShieldCheck, CheckCircle } from 'lucide-react';

export default function PerformanceGauges() {
  const gauges = [
    { title: 'API Response Latency', value: '28 ms', target: 'Target: < 50ms', percent: 92, color: '#00D2FF', label: 'Ultra Fast' },
    { title: 'SQL Query Efficiency', value: '99.4%', target: 'Optimized Indexes', percent: 99, color: '#10B981', label: 'Zero Bottleneck' },
    { title: 'Code Maintainability', value: '98 / 100', target: 'SOLID Principles', percent: 98, color: '#8B5CF6', label: 'Clean Code' },
    { title: 'System Reliability', value: '99.99%', target: 'Zero Downtime', percent: 99.9, color: '#F59E0B', label: 'Enterprise Grade' },
  ];

  return (
    <div className="ultra-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#00d2ff]/40 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Gauge className="w-6 h-6 text-[#00d2ff]" />
            Real-Time System Speedometers & Performance Gauges
          </h3>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            Radial gauge visuals measuring live performance benchmarks of .NET & MERN services
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#09101d] border border-emerald-500/40 text-emerald-300 font-mono text-xs">
          <Zap className="w-4 h-4 text-emerald-400" /> Production Benchmark Validated
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gauges.map((g, idx) => (
          <div key={idx} className="bg-[#070d1a] p-5 rounded-2xl border border-[#1E2D4A] text-center space-y-3 flex flex-col items-center justify-between">
            <span className="text-xs font-mono text-gray-400 uppercase font-bold">{g.title}</span>

            {/* Radial SVG Semi-Gauge */}
            <div className="relative w-36 h-20 flex items-end justify-center">
              <svg width="140" height="80" viewBox="0 0 140 80" className="overflow-visible">
                {/* Background Track Arc */}
                <path
                  d="M 15 70 A 55 55 0 0 1 125 70"
                  fill="none"
                  stroke="#152136"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                {/* Active Colored Arc */}
                <path
                  d="M 15 70 A 55 55 0 0 1 125 70"
                  fill="none"
                  stroke={g.color}
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="172"
                  strokeDashoffset={172 - (172 * (g.percent / 100))}
                  className="transition-all duration-1000"
                />
              </svg>

              <div className="absolute bottom-1 text-center">
                <span className="text-xl font-black font-mono text-white block leading-none">{g.value}</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono font-bold block" style={{ color: g.color }}>
                {g.label}
              </span>
              <span className="text-[10px] text-gray-400 font-mono block mt-0.5">
                {g.target}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
