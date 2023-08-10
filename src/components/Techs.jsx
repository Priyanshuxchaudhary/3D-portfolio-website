import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const TechCard = ({ technology}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      icon={
        <div className='w-28 h-28 pr-6 pb-4' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{technology.title}</h3>
        
      </div>

    </VerticalTimelineElement>
  );
};

const Techs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have learnt so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stack
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {technologies.map((technology, index) => (
            <TechCard
              technology={technology}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Techs, "work");
