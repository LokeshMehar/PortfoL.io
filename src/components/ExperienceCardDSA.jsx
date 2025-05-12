import { VerticalTimelineElement } from "react-vertical-timeline-component";
import DSAStatCircle from "./DsaStatCircle";

const ExperienceCardDSA = () => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="DSA & Problem Solving"
    iconStyle={{ background: '#24292e', color: '#fff' }}
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
    <div className="flex flex-col md:flex-row gap-4">
      {/* Left: SVG Stats */}
      <div className="flex flex-col items-center md:items-start md:w-3/4">
        <DSAStatCircle />
        <p className="text-sm text-gray-400 mt-2  self-center">LeetCode Stats</p>
      </div>

      {/* Right: Short Points */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h3 className="text-white text-[20px] font-semibold mb-2">DSA Proficiency</h3>
        <ul className="list-disc list-inside text-[13px] text-white-100 space-y-1">
          <li><strong>Solved 1000+ problems</strong> across platforms</li>
          <li>Clean, optimal LeetCode submissions</li>
          <li>Strong grasp of data structures</li>
          <li>Daily problem-solving routine</li>
        </ul>
      </div>
    </div>

    {/* Bottom Section: Highlights */}
    <div className="mt-4 border-t border-gray-700 pt-4 text-[13px] text-gray-300">
      <h4 className="text-white font-semibold mb-2">Contest & Topic Highlights</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>🏆 Highest Rating: <span className="text-white font-medium">1853 (LeetCode)</span></li>
        <li>🎖 <strong>Knight</strong> Badge on LeetCode</li>
        <li>🧠 Advanced: DP, Segment Trees, Graphs, Bitmasking</li>
      </ul>
    </div>
  </VerticalTimelineElement>
);

export default ExperienceCardDSA;
