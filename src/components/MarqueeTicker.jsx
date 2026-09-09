import React from 'react';
import { Sparkles, Terminal, Flame, Zap } from 'lucide-react';

export default function MarqueeTicker() {
  return (
    <div className="purple-glass rounded-2xl p-2.5 border border-purple-500/40 overflow-hidden shadow-lg">
      <div className="flex items-center gap-3">
        {/* Fixed News Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-600 text-white font-mono text-xs font-bold uppercase tracking-wider shrink-0 shadow-md">
          <Zap className="w-3.5 h-3.5 text-[#00d2ff] animate-bounce" />
          <span>LIVE TICKER</span>
        </div>

        {/* Marquee Scrolling Content */}
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="inline-block animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] font-mono text-xs text-purple-200">
            <span className="inline-flex items-center gap-2 mx-4">
              <Sparkles className="w-3.5 h-3.5 text-[#00d2ff]" />
              <b className="text-white">MD. ANWAR HOSSEN</b> — Full-Stack Developer at <span className="text-[#00d2ff]">Genuine Technology & Research Ltd.</span>
            </span>
            <span className="text-purple-400">|</span>
            <span className="inline-flex items-center gap-2 mx-4">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <b>ACTIVE FOCUS:</b> Enterprise ERP Solutions & RESTful APIs in ASP.NET Core & C#
            </span>
            <span className="text-purple-400">|</span>
            <span className="inline-flex items-center gap-2 mx-4">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <b>OPEN FOR COLLABORATION:</b> Full-Stack (.NET & MERN) Projects
            </span>
            <span className="text-purple-400">|</span>
            <span className="inline-flex items-center gap-2 mx-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <b>STATUS:</b> Available for Scalable Enterprise Web Development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
