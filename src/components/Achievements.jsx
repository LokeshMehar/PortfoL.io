// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react';
// import { Tilt } from 'react-tilt';
// import { motion } from 'framer-motion';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// import { styles } from '../styles';
// import { githuba, leetcode } from '../assets'; // Make sure to import these icons
// import { SectionWrapper } from '../hoc';
// import { fadeIn, textVariant } from '../utils/motion';

// ChartJS.register(ArcElement, Tooltip, Legend);

// // GitHub Contribution Heatmap Component
// const GitHubContributionHeatmap = () => {
//   const [loading, setLoading] = useState(true);
//   const username = "LokeshMehar"; // Replace with your GitHub username

//   return (
//     <motion.div
//       variants={fadeIn('up', 'spring', 0, 0.75)}
//       className="w-full rounded-2xl bg-tertiary p-5 mb-10"
//     >
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-white font-bold text-[24px]">GitHub Contributions</h3>
//         <div
//           onClick={() => window.open(`https://github.com/${username}`, '_blank')}
//           className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//         >
//           <img
//             src={githuba}
//             alt="GitHub"
//             className="w-1/2 h-1/2 object-contain"
//           />
//         </div>
//       </div>
      
//       <div className="w-full h-[180px] flex items-center justify-center">
//         {loading ? (
//           <p className="text-secondary">Loading contribution data...</p>
//         ) : (
//           <iframe
//             src={`https://ghchart.rshah.org/${username}`}
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             scrolling="no"
//             onLoad={() => setLoading(false)}
//             className="bg-white rounded-lg"
//           ></iframe>
//         )}
//       </div>
//       <p className="mt-2 text-secondary text-[14px]">
//         My GitHub contribution activity over the past year shows my consistent dedication to coding and open-source projects.
//       </p>
//     </motion.div>
//   );
// };

// // LeetCode Stats Card Component
// const LeetCodeCard = ({ index }) => {
//   const [leetcodeStats] = useState({
//     easy: 50, // Default values - replace with actual counts
//     medium: 30,
//     hard: 10,
//     total: 90
//   });
//   const [loading, setLoading] = useState(true);
//   const username = "YOUR_LEETCODE_USERNAME"; // Replace with your LeetCode username

//   useEffect(() => {
//     // You can implement actual API call to fetch LeetCode stats here
//     // For now, using static data
//     // Example: https://leetcode-stats-api.herokuapp.com/${username}
//     setLoading(false);
//   }, []);

//   const chartData = {
//     labels: ['Easy', 'Medium', 'Hard'],
//     datasets: [
//       {
//         data: [leetcodeStats.easy, leetcodeStats.medium, leetcodeStats.hard],
//         backgroundColor: ['#00b8a3', '#ffc01e', '#ff375f'],
//         hoverBackgroundColor: ['#00d8c0', '#ffcf3e', '#ff597f'],
//         borderWidth: 0,
//       },
//     ],
//   };

//   const chartOptions = {
//     plugins: {
//       legend: {
//         position: 'bottom',
//         labels: {
//           color: '#aaa6c3',
//           font: {
//             size: 12,
//           },
//         },
//       },
//     },
//     cutout: '65%',
//     maintainAspectRatio: false,
//   };

//   return (
//     <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
//       <Tilt
//         options={{ max: 45, scale: 1, speed: 450 }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[450px]"
//       >
//         <div className="relative w-full h-[50px] flex justify-between items-center">
//           <h3 className="text-white font-bold text-[24px]">LeetCode Stats</h3>
//           <div
//             onClick={() => window.open(`https://leetcode.com/${username}`, '_blank')}
//             className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//           >
//             <img
//               src={leetcode}
//               alt="LeetCode"
//               className="w-1/2 h-1/2 object-contain"
//             />
//           </div>
//         </div>

//         <div className="mt-5 h-[230px] flex justify-center items-center">
//           {loading ? (
//             <p className="text-secondary">Loading LeetCode stats...</p>
//           ) : (
//             <div className="h-full w-full">
//               <Doughnut data={chartData} options={chartOptions} />
//             </div>
//           )}
//         </div>

