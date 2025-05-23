/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { frameworksAndLibraries, programmingLanguages, techColors, toolsAndPlatforms } from '../constants/techStack';



const TechCarousel = ({ title, items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const duplicatedItems = [...items, ...items];

  return (
    <motion.div 
      variants={fadeIn('up', 'spring', 0.5, 1.5)}
      className="w-full py-8"
    >
      <div className="relative glass-container h-[200px] md:h-[250px] overflow-hidden">
        {/* Section Title */}
        <h3 className="absolute -top-[1px] -left-[1px] z-10 bg-gradient-to-br from-blue-600/90 to-purple-500/90 text-white text-xl md:text-2xl font-bold px-6 py-3 rounded-br-2xl shadow-lg">
          {title}
        </h3>

        {/* Scrolling Items */}
        <div 
          className="h-full w-[200%] grid grid-flow-col auto-cols-min gap-8 md:gap-12"
          style={{ 
            animation: `${isHovered ? 'none' : 'scroll 40s linear infinite'}`,
            transform: isHovered ? 'translateX(0)' : ''
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...duplicatedItems, ...duplicatedItems].map((tech, index) => (
            <motion.div
              key={`${tech}-${index}`}
              className="relative flex flex-col items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={`/tech-icons/${tech.toLowerCase().replace(/[ .+#]/g, '-')}.svg`}
                alt={tech}
                className="h-14 w-14 md:h-20 md:w-20 object-contain hover:scale-110 transition-transform"
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute bottom-0 translate-y-6 text-sm md:text-base font-medium text-center"
                style={{ color: techColors[tech] || '#fff' }}
              >
                {tech}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="flex-1"
      >
        <p className={styles.sectionSubText}>Technical Expertise</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>

        <div className="mt-12 space-y-8 md:space-y-12">
          <TechCarousel
            title="Programming Languages"
            items={programmingLanguages}
          />
          <TechCarousel
            title="Frameworks & Libraries"
            items={frameworksAndLibraries}
          />
          <TechCarousel
            title="Tools & Platforms"
            items={toolsAndPlatforms}
          />
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .glass-container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
        }

        .tech-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(TechStack, "tech");