/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Github from './Github';


const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a seasoned Software Engineer proficient in Python and Machine Learning, I bring
        a wealth of experience and a proven track record in executing large-scale
        projects. With a strong foundation in cutting-edge algorithms, I am eager to join
        a top-tier Web Development team. Together, we can tackle complex software
        challenges and drive innovation. Let&apos;s shape the future of AI and build
        extraordinary solutions.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}

      <Github />

      
    </>
  );
};

export default SectionWrapper(About, 'about');
