/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import DSAStatCircle from './DsaStatCircle';


const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// ✅ Custom DSA Card
const ExperienceCardDSA = () => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="DSA Proficiency"
    iconStyle={{ background: '#4a90e2', color: '#fff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-xl font-bold">
        💻
      </div>
    }
  >
    {/* Top Half: Stats + Description */}
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left: SVG Stats */}
      <div className="flex justify-center md:w-1/2">
        <DSAStatCircle />
      </div>

      {/* Right: Text Description */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h3 className="text-white text-[22px] font-bold mb-2">DSA Proficiency</h3>
        <p className="text-white-100 text-[14px] leading-relaxed">
    I’ve solved over <strong>1000+ DSA problems</strong> across platforms, honing my skills in algorithms, data structures, and problem-solving strategies. The stats shown here reflect my progress on <strong>LeetCode alone</strong>, where I focus on clean and optimized solutions.
  </p>
        <ul className="list-disc list-inside mt-3 text-[13px] space-y-1 text-white-100">
          <li>Consistent problem-solving habit</li>
          <li>Deep knowledge in algorithmic problem-solving</li>
        </ul>
      </div>
    </div>

    {/* Bottom Half: Contest Profile */}
    <div className="mt-4 border-t border-gray-700 pt-4 text-[13px] text-gray-300">
      <h4 className="text-white font-semibold mb-2">Contest & Topic Highlights</h4>
      <ul className="space-y-1">
        <li>🏆 Highest Rating: <span className="text-white font-medium">1725 (LeetCode)</span></li>
        <li>🎖 Knight Badge on GeeksforGeeks</li>
        <li>🧠 Advanced Topics: DP, Segment Trees, Graphs, Bitmasking</li>
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience & DSA Proficiency</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {/* ⬇️ Add DSA card first */}
          <ExperienceCardDSA />

          {/* ⬇️ Then loop through normal experience cards */}
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
