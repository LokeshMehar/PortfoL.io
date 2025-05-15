/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Github from './Github';
import myImg from '../assets/about.png'; // Ensure correct path

const About = () => {
  return (
    <>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Block */}
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="flex-1 max-w-xl"
        >
          <p className={`${styles.sectionSubText}`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} mb-4`}>Overview.</h2>
          <p className="text-secondary text-[17px] leading-[30px]">
            As a seasoned Software Engineer proficient in Python and Machine Learning, I bring
            a wealth of experience and a proven track record in executing large-scale
            projects. With a strong foundation in cutting-edge algorithms, I am eager to join
            a top-tier Web Development team. Together, we can tackle complex software
            challenges and drive innovation. Let&apos;s shape the future of AI and build
            extraordinary solutions.
          </p>
        </motion.div>

        {/* Image Block */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.05}
          transitionSpeed={250}
          className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] rounded-2xl shadow-xl"
        >
          <img
            src={myImg}
            alt="avatar"
            className="rounded-2xl w-full h-auto object-contain"
          />
        </Tilt>
      </div>

      {/* GitHub Section */}
      <div className="mt-16 w-full">
        <Github />
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
