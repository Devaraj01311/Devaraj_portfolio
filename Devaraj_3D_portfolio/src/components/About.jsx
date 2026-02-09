import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
>
  I’m a skilled software developer with strong hands-on experience in Java, Python,
  and full-stack web development.
  <br /><br />

  I specialize in building secure, scalable applications using React, Node.js,
  Express, and MongoDB, with additional experience working with MySQL for relational
  data management.
  <br /><br />

  I have a solid foundation in object-oriented programming, databases, and SDLC
  practices, and I’m familiar with deploying and managing applications on cloud
  platforms like AWS.
  <br /><br />

  From a DevOps perspective, I have experience with containerization, version
  control, and CI/CD fundamentals using tools like Docker, Git, and cloud-based
  deployment workflows to ensure reliable and efficient application delivery.
  <br /><br />

  I also have a growing interest in data analytics, with hands-on experience in
  data handling, basic analysis, and visualization using SQL, Python, and tools
  like Power BI to derive meaningful insights from data.
  <br /><br />

  I’m a quick learner who enjoys collaborating in agile teams to create efficient,
  reliable, and user-friendly solutions that solve real-world problems.
  <br /><br />

  <span className="text-white font-medium">
    Let’s build impactful software together!
  </span>
</motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
