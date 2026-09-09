import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SampleContactPills() {
  const links = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/anowar21', color: 'text-[#00d2ff]' },
    { name: 'WhatsApp', url: 'https://wa.me/8801777498421', color: 'text-emerald-400' },
    { name: 'Facebook', url: 'https://www.facebook.com/md.anowarhossenkabir', color: 'text-blue-400' },
    { name: 'Email Direct', url: 'mailto:anwarhossendeveloper21@gmail.com', color: 'text-rose-400' },
  ];

  return (
    <div className="space-y-4 text-center">
      <h3 className="text-xl font-bold text-white font-mono flex items-center justify-center gap-2">
        📬 Contact With Me
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="pill-btn-purple px-8 py-3 font-mono font-bold text-sm flex items-center gap-2 group shadow-lg"
          >
            <span className={link.color}>{link.name}</span>
            <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ))}
      </div>
    </div>
  );
}
