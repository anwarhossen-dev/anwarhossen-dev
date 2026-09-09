import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Briefcase, Eye, UserCheck, ShieldCheck, Mail, Linkedin, MessageSquare, Facebook, ExternalLink } from 'lucide-react';

export default function ProfileCard() {
  const [bdTime, setBdTime] = useState('');
  const [visitorCount, setVisitorCount] = useState(1482);

  useEffect(() => {
    // Increment visitor counter in localStorage
    const saved = localStorage.getItem('anwar_profile_views');
    const initial = saved ? parseInt(saved, 10) : 1482;
    const updated = initial + 1;
    localStorage.setItem('anwar_profile_views', updated.toString());
    setVisitorCount(updated);

    // Live Bangladesh Time (GMT+6)
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setBdTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel rounded-2xl p-6 shadow-xl border border-[#1E2D4A] relative overflow-hidden group">
      {/* Subtle background highlight */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d2ff]/5 rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-110"></div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Avatar / Avatar Box */}
        <div className="relative shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-[#00d2ff] via-teal-500 to-indigo-600 p-1 shadow-lg shadow-[#00d2ff]/20">
            <div className="w-full h-full bg-[#0B1120] rounded-xl flex flex-col items-center justify-center text-center p-2 relative overflow-hidden">
              <div className="text-3xl font-extrabold text-[#00d2ff] tracking-wider font-mono">
                AH
              </div>
              <span className="text-[10px] text-gray-400 font-mono mt-1">ANWAR HOSSEN</span>
              <div className="absolute bottom-1 right-1 flex items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#152136] text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/40 shadow-sm flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            <span>VERIFIED</span>
          </div>
        </div>

        {/* Profile Content */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                MD. Anwar Hossen
                <span className="text-xs bg-[#00d2ff]/20 text-[#00d2ff] px-2 py-0.5 rounded border border-[#00d2ff]/40 font-mono font-normal">
                  .NET & MERN
                </span>
              </h2>
              <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start gap-1.5 mt-1">
                <Briefcase className="w-4 h-4 text-[#00d2ff]" />
                <span>Full-Stack Developer at <b>Genuine Technology & Research Ltd.</b></span>
              </p>
            </div>

            {/* Local Time Widget */}
            <div className="inline-flex items-center justify-center gap-2 bg-[#09101d] px-3 py-1.5 rounded-xl border border-[#1E2D4A] font-mono text-xs text-gray-200">
              <Clock className="w-4 h-4 text-teal-400 animate-spin" style={{ animationDuration: '10s' }} />
              <div>
                <span className="text-gray-400 block text-[10px]">BD TIME (GMT+6)</span>
                <span className="text-[#00d2ff] font-bold">{bdTime || '11:24:00 PM'}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
            Passionate software engineer specializing in building high-performance enterprise web applications with ASP.NET Core, C#, React, Next.js, and SQL optimizations.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-[#09101d] p-2.5 rounded-xl border border-[#1E2D4A] text-center">
              <span className="text-xs text-gray-400 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" /> Location
              </span>
              <span className="text-xs font-semibold text-white mt-1 block">Bangladesh 🇧🇩</span>
            </div>

            <div className="bg-[#09101d] p-2.5 rounded-xl border border-[#1E2D4A] text-center">
              <span className="text-xs text-gray-400 flex items-center justify-center gap-1">
                <Eye className="w-3.5 h-3.5 text-[#00d2ff]" /> Self-Views
              </span>
              <span className="text-xs font-mono font-bold text-[#00d2ff] mt-1 block">{visitorCount.toLocaleString()}</span>
            </div>

            <div className="bg-[#09101d] p-2.5 rounded-xl border border-[#1E2D4A] text-center">
              <span className="text-xs text-gray-400 flex items-center justify-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" /> Status
              </span>
              <span className="text-xs font-semibold text-emerald-400 mt-1 block">Available</span>
            </div>

            <div className="bg-[#09101d] p-2.5 rounded-xl border border-[#1E2D4A] text-center">
              <span className="text-xs text-gray-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" /> API Mode
              </span>
              <span className="text-xs font-semibold text-indigo-300 mt-1 block">Zero 3rd-Party</span>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2">
            <a
              href="https://linkedin.com/in/anowar21"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0077B5]/20 hover:bg-[#0077B5]/40 text-[#0077B5] hover:text-white border border-[#0077B5]/40 text-xs font-medium transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://wa.me/8801777498421"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-400 hover:text-white border border-emerald-500/40 text-xs font-medium transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://www.facebook.com/md.anowarhossenkabir"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-white border border-blue-600/40 text-xs font-medium transition-all"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>
            <a
              href="mailto:anwarhossendeveloper21@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/40 text-rose-400 hover:text-white border border-rose-500/40 text-xs font-medium transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
