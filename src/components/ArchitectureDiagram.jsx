import React, { useState } from 'react';
import { Layers, Server, Database, Cloud, Cpu, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function ArchitectureDiagram() {
  const [selectedLayer, setSelectedLayer] = useState('api');

  const layers = [
    {
      id: 'client',
      title: '1. Frontend & Client Tier',
      icon: <Layers className="w-5 h-5 text-[#00d2ff]" />,
      techs: ['React.js 18', 'Next.js 14 (SSR)', 'Tailwind CSS', 'Redux Toolkit'],
      details: 'Responsive, accessible single-page & server-side rendered UI applications with fast client-side state handling and optimistic caching.'
    },
    {
      id: 'api',
      title: '2. Backend API & Gateway Tier',
      icon: <Server className="w-5 h-5 text-purple-400" />,
      techs: ['ASP.NET Core 8.0', 'Node.js & Express', 'RESTful Endpoints', 'JWT & OAuth2'],
      details: 'High-throughput controller & minimal API architecture with clean dependency injection, custom middleware, rate-limiting, and Swagger docs.'
    },
    {
      id: 'orm',
      title: '3. Data Access & Logic Layer',
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      techs: ['C# Business Logic', 'Entity Framework Core', 'Dapper ORM', 'Repository Pattern'],
      details: 'Optimized query execution using Dapper for raw SQL speed and EF Core for complex domain entity mappings.'
    },
    {
      id: 'database',
      title: '4. Database & Caching Tier',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      techs: ['MS SQL Server', 'MongoDB', 'Redis In-Memory Cache'],
      details: 'Relational data integrity with SQL Server paired with MongoDB document storage and Redis sub-millisecond response caching.'
    }
  ];

  return (
    <div className="ultra-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#00d2ff]/30 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#00d2ff]" />
            Enterprise Full-Stack System Architecture
          </h3>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            High-concurrency tier design engineered for scalability and zero-lag response
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#09101d] border border-purple-500/40 text-purple-300 font-mono text-xs">
          <Cloud className="w-4 h-4 text-purple-400" /> Genuine Tech & Research Architecture
        </span>
      </div>

      {/* Interactive System Flow Map */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {layers.map((layer) => (
          <div
            key={layer.id}
            onClick={() => setSelectedLayer(layer.id)}
            className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative ${
              selectedLayer === layer.id
                ? 'bg-[#0e192e] border-[#00d2ff] shadow-xl shadow-[#00d2ff]/20 scale-105'
                : 'bg-[#09101d] border-[#1E2D4A] hover:border-gray-600'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              {layer.icon}
              {selectedLayer === layer.id && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#00d2ff] animate-ping"></span>
              )}
            </div>

            <h4 className="text-sm font-bold text-white mb-2">{layer.title}</h4>

            <div className="flex flex-wrap gap-1">
              {layer.techs.map((t, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#152136] text-gray-300 border border-[#1E2D4A]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Description Panel for Selected Layer */}
      {selectedLayer && (
        <div className="bg-[#050914] p-5 rounded-2xl border border-[#00d2ff]/30 space-y-2">
          <div className="flex items-center justify-between">
            <h5 className="text-sm font-bold text-[#00d2ff] font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              LAYER HIGHLIGHT: {layers.find(l => l.id === selectedLayer)?.title}
            </h5>
            <span className="text-xs text-gray-400 font-mono">Click layers above to explore</span>
          </div>
          <p className="text-xs text-gray-200 leading-relaxed font-sans">
            {layers.find(l => l.id === selectedLayer)?.details}
          </p>
        </div>
      )}
    </div>
  );
}
