import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import project1photo from "../assets/images/cozybnb_home.png";
import project2photo from "../assets/images/aviquest.png";
import project3photo from "../assets/images/budgit.png";
import project4photo from "../assets/images/portfolio.png";


const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
    transition: { duration: .4 }
  },
  animate: {
     clipPath: 'polygon(-20px -20px, calc(100% + 20px) -20px, calc(100% + 20px) calc(100% + 20px), -20px calc(100% + 20px))',
    transition: { duration: .4, staggerChildren: .1 }
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: .4 }
  }
}

const squareVariants = {
  initial: {
    opacity: .6,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  }
}

type Project = {
  name: string;
  title: string;
  img: string;
  desc: string;
  live: string;
  github: string;
};

const Projects = ({mobileView} : {mobileView: boolean}) => {
    const projects = [
        {
            name: "one",
            title: "Cozybnb",
            img: project1photo,
            desc: "Cozybnb is a Full stack Airbnb replica with core interactive features for browsing properties, making reservations, and writing reviews. It's built utilizing React/Redux front-end (JavaScript) and Ruby on Rails back-end while incorporating Authentication, Google Maps, Places, Geocoding APIs, and AWS S3 for a seamless user experience. Leveraging Media Queries and Flexbox CSS, Cozybnb is fully web-responsive and mobile friendly.",
            live: "https://cozy-bnb-144778128690.herokuapp.com/",
            github: "https://github.com/hannnmc/Cozybnb"
        },
        {
            name: "two",
            title: "Aviquest",
            img: project2photo,
            desc: "Aviquest is a gamified task manager, aimed at fostering positive habits and goal achievement. Built by a dedicated team of four engineers, the application utilizes the MERN (MongoDB, Express, React, Node) Stack. By completing tasks and embarking on quests, users can access interactive features like Avatar customization, gear progression, Gachapon rewards, and real-time health management. Achieved via asynchronous components, Sprite animations, and carefully timed triggers.",
            live: "https://aviquest.herokuapp.com/",
            github: "https://github.com/whilekofman/aviquest"
        },
        {
            name: "three",
            title: "Budgit",
            img: project3photo,
            desc: "Budgit is a single-page budget tracking application that helps users manage their finance through data visualization. Developed with Vanilla JavaScript, DOM manipulation, Chart.js, and Local Storage, users can log daily transactions, monthly income, and one-time earnings. Users can view their spending habits by day, week, month, and categories, enabling informed financial decisions and budgeting.",
            live: "https://hannnmc.github.io/Budgit/",
            github: "https://github.com/hannnmc/Budgit"
        },
        {
            name: "four",
            title: "Porfolio",
            img: project4photo,
            desc: "I built my own portfolio website and utilized the opportunity to brush up my skills in TypeScript, Tailwind CSS, Framer Motion, Media Queries, and React. It was a ton of fun experimenting with different animations that come with Framer Motion and I learned a great deal in optimizing animations and fine tuning them for various screen sizes.",
            live: "https://hanchen.dev",
            github: "https://github.com/hannnmc/react-portfolio"
        }
        
      ];

      const [selectedProject, setSelectedProject] = useState<Project | null>(null);
      const scrollableDivRef = useRef<HTMLDivElement | null>(null); 
      const [showPrevBtn, setShowPrevBtn] = useState(false);
      const [showNextBtn, setShowNextBtn] = useState(false);
      const presetScroll = 467;
    
      useEffect(() => {
        const divRef = scrollableDivRef.current;
        if (divRef !== null) {
          const handleScroll = () => {
            const { scrollWidth, scrollLeft, clientWidth } = divRef;
            setShowPrevBtn(scrollLeft > 0);
            setShowNextBtn(scrollLeft + clientWidth < scrollWidth - 5);
          };
          divRef.addEventListener('scroll', handleScroll);
          handleScroll();
          return () => divRef.removeEventListener('scroll', handleScroll);
        }
      }, [scrollableDivRef.current?.scrollLeft]);
    
      const scrollNext = () => {
        const divRef = scrollableDivRef.current;
        if (divRef && divRef.scrollLeft !== undefined) {
          const { scrollLeft } = divRef;
          const scrollAmount = presetScroll; 
          divRef.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: 'smooth'
          });
        }
        setShowPrevBtn(true);
        if (divRef !== null) {
          const handleScroll = () => {
            const { scrollWidth, scrollLeft, clientWidth } = divRef;
            setShowPrevBtn(scrollLeft > 0);
            setShowNextBtn(scrollLeft + clientWidth < scrollWidth);
          };
          divRef.addEventListener('scroll', handleScroll);
          handleScroll();
          return () => divRef.removeEventListener('scroll', handleScroll);
        }
      };
      
    
      const scrollPrev = () => {
        const divRef = scrollableDivRef.current;
        if (divRef && divRef.scrollLeft !== undefined) {
          const { scrollLeft } = divRef;
          const scrollAmount = presetScroll; 
          divRef.scrollTo({
            left: scrollLeft - scrollAmount,
            behavior: 'smooth'
          });
        }
        if (divRef !== null) {
          const handleScroll = () => {
            const { scrollWidth, scrollLeft, clientWidth } = divRef;
            setShowPrevBtn(scrollLeft > 0);
            setShowNextBtn(scrollLeft + clientWidth < scrollWidth);
          };
          divRef.addEventListener('scroll', handleScroll);
          handleScroll();
          return () => divRef.removeEventListener('scroll', handleScroll);
        }
      };

      const handleSelect = (project : Project) => {
        setSelectedProject(project);
          const projectElement = document.getElementById("project");
          setShowPrevBtn(false);
          setShowNextBtn(false);
          if (projectElement) {
            projectElement.scrollIntoView({
              behavior: "smooth", 
            });
          }
      }

      const handleClose = () => {
        setSelectedProject(null);
        if (!mobileView) setShowNextBtn(true);
      }
    
      return (
        <div className={`justify-self-center mt-16 mb-34 cp-transition cp-transition__container relative z-10 sm:mt-10`}>
          {mobileView && (
            <div id='project' className='absolute'
            style={{
              marginTop: `-${projects.length * 304 + 184}px`
            }}
            ></div>  
          )}
          <AnimatePresence mode='wait' initial={false}>
            {selectedProject ? (
              <motion.div 
                className={`card font-Mont rounded-2xl sm:flex-col`}
                key="card"
                variants={wrapperVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
              <img className="project-card-img rounded-l-2xl sm:rounded-t-2xl sm:rounded-bl-none sm:w-4/5" src={selectedProject.img} alt="" />
              <div className='w-full px-12 py-6 flex flex-col sm:px-5 sm:py-6 sm:pb-4'>
                <button className='self-end' onClick={handleClose}>
                  <i className="fas fa-times fa-2x sm:text-base sm:absolute sm:right-10 sm:-mt-2"/>
                </button>
                <div className="card__header flex justify-between mb-4">
                  <h2>{selectedProject.title}</h2>
                </div>
                <div className="w-full text-xl leading-base mb-2 sm:text-sm sm:w-full sm:mb-1">
                  {selectedProject.desc}
                </div>
                <div className='card-buttons flex justify-between w-full mt-auto'>
                  <button onClick={() => window.open(selectedProject.github, '_blank')} className='mt-2 w-20 h-7 bg-stone-300 text-slate-900 rounded-2xl'>
                    CODE
                  </button>
                  <button onClick={() => window.open(selectedProject.live, '_blank')} className='mt-2 w-20 h-7 bg-blue-700 text-white rounded-2xl'>
                    LIVE
                  </button>
                </div>
              </div>
              </motion.div>
            ) : (
              <motion.div 
                className="cp-transition__squares-wrapper flex" 
                key="squares"
                variants={wrapperVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                ref={scrollableDivRef}
                style={{
                  flexDirection: mobileView ? "column" : "row",
                }}
              >
                {projects.map((project, i) => (
                  <motion.div 
                    key={i}
                    className={` square square--${project.name} flex flex-col items-center font-Mont relative`}
                    onClick={() => handleSelect(project)}
                    variants={squareVariants}
                    transition={{ duration: 0.2, type: 'spring' }}
                    style={{
                      // minWidth: window.innerWidth > 1510 ? "415px" : "300px"
                      minWidth: window.innerWidth > 1400 ? "415px" : mobileView ? "300" : "360px"
                    }}
                  >
                    <img className='square-img rounded-t-2xl' src={project.img} alt="" />
                    <div className='p-4 flex flex-col items-center'>
                      <span className='text-l font-semibold'>{project.title}</span>
                    </div>
                  </motion.div>    
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <svg 
            className="scroll-btn prev-btn" 
            onClick={scrollPrev}   
            style={{ 
              display: showPrevBtn ? 'block' : 'none',
              transform: 'scaleX(-1)' 
            }} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 384 512"
          >
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
          </svg>
          <svg 
            className="scroll-btn next-btn" 
            onClick={scrollNext} 
            style={{ display: showNextBtn ? 'block' : 'none' }}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 384 512"
          >
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
          </svg>
        </div>
      );
    }
    
    export default Projects;