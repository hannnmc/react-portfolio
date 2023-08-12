import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import project1photo from "../assets/images/cozybnb_home.png";
import project2photo from "../assets/images/aviquest.png";
import project3photo from "../assets/images/budgit.png";


const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
    transition: { duration: .4 }
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
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
    scale: .8,
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

const Projects = () => {
    const projects = [
        {
            name: "one",
            title: "Cozybnb",
            img: project1photo,
            desc: "Cozybnb is a Full stack Airbnb replica with core interactive features like browsing properties, making reservations, and writing reviews. It's built utilizing React/Redux front-end (JavaScript) and Ruby on Rails back-end while incorporating Authentication, Google Maps, Places, Geocoding APIs, and AWS S3 for a seamless user experience. Leveraging Media Queries and Flexbox CSS, Cozybnb is fully web-responsive and mobile friendly.",
            live: "sampleurl",
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
        }
        ];
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const renderSquares = () => {

    return projects.map((project, i) => (
    <motion.div 
        key={i}
        className={`square square--${project.name} flex flex-col items-center font-Mont`} 
        onClick={() => setSelectedProject(project)}
        variants={squareVariants}
        transition={{ duration: .2, type: 'spring' }}
    >
        <img className='rounded-t-2xl' src={project.img} alt="" />
        <div className='p-4 flex flex-col items-center'>
            <span className='text-l font-medium'>{project.title}</span>
            {/* <span 
                className='text-base project-desc flex-grow'>{project.desc}
            </span> */}
        </div>

    </motion.div>    
    ));
  }
  return (
    <div id='projects' className={`justify-self-center mt-60 mb-60 cp-transition cp-transition__container cp-transition__container--${selectedProject ? selectedProject.name : ""}`}>
      <AnimatePresence mode='wait' initial={false}>
        {selectedProject 
          ? (
            <motion.div 
              className={`card card__wrapper card__wrapper--${selectedProject.name} font-Mont rounded-2xl`}
              key="card"
              variants={wrapperVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
            <img className="project-card-img rounded-l-2xl" src={selectedProject.img} alt="" />
            <div className='w-full p-12 pt-6 flex flex-col'>
                <button className='self-end' onClick={() => setSelectedProject(null)}>
                    <i className="fas fa-times fa-2x"/>
                </button>
                <div className="card__header flex justify-between mb-4">
                    <h2>{selectedProject.title}</h2>
                </div>
                {/* <div className="card__content"></div> */}
                <div className="card__text-placeholder w-full text-2xl">
                    {selectedProject.desc}
                </div>
            </div>
            </motion.div>
          )
          : (
            <motion.div 
              className="cp-transition__squares-wrapper flex justify-center items-center "
              key="squares"
              variants={wrapperVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {renderSquares()}
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}

 
export default Projects;