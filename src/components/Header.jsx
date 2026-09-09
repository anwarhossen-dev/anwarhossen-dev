import React, { useState } from 'react';
import { Terminal, Cpu, Sparkles, Activity, ShieldCheck, Play, CornerDownLeft, Volume2, VolumeX } from 'lucide-react';

export default function Header() {
  const [terminalOutput, setTerminalOutput] = useState([
    { text: "System Initialized: MD. ANWAR HOSSEN Git Dashboard v2.0", type: "system" },
    { text: "Role: Full-Stack Engineer (.NET Core & MERN Stack)", type: "info" },
    { text: "Company: Genuine Technology & Research Ltd.", type: "highlight" }
  ]);

  const [activeCommand, setActiveCommand] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(true);

  const runCommand = (cmdKey) => {
    let newLogs = [];
    if (cmdKey === 'dotnet') {
      newLogs = [
        { text: "$ dotnet --version", type: "cmd" },
        { text: ".NET Core 8.0 SDK • C# 12 • Entity Framework Core • Dapper", type: "info" },
        { text: "Status: Enterprise ERP Backend active & optimized", type: "success" }
      ];
    } else if (cmdKey === 'mern') {
      newLogs = [
        { text: "$ npm list --depth=0", type: "cmd" },
        { text: "React 18 • Next.js 14 • Node.js • Express • MongoDB • Tailwind", type: "info" },
        { text: "Status: Fullstack Web Apps Deployed Live", type: "success" }
      ];
    } else if (cmdKey === 'git') {
      newLogs = [
        { text: "$ git status", type: "cmd" },
        { text: "On branch main • 1,480+ commits in 2026 • 0 uncommitted changes", type: "info" },
        { text: "Commit Streak: 18 Days Active", type: "success" }
      ];
    } else if (cmdKey === 'clear') {
      setTerminalOutput([
        { text: "Terminal cleared. Select a command below:", type: "system" }
      ]);
      return;
    }
    setTerminalOutput(prev => [...prev, ...newLogs]);
  };

  return (
    <header className="relative overflow-hidden rounded-3xl ultra-glass border border-[#00d2ff]/30 p-6 sm:p-8 shadow-2xl mb-8">
      {/* Background Neon Accent Radial */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Developer Info */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/40 text-[#00d2ff] text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping"></span>
            <span>CYBER-DEVELOPER COMMAND DASHBOARD</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            MD. ANWAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-teal-300 to-purple-400 neon-text-cyan">HOSSEN</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 font-mono max-w-xl">
            Full-Stack Software Engineer • Enterprise .NET Architect • MERN Stack Specialist at <span className="text-[#00d2ff] font-semibold">Genuine Technology & Research Ltd.</span>
          </p>

          {/* Quick Metrics Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#09101d] border border-[#1E2D4A] text-xs text-gray-300 font-mono">
              <Activity className="w-3.5 h-3.5 text-emerald-400" /> Ping: <span className="text-emerald-400 font-bold">12ms</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#09101d] border border-[#1E2D4A] text-xs text-gray-300 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00d2ff]" /> 0 3rd-Party APIs
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#09101d] border border-[#1E2D4A] text-xs text-gray-300 font-mono">
              <Cpu className="w-3.5 h-3.5 text-purple-400" /> ASP.NET Core + React
            </span>
          </div>
        </div>

        {/* Right Side: Interactive Smart Terminal Window */}
        <div className="w-full lg:w-[480px] bg-[#050914] rounded-2xl border border-[#00d2ff]/40 shadow-2xl overflow-hidden font-mono text-xs">
          {/* Terminal Titlebar */}
          <div className="bg-[#0b1326] px-4 py-2.5 border-b border-[#1E2D4A] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="text-gray-400 text-[11px] ml-2 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-[#00d2ff]" /> anwar@dev-terminal:~
              </span>
            </div>

            <button
              onClick={() => runCommand('clear')}
              className="text-[10px] text-gray-400 hover:text-white px-2 py-0.5 rounded bg-[#152136] border border-[#1E2D4A]"
            >
              Clear Log
            </button>
          </div>

          {/* Terminal Content Screen */}
          <div className="p-4 h-44 overflow-y-auto space-y-1.5 text-left bg-[#050914]">
            {terminalOutput.map((item, index) => (
              <div key={index} className="leading-relaxed">
                {item.type === 'cmd' && (
                  <span className="text-[#00d2ff] font-bold">{item.text}</span>
                )}
                {item.type === 'system' && (
                  <span className="text-purple-400">{item.text}</span>
                )}
                {item.type === 'info' && (
                  <span className="text-gray-300">{item.text}</span>
                )}
                {item.type === 'success' && (
                  <span className="text-emerald-400 font-semibold">{item.text}</span>
                )}
                {item.type === 'highlight' && (
                  <span className="text-amber-300 font-semibold">{item.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Command Buttons Bar */}
          <div className="p-2.5 bg-[#09101d] border-t border-[#1E2D4A] flex items-center gap-1.5 overflow-x-auto">
            <span className="text-gray-500 text-[10px] uppercase font-bold shrink-0">RUN:</span>
            <button
              onClick={() => runCommand('dotnet')}
              className="px-2.5 py-1 rounded bg-[#152136] hover:bg-[#00d2ff] hover:text-black text-[#00d2ff] font-mono text-[11px] transition-all border border-[#00d2ff]/30 shrink-0"
            >
              $ dotnet info
            </button>
            <button
              onClick={() => runCommand('mern')}
              className="px-2.5 py-1 rounded bg-[#152136] hover:bg-[#00d2ff] hover:text-black text-[#00d2ff] font-mono text-[11px] transition-all border border-[#00d2ff]/30 shrink-0"
            >
              $ mern stack
            </button>
            <button
              onClick={() => runCommand('git')}
              className="px-2.5 py-1 rounded bg-[#152136] hover:bg-[#00d2ff] hover:text-black text-[#00d2ff] font-mono text-[11px] transition-all border border-[#00d2ff]/30 shrink-0"
            >
              $ git status
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
