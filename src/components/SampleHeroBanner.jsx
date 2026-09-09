import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function SampleHeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl purple-glass p-8 sm:p-12 text-center space-y-6">
      {/* Glow Effects */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/50 text-purple-300 text-xs font-mono font-bold tracking-wider uppercase">
        <Sparkles className="w-4 h-4 text-[#00d2ff]" />
        <span>Full-Stack Engineering Portfolio</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
        MD. ANWAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-[#00d2ff] to-teal-300">HOSSEN</span>
      </h1>

      <p className="text-base sm:text-xl text-purple-200 font-mono max-w-3xl mx-auto">
        Full-Stack Software Engineer (.NET Ecosystem & MERN Stack)<br />
        <span className="text-[#00d2ff] text-sm">Full-Stack Developer at <b>Genuine Technology & Research Ltd.</b></span>
      </p>

      {/* Accurate Bio Box */}
      <div className="max-w-3xl mx-auto bg-[#070414]/70 p-6 rounded-2xl border border-purple-500/30 font-sans text-sm text-gray-300 leading-relaxed shadow-inner">
        "I am a highly motivated Full-Stack Developer specializing in building enterprise ERP applications, RESTful APIs, and modern React/Next.js web applications (&lt; 2 Years Experience)."
      </div>
    </div>
  );
}
