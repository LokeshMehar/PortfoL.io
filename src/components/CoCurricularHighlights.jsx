import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const CoCurricularHighlightsCard = () => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="Beyond the Classroom"
    iconStyle={{ background: '#232631', color: '#fff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-xl">
        🧑‍💼
      </div>
    }
  >
    <div className="flex flex-col gap-4">
      {/* Main Heading */}
      <h3 className="text-white text-[22px] font-bold mb-1">Co-Curricular Highlights</h3>

      {/* Section 1: Events & Roles */}
      <ul className="list-disc list-inside text-[13.5px] text-white-100 space-y-1">
        <li>
          Core team, Inter-IIIT Sports Meet (25 IIITs); also represented college in cricket
        </li>
        <li>
          Event Head, <strong>Aurora</strong> (5-year flagship fest); led <em>Rang Manch</em> execution
        </li>
        <li>
          Lead, <strong>Urja</strong> sports fest; won cricket gold, played football
        </li>
      </ul>

      {/* Section 2: Soft Skills & Learnings */}
      <div className="border-t border-gray-700 pt-3 text-[13px] text-gray-300">
        <h4 className="text-white font-semibold mb-2">Key Learnings & Skills</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Managed teams and large-scale logistics in cultural and sports events</li>
          <li>Sharpened communication, adaptability, and quick decision-making</li>
          <li>Fostered result-oriented mindset through teamwork and competition</li>
        </ul>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default CoCurricularHighlightsCard;
