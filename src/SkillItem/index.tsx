import React, { useRef, useLayoutEffect, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Skill } from "../Skills";

interface SkillItemProps {
    index: number;
    skill: Skill;
    originOffset: React.MutableRefObject<{ top: number; left: number }>;
    itemVariants: {
      hidden: { opacity: number; scale: number };
      visible: (delayRef: { current: number }) => { opacity: number; scale: number; transition: { delay: number } };
    };
    delayPerPixel: number;
    inView: boolean;
  }
  
  function SkillItem({ index, skill, originOffset, itemVariants, delayPerPixel, inView }: SkillItemProps) {
    const controls = useAnimation();
  
    const delayRef = useRef(0);
    const offset = useRef({ top: 0, left: 0 });
    const ref = useRef<HTMLDivElement>(null);
    
  
    useLayoutEffect(() => {
      const element = ref.current;
      if (!element) return;
  
      offset.current = {
        top: element.offsetTop,
        left: element.offsetLeft,
      };
  
      if (index === 0) {
        originOffset.current = offset.current;
      }
    }, [delayPerPixel, index, originOffset]);
  
    useEffect(() => {
      if(inView){
        const dx = Math.abs(offset.current.left - originOffset.current.left);
        const dy = Math.abs(offset.current.top - originOffset.current.top);
        const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        delayRef.current = d * delayPerPixel;
        controls.start("visible");
      } 
    //   optional code to hide component when not in view
      else {
        controls.start("hidden");
      }
    }, [controls, delayPerPixel, inView,originOffset]);
  
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      custom={delayRef}
      className="flex justify-center items-center"
      ref={ref}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={() => controls.start("hover")} 
      onMouseLeave={() => controls.start("default")}
      onClick={() => controls.start("default")}
    >
      <img
        src={skill.img}
        alt={skill.name}
        className="w-16 h-16"
        title={skill.name}
      />
    </motion.div>
  );
}

export default SkillItem;