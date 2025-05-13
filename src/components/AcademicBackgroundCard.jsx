import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const AcademicBackgroundCard = () => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="Academic Milestones"
    iconStyle={{ background: '#2c1f3e', color: '#fff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-xl">
        🏅
      </div>
    }
  >
    <div className="flex flex-col gap-4">
      {/* Heading */}
      <div>
        <h3 className="text-white text-[22px] font-bold mb-1">Academic Background</h3>
        <ul className="list-disc list-inside text-[13.5px] text-white-100 space-y-1">
          <li>Qualified <strong>GATE (CS/IT)</strong> in 3rd year with an <strong>All India Rank under 10,000</strong></li>
          <li>Cleared <strong>JEE Advanced</strong> & <strong>JEE Main</strong> for undergraduate admission</li>
          <li><strong>10th:</strong> 90% | <strong>12th:</strong> 91% aggregate</li>
        </ul>
      </div>

      {/* Achievements */}
      <div className="border-t border-gray-700 pt-3 text-[13px] text-gray-300">
        <h4 className="text-white font-semibold mb-2">Noteworthy Achievements</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
  Featured on national television (Class 6) after qualifying as a finalist in a financial quiz conducted by <strong>NSE & CNBC Business</strong>
</li>
        </ul>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default AcademicBackgroundCard;
