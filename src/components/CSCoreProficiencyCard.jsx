import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const CSCoreProficiencyCard = () => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: 'linear-gradient(135deg, #1d1836 0%, #232946 100%)', 
      color: '#fff',
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="Academics & Core Technical Foundation"
    iconStyle={{ background: '#232631', color: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-2xl">
        🎓
      </div>
    }
  >
    <div className="flex flex-col gap-5">
      {/* Education Summary */}
      <div>
        <h3 className="text-white text-[24px] font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Technical Education
        </h3>
        <ul className="list-disc list-inside text-[14px] text-gray-100 space-y-2 pl-2">
          <li className="leading-relaxed">
            <span className="text-blue-300">2022–2027 Batch</span> | Integrated B.Tech + M.Tech in IT @ 
            <span className="font-bold text-yellow-400 ml-1">ABV-IIITM Gwalior</span> | 
            <span className="text-green-400 font-semibold ml-1">CGPA: 7.84</span>
          </li>
        </ul>
      </div>

      {/* Subjects */}
      <div>
        <h4 className="text-white font-bold mb-2 text-[16px] flex items-center">
          <span className="mr-2">📚</span>
          Technical Subjects Covered
        </h4>
        <ul className="list-disc list-inside text-[14px] text-gray-100 space-y-2 pl-2">
          <li className="leading-relaxed">
            <span className="text-cyan-300 font-medium">DSA, OOP, DBMS</span>, Operating Systems
          </li>
          <li className="leading-relaxed">
            <span className="text-purple-300 font-medium">Computer Networks, COA</span>, Software Engineering
          </li>
        </ul>
      </div>

      {/* Research & Applied Work */}
      <div className="border-t border-gray-600/50 pt-4 text-[14px] text-gray-200">
        <h4 className="text-white font-bold mb-3 text-[16px] flex items-center">
          <span className="mr-2">🔬</span>
          Applied Learning & Research
        </h4>
        <ul className="list-none space-y-2 pl-0">
          <li className="flex items-start">
            <span className="mr-3 mt-1 text-sm">🧠</span>
            Implemented research papers on <span className="text-green-300 font-medium">skin cancer & brain tumor detection</span> using DNNs, and hybrid segmentation
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 text-sm">🏗️</span>
            Developed <span className="text-blue-300 font-medium">production-grade applications</span> based on research insights, adhering to industry-standard software engineering practices
          </li>
        </ul>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default CSCoreProficiencyCard;