import React from 'react';
import { Gauge, CheckCircle2, ShieldAlert, Cpu, Sparkles, TrendingUp } from 'lucide-react';

export default function MetricsRadar() {
  const metrics = [
    { title: 'Code Cleanliness', score: '98 / 100', detail: 'SOLID Principles & Clean Architecture', color: 'text-[#00d2ff]', bar: 'w-[98%]', bg: 'bg-[#00d2ff]' },
    { title: 'API Latency Rate', score: '< 35 ms', detail: 'Sub-50ms REST API response speed', color: 'text-emerald-400', bar: 'w-[95%]', bg: 'bg-emerald-400' },
    { title: 'SQL Query Efficiency', score: '99.4%', detail: 'Optimized execution plans & indexing', color: 'text-purple-400', bar: 'w-[99%]', bg: 'bg-purple-400' },
    { title: 'System Reliability', score: '99.99%', detail: 'Zero-downtime deployment pipelines', color: 'text-amber-400', bar: 'w-[99%]', bg: 'bg-amber-400' }
  ];

  return (
    <div className="ultra-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#00d2ff]/30 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Gauge className="w-6 h-6 text-[#00d2ff]" />
            Smart Engineering Quality Metrics
          </h3>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            Benchmark performance indicators across .NET and MERN applications
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#09101d] border border-emerald-500/40 text-emerald-300 font-mono text-xs">
          <TrendingUp className="w-4 h-4 text-emerald-400" /> Production Verified
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-[#09101d] p-5 rounded-2xl border border-[#1E2D4A] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400">{m.title}</span>
              <CheckCircle2 className={`w-4 h-4 ${m.color}`} />
            </div>

            <div className={`text-2xl font-black font-mono ${m.color}`}>
              {m.score}
            </div>

            <p className="text-[11px] text-gray-400 leading-tight">
              {m.detail}
            </p>

            <div className="w-full bg-[#152136] h-1.5 rounded-full overflow-hidden">
              <div className={`h-full ${m.bg} ${m.bar} rounded-full`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
