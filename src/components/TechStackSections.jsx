/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import { motion } from 'framer-motion';

// Color mappings for different technologies
const techColors = {
  // Programming Languages
  'JavaScript': '#F7DF1E',
  'TypeScript': '#3178C6',
  'Java': '#007396',
  'Python': '#3776AB',
  'C++': '#00599C',
  'C': '#A8B9CC',
  'SQL': '#E38A00',
  'Bash': '#4EAA25',

  // Frameworks & Libraries
  'React.js': '#61DAFB',
  'Next.js': '#000000',
  'HTML5': '#E34F26',
  'CSS3': '#1572B6',
  'Tailwind CSS': '#06B6D4',
  'Bootstrap': '#7952B3',
  'Redux': '#764ABC',
  'Redux Toolkit': '#764ABC',
  'Node.js': '#339933',
  'Express.js': '#000000',
  'Flask': '#000000',
  
  // ... Add colors for other technologies similarly
};

const TechSection = ({ title, items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const duplicatedItems = [...items, ...items];

  const getImageSrc = (tech) => {
    const formattedName = tech.toLowerCase().replace(/[ .+#]/g, '-');
    return `/tech-icons/${formattedName}.svg`;
  };

  return (
    <div className="group relative mb-16">
      <motion.div
        className="glass-container relative overflow-hidden p-8"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <h2 className="absolute -top-8 left-8 z-10 text-2xl font-bold text-white/90 mb-4">
          {title}
        </h2>
        
        <div
          className={`flex space-x-12 ${
            isHovered ? 'animation-paused' : 'animate-infinite-scroll'
          }`}
          style={{ width: 'max-content' }}
        >
          {duplicatedItems.map((tech, index) => (
            <motion.div
              key={`${tech}-${index}`}
              className="relative flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={getImageSrc(tech)}
                alt={tech}
                className="h-16 w-16 object-contain"
              />
              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ color: techColors[tech] || '#fff' }}
              >
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const TechStackSections = () => {
  // Programming Languages - Prioritized for SDE roles
const programmingLanguages = [
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "C++",
  "C",
  "SQL",
  "Bash"
];

// Frameworks and Libraries - Grouped by frontend, backend, APIs, and databases
const frameworksAndLibraries = [
  // Frontend
  "React.js",
  "Next.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Redux",
  "Redux Toolkit",

  // Backend
  "Node.js",
  "Express.js",
  "Flask",

  // APIs & Utilities
  "REST",
  "GraphQL",
  "Axios",
  "Postman",

  // Databases & ORMs
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Prisma"
];

// Tools and Platforms - Ordered by relevance to dev workflow and SDE job requirements
const toolsAndPlatforms = [
  "GitHub",
  "GitLab",
  "VS Code",
  "Linux",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "AWS",
  "GCP",
  "Vercel",
  "NGINX",
  "PgAdmin",
  "MongoDB Compass",
  "Figma"
];


  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-900 to-blue-900">
      
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: scroll 20s linear infinite;
        }
        .animation-paused {
          animation-play-state: paused;
        }
        .glass-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <TechSection
        title="Programming Languages"
        items={programmingLanguages}
      />
      <TechSection
        title="Frameworks & Libraries"
        items={frameworksAndLibraries}
      />
      <TechSection
        title="Tools & Platforms"
        items={toolsAndPlatforms}
      />
    </div>
  );
};

export default TechStackSections;