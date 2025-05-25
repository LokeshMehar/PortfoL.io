import { VerticalTimelineElement } from "react-vertical-timeline-component";
import DSAStatCircle from "./DsaStatCircle";

const ExperienceCardDSA = () => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: 'linear-gradient(135deg, #1d1836 0%, #232946 100%)', 
      color: '#fff',
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="DSA & Problem Solving"
    iconStyle={{ background: '#24292e', color: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
    icon={
        <div className="flex justify-center items-center w-full h-full text-white text-xl">
            <img
                src='./leetcode.svg' 
                alt={'LeetCode Icon'}
                className="w-[70%] h-[70%] object-contain"
            />
        </div>
    }
  >
    {/* Top Section: Chart + Bullet Points */}
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left: SVG Stats */}
      <div className="flex flex-col items-center md:items-start md:w-3/4">
        <DSAStatCircle />
        <p className="text-sm text-gray-400 mt-3 font-medium self-center tracking-wide">LeetCode Stats</p>
      </div>

      {/* Right: Short Points */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h3 className="text-white text-[22px] font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          DSA Proficiency
        </h3>
        <ul className="list-disc list-inside text-[14px] text-gray-100 space-y-2 pl-2">
          <li className="leading-relaxed">
            <span className="font-semibold text-emerald-400">Solved 1000+ problems</span> across platforms
          </li>
          <li className="leading-relaxed">
            <span className="text-blue-300">Clean, optimal</span> LeetCode submissions
          </li>
          <li className="leading-relaxed">
            Strong grasp of <span className="text-purple-300 font-medium">data structures</span>
          </li>
          <li className="leading-relaxed">
            <span className="text-yellow-300">Daily problem-solving</span> routine
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Section: Highlights */}
    <div className="mt-6 border-t border-gray-600/50 pt-5 text-[14px] text-gray-200">
      <h4 className="text-white font-bold mb-3 text-[16px] flex items-center">
        <span className="mr-2">🏆</span>
        Contest & Topic Highlights
      </h4>
      <ul className="list-none space-y-2 pl-0">
        <li className="flex items-center">
          <span className="mr-3 text-lg">🏆</span>
          Highest Rating: <span className="text-yellow-400 font-bold ml-1">1853 (LeetCode)</span>
        </li>
        <li className="flex items-center">
          <span className="mr-3 text-lg">🎖</span>
          <span className="font-bold text-orange-400">Knight</span> Badge on LeetCode
        </li>
        <li className="flex items-center">
          <span className="mr-3 text-lg">🧠</span>
          Advanced: <span className="text-cyan-300 font-medium">DP, Segment Trees, Graphs, Bitmasking</span>
        </li>
      </ul>
    </div>
  </VerticalTimelineElement>
);

export default ExperienceCardDSA;