//         <div className="mt-5">
//           <p className="mt-2 text-secondary text-[14px]">
//             Solved {leetcodeStats.total} problems on LeetCode demonstrating my 
//             algorithmic problem-solving skills across various difficulty levels.
//           </p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           <p className="text-[14px] text-green-text-gradient">#{leetcodeStats.easy} Easy</p>
//           <p className="text-[14px] text-orange-text-gradient">#{leetcodeStats.medium} Medium</p>
//           <p className="text-[14px] text-red-text-gradient">#{leetcodeStats.hard} Hard</p>
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// // Academic Achievement Card Component
// const AcademicCard = ({ index, name, description, tags, cgpa, source_link, icon }) => {
//   return (
//     <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
//       <Tilt
//         options={{ max: 45, scale: 1, speed: 450 }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[450px]"
//       >
//         <div className="relative w-full flex justify-between items-center">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           {source_link && (
//             <div
//               onClick={() => window.open(source_link, '_blank')}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={icon}
//                 alt={name}
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           )}
//         </div>

//         <div className="mt-5">
//           {cgpa && (
//             <div className="bg-black-100 rounded-lg p-4 mt-4">
//               <h4 className="text-white font-semibold text-[18px]">CGPA</h4>
//               <p className="text-gradient text-[36px] font-bold">{cgpa}</p>
//             </div>
//           )}
//           <p className="mt-5 text-secondary text-[14px]">{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map(tag => (
//             <p key={tag.name} className={`text-[14px] ${tag.color}`}>
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// // Volunteering Card Component
// const VolunteeringCard = ({ index, name, description, tags, role, source_link, icon }) => {
//   return (
//     <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
//       <Tilt
//         options={{ max: 45, scale: 1, speed: 450 }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[450px]"
//       >
//         <div className="relative w-full flex justify-between items-center">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           {source_link && (
//             <div
//               onClick={() => window.open(source_link, '_blank')}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={icon}
//                 alt={name}
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           )}
//         </div>

//         <div className="mt-5">
//           {role && (
//             <div className="bg-black-100 rounded-lg p-4 mt-4">
//               <h4 className="text-white font-semibold text-[18px]">Role</h4>
//               <p className="text-gradient text-[24px] font-bold">{role}</p>
//             </div>
//           )}
//           <p className="mt-5 text-secondary text-[14px]">{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map(tag => (
//             <p key={tag.name} className={`text-[14px] ${tag.color}`}>
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Achievements = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>My achievements</p>
//         <h2 className={styles.sectionHeadText}>Skills & Qualifications.</h2>
//       </motion.div>

//       <div className="w-full flex">
//         <motion.p
//           variants={fadeIn('', '', 0.1, 1)}
//           className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
//         >
//           Below showcases my technical skills, academic achievements, and extracurricular activities
//           that highlight my abilities and dedication. My consistent GitHub contributions and 
//           LeetCode problem-solving demonstrate my commitment to continuous learning and 
//           technical growth.
//         </motion.p>
//       </div>

//       {/* GitHub Contribution Heatmap */}
//       <GitHubContributionHeatmap />

//       {/* Achievement Cards */}
//       <div className="mt-10 flex flex-wrap gap-7 justify-center">
//         <LeetCodeCard index={0} />
        
//         <AcademicCard 
//           index={1}
//           name="Academic Excellence"
//           description="Maintained excellent academic performance throughout my undergraduate program, consistently achieving high grades in core computer science subjects."
//           tags={[
//             { name: "Data Structures", color: "blue-text-gradient" },
//             { name: "Algorithms", color: "green-text-gradient" },
//             { name: "Computer Networks", color: "pink-text-gradient" },
//           ]}
//           cgpa="8.5/10" // Replace with your actual CGPA
//           icon={githuba} // Replace with appropriate icon
//         />
        
//         <AcademicCard 
//           index={2}
//           name="School Achievements"
//           description="Excelled throughout my schooling with exceptional academic performance and active participation in technical competitions and hackathons."
//           tags={[
//             { name: "Mathematics", color: "blue-text-gradient" },
//             { name: "Science", color: "green-text-gradient" },
//             { name: "Competitions", color: "pink-text-gradient" },
//           ]}
//           icon={githuba} // Replace with appropriate icon
//         />
        
//         <VolunteeringCard 
//           index={3}
//           name="Community Service"
//           description="Actively participated in community service initiatives, helping organize technical workshops and mentoring junior students in programming and computer science fundamentals."
//           role="Technical Mentor"
//           tags={[
//             { name: "Leadership", color: "blue-text-gradient" },
//             { name: "Teaching", color: "green-text-gradient" },
//             { name: "Community", color: "pink-text-gradient" },
//           ]}
//           icon={githuba} // Replace with appropriate icon
//         />
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Achievements, '');