import React, { useRef, useLayoutEffect, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Skills.css";

interface Skill {
    name: string;
    img: string;
}

const skillsData: Skill[] = [
    { name: 'JavaScript', img: 'https://github.com/get-icon/geticon/raw/master/icons/javascript.svg' },
    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png' },
    { name: 'React', img: 'https://github.com/get-icon/geticon/raw/master/icons/react.svg' },
    { name: 'Angular', img: 'https://github.com/get-icon/geticon/raw/master/icons/angular-icon.svg' },
    { name: 'Redux', img: 'https://github.com/get-icon/geticon/raw/master/icons/redux.svg' },
    { name: 'Ruby', img: 'https://github.com/get-icon/geticon/raw/master/icons/ruby.svg' },
    { name: 'Rails', img: 'https://github.com/get-icon/geticon/raw/master/icons/rails.svg' },
    { name: 'jQuery', img: 'https://github.com/get-icon/geticon/raw/master/icons/jquery-icon.svg' },
    { name: 'CSS3', img: 'https://github.com/get-icon/geticon/raw/master/icons/css-3.svg' },
    { name: 'Sass', img: 'https://github.com/get-icon/geticon/raw/master/icons/sass.svg' },
    { name: 'HTML5', img: 'https://github.com/get-icon/geticon/raw/master/icons/html-5.svg' },
    { name: 'Node.js', img: 'https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg' },
    { name: 'Express', img: 'https://github.com/get-icon/geticon/raw/master/icons/express.svg' },
    { name: 'Python', img: 'https://github.com/get-icon/geticon/raw/master/icons/python.svg' },
    { name: 'pandas', img: 'https://github.com/get-icon/geticon/raw/master/icons/pandas-icon.svg' },
    { name: 'NumPy', img: 'https://github.com/get-icon/geticon/raw/master/icons/numpy-icon.svg' },
    { name: 'MongoDB', img: 'https://github.com/get-icon/geticon/raw/master/icons/mongodb-icon.svg' },
    { name: 'PostgreSQL', img: 'https://github.com/get-icon/geticon/raw/master/icons/postgresql.svg' },
    { name: 'Git', img: 'https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg' },
    { name: 'npm', img: 'https://github.com/get-icon/geticon/raw/master/icons/npm.svg' },
    { name: 'webpack', img: 'https://github.com/get-icon/geticon/raw/master/icons/webpack.svg' },
    { name: 'Visual Studio Code', img: 'https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg' },
    { name: 'AWS', img: 'https://github.com/get-icon/geticon/raw/master/icons/aws.svg' },
    { name: 'Azure', img: 'https://github.com/get-icon/geticon/raw/master/icons/azure-icon.svg' },
  ];


  function Skills() {
    const originOffset = useRef({ top: 0, left: 0 });
    const controls = useAnimation();
    const delayPerPixel = 0.0008;

    const ref = useRef<HTMLDivElement>(null);
    // const [inView, inViewRef] = useInView(ref);
  
    useEffect(() => {
      controls.start("visible");
    }, [controls]);
  
    const itemVariants = {
      hidden: {
        opacity: 0,
        scale: 0.5,
      },
      visible: (delayRef: { current: number }) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: delayRef.current },
      }),
    };
  
    return (
      <div className="grid grid-cols-6 gap-16 p-4 w-auto self-center mt-32">
        {skillsData.map((skill, index) => (
          <SkillItem key={skill.name} index={index} skill={skill} originOffset={originOffset} itemVariants={itemVariants} delayPerPixel={delayPerPixel} />
        ))}
      </div>
    );
  }
  
  interface SkillItemProps {
    index: number;
    skill: Skill;
    originOffset: React.MutableRefObject<{ top: number; left: number }>;
    itemVariants: {
      hidden: { opacity: number; scale: number };
      visible: (delayRef: { current: number }) => { opacity: number; scale: number; transition: { delay: number } };
    };
    delayPerPixel: number;
  }
  
  function SkillItem({ index, skill, originOffset, itemVariants, delayPerPixel }: SkillItemProps) {
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
    }, [delayPerPixel, index]);
  
    useEffect(() => {
      const dx = Math.abs(offset.current.left - originOffset.current.left);
      const dy = Math.abs(offset.current.top - originOffset.current.top);
      const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
      delayRef.current = d * delayPerPixel;
      controls.start("visible");
    }, [controls, delayPerPixel]);
  
    return (
      <motion.div
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        custom={delayRef}
        className="flex justify-center items-center"
        ref={ref}
      >
        <img src={skill.img} alt={skill.name} className="w-16 h-16" />
      </motion.div>
    );
  }
  
  export default Skills;