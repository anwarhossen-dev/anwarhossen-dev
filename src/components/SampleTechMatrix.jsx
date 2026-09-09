import React from 'react';

export default function SampleTechMatrix() {
  const techCategories = [
    {
      title: 'Backend & Logic',
      color: 'text-purple-400',
      techs: ['ASP.NET Core', 'C#', 'Node.js', 'Express.js']
    },
    {
      title: 'Frontend & UI',
      color: 'text-[#00d2ff]',
      techs: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Database & Ops',
      color: 'text-emerald-400',
      techs: ['MySQL', 'MongoDB', 'Git', 'Postman']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white font-mono flex items-center justify-center gap-2">
          🛠️ Tech Stack & Specialized Tools
        </h3>
        <p className="text-xs text-purple-300 font-mono mt-1">
          Exact technologies used in daily production development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techCategories.map((cat, idx) => (
          <div
            key={idx}
            className="purple-glass p-6 rounded-3xl border border-purple-500/40 text-center space-y-4"
          >
            <h4 className={`text-lg font-extrabold font-mono ${cat.color}`}>
              {cat.title}
            </h4>

            <div className="flex flex-wrap justify-center gap-2">
              {cat.techs.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-mono font-bold text-gray-200 bg-[#070414] px-3.5 py-1.5 rounded-xl border border-purple-500/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
