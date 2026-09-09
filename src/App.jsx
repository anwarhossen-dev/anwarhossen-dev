import React from 'react';
import MarqueeTicker from './components/MarqueeTicker';
import SampleHeroBanner from './components/SampleHeroBanner';
import ProfileCard from './components/ProfileCard';
import SampleImpactSection from './components/SampleImpactSection';
import DynamicContributionGraph from './components/DynamicContributionGraph';
import CodingHoursTracker from './components/CodingHoursTracker';
import SmoothWaveGraph from './components/SmoothWaveGraph';
import TechStackTable from './components/TechStackTable';
import SkillRadarGraph from './components/SkillRadarGraph';
import PerformanceGauges from './components/PerformanceGauges';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import ProjectShowcase from './components/ProjectShowcase';
import SampleContactPills from './components/SampleContactPills';
import ReadmeMaker from './components/ReadmeMaker';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen purple-hero-bg text-gray-100 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* 1. Animated Scrolling Marquee Ticker Headline */}
      <MarqueeTicker />

      {/* 2. Cyber Purple Hero Banner ("MD. ANWAR HOSSEN") */}
      <SampleHeroBanner />

      {/* 3. Holographic Profile & Real-Time BD Clock */}
      <ProfileCard />

      {/* 4. Verified Engineering Impact Section */}
      <SampleImpactSection />

      {/* 5. Dynamic 365-Day Git Contribution Graph & Commit Log Ticker */}
      <DynamicContributionGraph />

      {/* 6. Live Coding Hours & WakaTime / LeetCode Stats Tracker */}
      <CodingHoursTracker />

      {/* 7. Ultra-Smooth Spline Curve Velocity Wave Graph */}
      <SmoothWaveGraph />

      {/* 8. Categorized Tech Stack Master Table */}
      <TechStackTable />

      {/* 9. Pentagon Skill Radar Chart */}
      <SkillRadarGraph />

      {/* 10. System Performance Speedometers & Radial Gauges */}
      <PerformanceGauges />

      {/* 11. Enterprise Full-Stack System Architecture Flow Map */}
      <ArchitectureDiagram />

      {/* 12. Featured 3D Projects Showcase & Architecture Modal */}
      <ProjectShowcase />

      {/* 13. Contact With Me (Pill Buttons with ↗) */}
      <SampleContactPills />

      {/* 14. Interactive Self-Hosted GitHub Profile ReadMe Generator Tool */}
      <ReadmeMaker />

      {/* 15. Footer */}
      <Footer />
    </div>
  );
}
