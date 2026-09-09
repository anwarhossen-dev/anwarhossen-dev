import React, { useState } from 'react';
import { Copy, Check, FileCode, Eye, Code2 } from 'lucide-react';

export default function ReadmeMaker() {
  const [profileData, setProfileData] = useState({
    name: 'MD. ANWAR HOSSEN',
    role: 'Full-Stack Software Engineer (.NET Ecosystem & MERN Stack)',
    company: 'Genuine Technology & Research Ltd.',
    location: 'Bangladesh (GMT+6)',
    status: 'Open for Full-Stack (.NET/MERN) Projects',
    bio: 'I am a highly motivated Full-Stack Developer specializing in the .NET Ecosystem and MERN Stack (< 2 Years Experience). Currently contributing at Genuine Technology & Research Ltd.',
    linkedin: 'https://linkedin.com/in/anowar21',
    whatsapp: 'https://wa.me/01777498421',
    facebook: 'https://www.facebook.com/md.anowarhossenkabir',
    email: 'anwarhossendeveloper21@gmail.com',
    themeColor: '#00D2FF',
    selectedTech: ['ASP.NET Core', 'C#', 'Node.js', 'Express.js', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'MySQL', 'MongoDB', 'Git', 'Postman'],
    project1Title: '🎨 Artify',
    project1Url: 'https://tubular-sundae-69af35.netlify.app',
    project2Title: '👨‍🍳 Local Chef Bazaar',
    project2Url: 'https://localchefbazaar-612c0.web.app',
    project3Title: '🎫 Ticket System',
    project3Url: 'https://stirring-frangipane-d150ce.netlify.app',
  });

  const [activeTab, setActiveTab] = useState('editor');
  const [copied, setCopied] = useState(false);

  const availableTech = [
    'ASP.NET Core', 'C#', 'Node.js', 'Express.js', 'React', 'Next.js',
    'Tailwind CSS', 'Bootstrap', 'MySQL', 'MongoDB', 'Git', 'Postman'
  ];

  const toggleTech = (techName) => {
    setProfileData(prev => {
      const exists = prev.selectedTech.includes(techName);
      return {
        ...prev,
        selectedTech: exists
          ? prev.selectedTech.filter(t => t !== techName)
          : [...prev.selectedTech, techName]
      };
    });
  };

  const generatedMarkdown = `<!-- SEO Meta Tags - Indexed by Google -->
<!-- Name: ${profileData.name}, Roles: ${profileData.role} -->

<div align="center">
  <svg width="100%" height="180" viewBox="0 0 900 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0b071e" />
        <stop offset="50%" stop-color="#180e36" />
        <stop offset="100%" stop-color="#090518" />
      </linearGradient>
    </defs>
    <rect width="900" height="180" rx="16" fill="url(#headerGrad)" stroke="#7C3AED" stroke-width="1.5"/>
    <text x="50%" y="42%" text-anchor="middle" fill="${profileData.themeColor}" font-family="monospace, sans-serif" font-size="32" font-weight="bold">${profileData.name}</text>
    <text x="50%" y="65%" text-anchor="middle" fill="#FFFFFF" font-family="monospace, sans-serif" font-size="16" font-weight="500">${profileData.role}</text>
    <text x="50%" y="82%" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12">${profileData.company} • ${profileData.location}</text>
  </svg>
</div>

<br/>

<div align="center">
  <a href="${profileData.linkedin}" target="_blank"><span style="background: #1e1346; color: #00D2FF; border: 1px solid #7C3AED; padding: 8px 16px; border-radius: 10px; font-family: monospace; font-size: 12px; font-weight: bold;">LinkedIn ↗</span></a>
  &nbsp;
  <a href="${profileData.whatsapp}" target="_blank"><span style="background: #1e1346; color: #10B981; border: 1px solid #7C3AED; padding: 8px 16px; border-radius: 10px; font-family: monospace; font-size: 12px; font-weight: bold;">WhatsApp ↗</span></a>
  &nbsp;
  <a href="${profileData.facebook}" target="_blank"><span style="background: #1e1346; color: #3B82F6; border: 1px solid #7C3AED; padding: 8px 16px; border-radius: 10px; font-family: monospace; font-size: 12px; font-weight: bold;">Facebook ↗</span></a>
  &nbsp;
  <a href="mailto:${profileData.email}"><span style="background: #1e1346; color: #F43F5E; border: 1px solid #7C3AED; padding: 8px 16px; border-radius: 10px; font-family: monospace; font-size: 12px; font-weight: bold;">Email ↗</span></a>
</div>

<br/>

---

### 🚀 About Me
${profileData.bio}

---

### 🛠️ Tech Stack & Specialized Tools
<div align="center">
${profileData.selectedTech.map(t => `<span style="background:#130b2e; color:${profileData.themeColor}; padding:6px 12px; border-radius:6px; border:1px solid #7C3AED; font-family:monospace; margin:4px; display:inline-block;">${t}</span>`).join('\n')}
</div>

---

### 🌟 Featured Projects
- **${profileData.project1Title}** - [Live Demo](${profileData.project1Url})
- **${profileData.project2Title}** - [Live Demo](${profileData.project2Url})
- **${profileData.project3Title}** - [Live Demo](${profileData.project3Url})
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="purple-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-500/40 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-500/30 pb-5">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-mono">
            <FileCode className="w-6 h-6 text-[#00d2ff]" />
            Accurate GitHub Profile ReadMe Generator
          </h3>
          <p className="text-xs text-purple-300 mt-1 font-mono">
            Generated Markdown code strictly based on your exact profile information (&lt; 2 Years Experience)
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-[#070414] p-1 rounded-xl border border-purple-500/30 text-xs">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-3 py-1.5 rounded-lg transition-all font-mono ${
              activeTab === 'editor' ? 'bg-[#00d2ff] text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            ✏️ Editor
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1.5 rounded-lg transition-all font-mono ${
              activeTab === 'preview' ? 'bg-[#00d2ff] text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5 inline mr-1" /> Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 rounded-lg transition-all font-mono ${
              activeTab === 'code' ? 'bg-[#00d2ff] text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 inline mr-1" /> Markdown Code
          </button>
        </div>
      </div>

      {activeTab === 'editor' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="space-y-4 bg-[#070414] p-5 rounded-2xl border border-purple-500/30">
            <h4 className="font-bold text-white text-sm flex items-center gap-1.5 text-[#00d2ff]">
              1. Profile Info & Links
            </h4>

            <div>
              <label className="text-gray-400 font-mono block mb-1">Developer Name:</label>
              <input
                type="text"
                value={profileData.name}
                onChange={e => setProfileData({ ...profileData, name: e.target.value })}
                className="w-full bg-[#111c33] border border-[#1E2D4A] rounded-xl px-3 py-2 text-white font-mono focus:border-[#00d2ff] outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 font-mono block mb-1">Role / Headline:</label>
              <input
                type="text"
                value={profileData.role}
                onChange={e => setProfileData({ ...profileData, role: e.target.value })}
                className="w-full bg-[#111c33] border border-[#1E2D4A] rounded-xl px-3 py-2 text-white font-mono focus:border-[#00d2ff] outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 font-mono block mb-1">Company:</label>
              <input
                type="text"
                value={profileData.company}
                onChange={e => setProfileData({ ...profileData, company: e.target.value })}
                className="w-full bg-[#111c33] border border-[#1E2D4A] rounded-xl px-3 py-2 text-white font-mono focus:border-[#00d2ff] outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 font-mono block mb-1">About Bio:</label>
              <textarea
                rows={3}
                value={profileData.bio}
                onChange={e => setProfileData({ ...profileData, bio: e.target.value })}
                className="w-full bg-[#111c33] border border-[#1E2D4A] rounded-xl px-3 py-2 text-white font-sans focus:border-[#00d2ff] outline-none"
              />
            </div>
          </div>

          <div className="space-y-4 bg-[#070414] p-5 rounded-2xl border border-purple-500/30">
            <h4 className="font-bold text-white text-sm flex items-center gap-1.5 text-teal-400">
              2. Tech Stack Selector (Exact Stack)
            </h4>

            <div className="flex flex-wrap gap-2">
              {availableTech.map((tech) => {
                const isSelected = profileData.selectedTech.includes(tech);
                return (
                  <button
                    key={tech}
                    onClick={() => toggleTech(tech)}
                    className={`px-3 py-1.5 rounded-lg border font-mono transition-all ${
                      isSelected
                        ? 'bg-[#00d2ff] text-black font-bold border-[#00d2ff]'
                        : 'bg-[#111c33] text-gray-400 border-[#1E2D4A] hover:text-white'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}{tech}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'preview' && (
        <div className="bg-[#070414] p-6 rounded-2xl border border-purple-500/30 space-y-4 text-xs">
          <h2 className="text-2xl font-bold text-[#00d2ff] font-mono">{profileData.name}</h2>
          <p className="text-gray-300 font-mono">{profileData.role}</p>
          <p className="text-gray-400">{profileData.company} • {profileData.location}</p>
          <p className="text-gray-300 pt-2 border-t border-purple-500/30">{profileData.bio}</p>
        </div>
      )}

      {activeTab === 'code' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-gray-300">Copy & Paste Code into GitHub README.md:</span>
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00d2ff] hover:bg-cyan-300 text-black font-mono font-bold text-xs transition-all shadow-md"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-800" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY CODE'}</span>
            </button>
          </div>

          <pre className="bg-[#070414] p-4 rounded-2xl border border-purple-500/30 text-xs font-mono text-teal-300 overflow-x-auto max-h-96 leading-relaxed">
            {generatedMarkdown}
          </pre>
        </div>
      )}
    </div>
  );
}
