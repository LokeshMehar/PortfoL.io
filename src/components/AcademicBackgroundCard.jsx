import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const AcademicBackgroundCard = () => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: 'linear-gradient(135deg, #1d1836 0%, #232946 100%)', 
      color: '#fff',
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="Academic Milestones"
    iconStyle={{ background: '#2c1f3e', color: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-2xl">
        🏅
      </div>
    }
  >
    <div className="flex flex-col gap-5">
      {/* Heading */}
      <div>
        <h3 className="text-white text-[24px] font-bold mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Academic Background
        </h3>
        <ul className="list-none space-y-3 text-[14px] text-gray-100 pl-0">
          <li className="flex items-start leading-relaxed">
            <span className="mr-3 mt-1 text-lg">🎯</span>
            <span>
              Qualified <span className="font-bold text-blue-400">GATE (CS/IT)</span> in 3rd year with an 
              <span className="font-bold text-yellow-300 ml-1">All India Rank under 10,000</span>
            </span>
          </li>
          <li className="flex items-start leading-relaxed">
            <span className="mr-3 mt-1 text-lg">🚀</span>
            <span>
              Cleared <span className="font-bold text-green-400">JEE Advanced</span> & 
              <span className="font-bold text-emerald-300 ml-1">JEE Main</span> for undergraduate admission
            </span>
          </li>
          <li className="flex items-start leading-relaxed">
            <span className="mr-3 mt-1 text-lg">📊</span>
            <span>
              <span className="font-semibold text-purple-300">10th:</span> 
              <span className="text-cyan-300 font-bold ml-1">90%</span> | 
              <span className="font-semibold text-purple-300 ml-2">12th:</span> 
              <span className="text-cyan-300 font-bold ml-1">91%</span> aggregate
            </span>
          </li>
        </ul>
      </div>

      {/* Achievements */}
      <div className="border-t border-gray-600/50 pt-4 text-[14px] text-gray-200">
        <h4 className="text-white font-bold mb-3 text-[16px] flex items-center">
          <span className="mr-2">🌟</span>
          Noteworthy Achievements
        </h4>
        <ul className="list-none space-y-2 pl-0">
          <li className="flex items-start leading-relaxed">
            <span className="mr-3 mt-1 text-lg">📺</span>
            <span>
              Featured on <span className="text-red-400 font-semibold">national television</span> (Class 6) after qualifying as a finalist in a financial quiz conducted by 
              <span className="font-bold text-blue-300 ml-1">NSE & CNBC Business</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default AcademicBackgroundCard;