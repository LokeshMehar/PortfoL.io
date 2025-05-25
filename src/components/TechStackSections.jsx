
import { useState, useEffect, useRef , useMemo} from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { frameworksAndLibraries, programmingLanguages, techColors, toolsAndPlatforms } from '../constants/techStack';

const TechCarousel = ({ title, items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredKey, setHoveredKey] = useState(null);
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef(null);

  // Create a large array for seamless looping (10x repetition)
  const carouselItems = Array.from({ length: items.length * 10 }, (_, index) => ({
    tech: items[index % items.length],
    key: `${items[index % items.length]}-${index}`,
  }));

  const formatTechName = (tech) => {
    return tech
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/\+/g, 'plus')
      .replace(/#/g, 'sharp')
      .replace(/\./g, '')
      .replace(/&/g, 'and');
  };

  // Continuous scrolling
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setOffset((prev) => prev - 1);
      }, 30); // Smooth scroll speed
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Seamless loop by resetting offset
  useEffect(() => {
    const itemWidth = 80; // w-12 (48px) + gap-6 (24px) = 80px for mobile
    const totalWidth = itemWidth * items.length;
    if (Math.abs(offset) >= totalWidth) {
      setOffset((prev) => prev + totalWidth);
    }
  }, [offset, items.length]);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.5, 1.5)}
      className="w-full py-6"
    >
      <div className="relative bg-gradient-to-r from-white/20 via-white/10 to-transparent backdrop-blur-2xl rounded-2xl border border-white/20 shadow-xl h-[180px] md:h-[220px] overflow-hidden">
        {/* Title */}
        <h3 className="absolute top-0 left-0 z-20 bg-gradient-to-r from-blue-600 to-purple-500 text-white text-lg md:text-xl font-bold px-4 py-2 rounded-br-xl">
          {title}
        </h3>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="h-full w-[1000%] flex gap-6 md:gap-8"
          style={{
            transform: `translateX(${offset}px)`,
            transition: isHovered ? 'none' : 'transform 0.03s linear',
            willChange: 'transform',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {carouselItems.map(({ tech, key }) => {
            const formattedTech = formatTechName(tech);
            const iconSrc = `/tech-icons/${formattedTech}.svg`;

            console.log(`Attempting to load icon: ${iconSrc}`);

            return (
              <motion.div
                key={key}
                className="relative flex flex-col items-center justify-center"
                onMouseEnter={() => {
                  console.log(`Hovering key: ${key}`);
                  setHoveredKey(key);
                }}
                onMouseLeave={() => setHoveredKey(null)}
                animate={{ scale: hoveredKey === key ? 1.2 : 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <img
                  src={iconSrc}
                  alt={tech}
                  className="h-12 w-12 md:h-16 md:w-16 object-contain"
                  onError={(e) => {
                    console.error(`Failed to load icon: ${iconSrc}`);
                    e.target.src = '/tech-icons/fallback.svg';
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredKey === key ? 1 : 0,
                    y: hoveredKey === key ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-[calc(100%+1rem)] z-30 bg-gray-900/95 border border-white/40 rounded-lg px-3 py-1 text-sm md:text-base font-medium text-center whitespace-nowrap shadow-lg"
                  style={{ color: techColors[tech] || '#ffffff' }}
                >
                  {tech}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div variants={fadeIn('', '', 0.1, 1)} className="flex-1">
        <p className={styles.sectionSubText}>Technical Expertise</p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>

        <div className="mt-10 space-y-6 md:space-y-10">
          <TechCarousel title="Programming Languages" items={programmingLanguages} />
          <TechCarousel title="Frameworks & Libraries" items={frameworksAndLibraries} />
          <TechCarousel title="Tools & Platforms" items={toolsAndPlatforms} />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(TechStack, 'tech');