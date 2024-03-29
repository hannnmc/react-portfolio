import React, { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";
import "./Skills.css";
import SkillItem from "../SkillItem";

interface Skill {
    name: string;
    img: string;
    url: string;
}

const skillsData: Skill[] = [
  { name: 'JavaScript', img: 'https://github.com/get-icon/geticon/raw/master/icons/javascript.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png', url: 'https://www.typescriptlang.org/' },
  { name: 'React', img: 'https://github.com/get-icon/geticon/raw/master/icons/react.svg', url: 'https://reactjs.org/' },
  { name: 'Angular', img: 'https://github.com/get-icon/geticon/raw/master/icons/angular-icon.svg', url: 'https://angular.io/' },
  { name: 'Redux', img: 'https://github.com/get-icon/geticon/raw/master/icons/redux.svg', url: 'https://redux.js.org/' },
  { name: 'Ruby', img: 'https://github.com/get-icon/geticon/raw/master/icons/ruby.svg', url: 'https://www.ruby-lang.org/' },
  { name: 'Rails', img: 'https://github.com/get-icon/geticon/raw/master/icons/rails.svg', url: 'https://rubyonrails.org/' },
  { name: 'C#', img: 'https://github.com/get-icon/geticon/raw/master/icons/c-sharp.svg', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
  { name: '.Net', img: 'https://github.com/get-icon/geticon/raw/master/icons/dotnet.svg', url: 'https://dotnet.microsoft.com/' },
  { name: 'CSS3', img: 'https://github.com/get-icon/geticon/raw/master/icons/css-3.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Sass', img: 'https://github.com/get-icon/geticon/raw/master/icons/sass.svg', url: 'https://sass-lang.com/' },
  { name: 'HTML5', img: 'https://github.com/get-icon/geticon/raw/master/icons/html-5.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
  { name: 'Node.js', img: 'https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg', url: 'https://nodejs.org/' },
  { name: 'Express', img: 'https://github.com/get-icon/geticon/raw/master/icons/express.svg', url: 'https://expressjs.com/' },
  { name: 'Python', img: 'https://github.com/get-icon/geticon/raw/master/icons/python.svg', url: 'https://www.python.org/' },
  { name: 'pandas', img: 'https://github.com/get-icon/geticon/raw/master/icons/pandas-icon.svg', url: 'https://pandas.pydata.org/' },
  { name: 'NumPy', img: 'https://github.com/get-icon/geticon/raw/master/icons/numpy-icon.svg', url: 'https://numpy.org/' },
  { name: 'MongoDB', img: 'https://github.com/get-icon/geticon/raw/master/icons/mongodb-icon.svg', url: 'https://www.mongodb.com/' },
  { name: 'PostgreSQL', img: 'https://github.com/get-icon/geticon/raw/master/icons/postgresql.svg', url: 'https://www.postgresql.org/' },
  { name: 'Git', img: 'https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg', url: 'https://git-scm.com/' },
  { name: 'npm', img: 'https://github.com/get-icon/geticon/raw/master/icons/npm.svg', url: 'https://www.npmjs.com/' },
  { name: 'webpack', img: 'https://github.com/get-icon/geticon/raw/master/icons/webpack.svg', url: 'https://webpack.js.org/' },
  { name: 'AWS', img: 'https://github.com/get-icon/geticon/raw/master/icons/aws.svg', url: 'https://aws.amazon.com/' },
  { name: 'Azure', img: 'https://github.com/get-icon/geticon/raw/master/icons/azure-icon.svg', url: 'https://azure.microsoft.com/' },
];



  function Skills() {
    const originOffset = useRef({ top: 0, left: 0 });
    const controls = useAnimation();
    const delayPerPixel = 0.0008;

    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);
  
    useEffect(() => {
      if (inView) {}
      controls.start("visible");
    }, [controls, inView]);
  
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
      hover: {
        scale: 1.1, 
      },
      default: {
        opacity: 1,
        scale: 1, 
      }
    };
  
    return (
      <div className="grid grid-cols-6 gap-16 p-4 w-auto self-center mt-32 sm:gap-6 sm:grid-cols-4 sm:mt-12">
        {skillsData.map((skill, index) => (
          <SkillItem key={skill.name} index={index} skill={skill} originOffset={originOffset} itemVariants={itemVariants} delayPerPixel={delayPerPixel} inView={inView}/>
        ))}
 
        {/* This Div is used to trigger the skills section animation */}
        <div className="-mt-52 relative -z-10" 
        ref={ref}>
        </div>

      </div>
    );
  }
  
  
  
  export default Skills;
  export type { Skill };