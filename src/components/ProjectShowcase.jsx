import React, { useState } from 'react';
import { ExternalLink, Star, Code2, Layers, ArrowUpRight, Monitor, Sparkles, X, CheckCircle } from 'lucide-react';

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'artify',
      title: '🎨 Artify',
      subtitle: 'MERN Showcase Platform',
      description: 'Interactive portfolio and artwork showcase platform allowing artists to list, view, manage, and interact with digital art assets in real time.',
      fullDetails: 'Built using MongoDB, Express, React, and Node.js. Features full user authentication, cloud asset uploading, real-time comment feeds, and custom dynamic styling.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      liveUrl: 'https://tubular-sundae-69af35.netlify.app',
      featured: true,
      badge: 'POPULAR',
      stats: '120+ Digital Artworks'
    },
    {
      id: 'local-chef',
      title: '👨‍🍳 Local Chef Bazaar',
      subtitle: 'Food Marketplace App',
      description: 'Community-driven food ordering and chef marketplace app enabling local culinary masters to share dishes directly with food enthusiasts.',
      fullDetails: 'Integrated with Firebase Auth, Cloud Firestore, custom Express API endpoints, interactive order tracking, and responsive mobile checkout UI.',
      tags: ['React', 'Firebase', 'Node.js', 'Express', 'Tailwind'],
      liveUrl: 'https://localchefbazaar-612c0.web.app',
      featured: true,
      badge: 'LIVE APP',
      stats: 'Food Order Portal'
    },
    {
      id: 'ticket-system',
      title: '🎫 Ticket System',
      subtitle: 'Automated Workflow Solution',
      description: 'Full-featured issue tracking, priority queue management, and automated workflow system built for fast operational turnarounds.',
      fullDetails: 'Designed for high-throughput helpdesk teams. Includes custom ticket status state machines, SLA escalation timers, priority assignment algorithms, and real-time dashboard stats.',
      tags: ['React', 'REST API', 'Node.js', 'Tailwind CSS'],
      liveUrl: 'https://stirring-frangipane-d150ce.netlify.app',
      featured: true,
      badge: 'ENTERPRISE',
      stats: 'Workflow Automation'
    }
  ];

  return (
    <div className="ultra-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#00d2ff]/30 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#00d2ff]" />
            Smart 3D Featured Project Showcase
          </h3>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            Interactive enterprise and full-stack software applications built by MD. Anwar Hossen
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs text-[#00d2ff] bg-[#00d2ff]/10 px-3.5 py-1.5 rounded-xl border border-[#00d2ff]/40 font-mono">
          <Monitor className="w-4 h-4" /> 3 Live Deployments Ready
        </span>
      </div>

      {/* Grid of Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="group relative bg-[#070d1a] rounded-2xl p-6 border border-[#1E2D4A] hover:border-[#00d2ff] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00d2ff]/20 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Glowing Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d2ff] via-teal-400 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#00d2ff] px-3 py-1 rounded-full bg-[#111c33] border border-[#00d2ff]/40 shadow-sm">
                  {proj.badge}
                </span>
                <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {proj.stats}
                </span>
              </div>

              <div>
                <h4 className="text-2xl font-black text-white group-hover:text-[#00d2ff] transition-colors flex items-center gap-2">
                  {proj.title}
                </h4>
                <p className="text-xs text-teal-300 font-mono font-medium mt-1">
                  {proj.subtitle}
                </p>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                {proj.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono text-gray-200 bg-[#121d33] px-2.5 py-1 rounded-md border border-[#1E2D4A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Action Buttons */}
            <div className="pt-6 mt-4 border-t border-[#1E2D4A] flex items-center justify-between gap-2">
              <button
                onClick={() => setSelectedProject(proj)}
                className="text-xs text-gray-300 hover:text-[#00d2ff] font-mono underline underline-offset-4"
              >
                [ View Architecture ]
              </button>

              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-gradient-to-r from-[#00d2ff] to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-black px-4 py-2 rounded-xl transition-all shadow-lg group-hover:scale-105"
              >
                <span>LIVE DEMO</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Smart Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0b1326] border border-[#00d2ff] rounded-3xl max-w-lg w-full p-6 shadow-2xl relative space-y-4">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-[#152136] text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h4 className="text-2xl font-black text-white">{selectedProject.title}</h4>
            <p className="text-xs text-[#00d2ff] font-mono">{selectedProject.subtitle}</p>

            <div className="bg-[#050914] p-4 rounded-xl border border-[#1E2D4A] text-xs text-gray-300 space-y-2">
              <span className="text-gray-400 font-mono block text-[10px] uppercase font-bold">Architecture & Features:</span>
              <p className="leading-relaxed">{selectedProject.fullDetails}</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Production Deployed
              </span>
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#00d2ff] text-black font-mono font-bold text-xs"
              >
                Open Live Web App ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
