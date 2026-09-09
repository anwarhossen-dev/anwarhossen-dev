import React from 'react';
import { Heart, ShieldCheck, Code, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 pt-8 border-t border-purple-500/30 text-center space-y-4">
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300 font-mono">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4 text-[#00d2ff]" /> Anwar Hossen (আনোয়ার হোসেন) Official Portfolio
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <Code className="w-4 h-4 text-teal-400" /> ASP.NET Core & MERN Stack Engineer
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <Globe className="w-4 h-4 text-indigo-400" /> Genuine Technology & Research Ltd.
        </span>
      </div>

      <p className="text-xs text-purple-200 flex items-center justify-center gap-1 font-mono">
        <span>Designed with</span>
        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline animate-bounce" />
        <span>and Scalability in Mind</span>
      </p>

      <p className="text-xs text-gray-400 font-mono">
        Copyright © 2026 Anwar Hossen (MD. Anwar Hossen). All Rights Reserved.
      </p>
    </footer>
  );
}
