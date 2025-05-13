import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const CSCoreProficiencyCard = () => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="Academics & Core Technical Foundation"
    iconStyle={{ background: '#232631', color: '#fff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-xl">
        🎓
      </div>
    }
  >
    <div className="flex flex-col gap-4">
      {/* Education Summary */}
      <div>
        <h3 className="text-white text-[22px] font-bold mb-1">Technical Education</h3>
        <ul className="list-disc list-inside text-[13.5px] text-white-100 space-y-1">
          <li>
            2022–2027 Batch | Integrated B.Tech + M.Tech in IT @ <strong>ABV-IIITM Gwalior | CGPA: 7.84</strong>
          </li>
        </ul>
      </div>

      {/* Subjects */}
      <div>
        <h4 className="text-white font-semibold mb-1">Technical Subjects Covered</h4>
        <ul className="list-disc list-inside text-[13px] text-white-100 space-y-1">
          <li>DSA, OOP, DBMS, Operating Systems</li>
          <li>Computer Networks, COA, Software Engineering</li>
        </ul>
      </div>

      {/* Research & Applied Work */}
      <div className="border-t border-gray-700 pt-3 text-[13px] text-gray-300">
        <h4 className="text-white font-semibold mb-2">Applied Learning & Research</h4>
        <ul className="list-disc list-inside space-y-1">
        
          <li>Implemented research papers on skin cancer & brain tumor detection using DNNs, and hybrid segmentation</li>
          <li>
  Developed production-grade applications based on research insights, adhering to industry-standard software engineering practices
</li>

        
        </ul>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default CSCoreProficiencyCard;
