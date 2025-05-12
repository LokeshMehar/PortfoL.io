import { VerticalTimelineElement } from "react-vertical-timeline-component";
import DSAStatCircle from "./DsaStatCircle";

const ExperienceCardDSA = () => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date="DSA Proficiency"
    iconStyle={{ background: "#4a90e2", color: "#fff" }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-xl font-bold">
        💻
      </div>
    }
  >
    <div className="flex flex-col gap-6">
      {/* Top Section: Chart + Points */}
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
        {/* SVG and Label */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
          <DSAStatCircle />
          <p className="text-sm text-gray-400 mt-2">LeetCode Stats</p>
        </div>

        {/* Short Description as Bullet Points */}
        <div className="md:w-1/2 w-full text-sm space-y-2 text-white-100">
          <h3 className="text-white text-[18px] font-semibold">DSA Journey</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Solved 1000+ problems across platforms</li>
            <li>Focused clean & optimal solutions on LeetCode</li>
            <li>Daily practice and consistent upskilling</li>
            <li>Strong foundation in core DSA topics</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-4 text-sm text-gray-300">
        <h4 className="text-white font-semibold mb-2">Contest & Topic Highlights</h4>
        <ul className="space-y-1 list-disc list-inside">
          <li>🏆 Highest Rating: <span className="text-white font-medium">1725 (LeetCode)</span></li>
          <li>🎖 Knight Badge on GeeksforGeeks</li>
          <li>🧠 Advanced Topics: DP, Segment Trees, Graphs, Bitmasking</li>
        </ul>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default ExperienceCardDSA;
