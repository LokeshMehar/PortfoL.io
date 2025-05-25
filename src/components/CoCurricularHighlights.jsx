import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const CoCurricularHighlightsCard = () => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: 'linear-gradient(135deg, #1d1836 0%, #232946 100%)', 
      color: '#fff',
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="Beyond the Classroom"
    iconStyle={{ background: '#232631', color: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-2xl">
        🧑‍💼
      </div>
    }
  >
    <div className="flex flex-col gap-5">
      {/* Main Heading */}
      <h3 className="text-white text-[24px] font-bold mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
        Co-Curricular Highlights
      </h3>

      {/* Section 1: Events & Roles */}
      <ul className="list-none space-y-3 text-[14px] text-gray-100 pl-0">
        <li className="flex items-start leading-relaxed">
          <span className="mr-3 mt-1 text-lg">🏆</span>
          <span>
            <span className="text-yellow-400 font-semibold">Core team</span>, Inter-IIIT Sports Meet (25 IIITs); also represented college in 
            <span className="text-green-300 font-medium ml-1">cricket</span>
          </span>
        </li>
        <li className="flex items-start leading-relaxed">
          <span className="mr-3 mt-1 text-lg">🎭</span>
          <span>
            <span className="text-purple-400 font-semibold">Event Head</span>, 
            <span className="font-bold text-pink-400 mx-1">Aurora</span>
            (5-year flagship fest); led 
            <span className="text-cyan-300 font-medium italic mx-1">Rang Manch</span> execution
          </span>
        </li>
        <li className="flex items-start leading-relaxed">
          <span className="mr-3 mt-1 text-lg">⚡</span>
          <span>
            <span className="text-blue-400 font-semibold">Lead</span>, 
            <span className="font-bold text-orange-400 mx-1">Urja</span>
            sports fest; won 
            <span className="text-yellow-300 font-medium">cricket gold</span>, played 
            <span className="text-green-300">football</span>
          </span>
        </li>
      </ul>

      {/* Section 2: Soft Skills & Learnings */}
      <div className="border-t border-gray-600/50 pt-4 text-[14px] text-gray-200">
        <h4 className="text-white font-bold mb-3 text-[16px] flex items-center">
          <span className="mr-2">💡</span>
          Key Learnings & Skills
        </h4>
        <ul className="list-none space-y-2 pl-0">
          <li className="flex items-start">
            <span className="mr-3 mt-1 text-sm">👥</span>
            Managed teams and <span className="text-blue-300 font-medium">large-scale logistics</span> in cultural and sports events
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 text-sm">🗣️</span>
            Sharpened <span className="text-green-300 font-medium">communication, adaptability</span>, and quick decision-making
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 text-sm">🎯</span>
            Fostered <span className="text-yellow-300 font-medium">result-oriented mindset</span> through teamwork and competition
          </li>
        </ul>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default CoCurricularHighlightsCard;