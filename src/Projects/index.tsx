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
    opacity: 0,
    scale: .3,
  },
  animate: {
    opacity: 1,
    scale: 1,
  }
}
const Projects = () => {
    const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
    const renderSquares = () => {
    const projects = [
        {
            name: "one",
            title: "Cozybnb",
            img: project1photo,
            desc: "Cozybnb is a pixel-perfect clone of Airbnb with interactive features such as viewing and managing listings, booking reservations, and writing reviews, built with JavaScript and a React/Redux front-end with a Rails back-end. Cozybnb features full user authentication where users can create an account, login with an existing account, or continue with a Demo user. Utilizing Flexbox CSS styling and Media Query, the application is also fully web-responsive and is optimized for screens of any size.",
            live: "sampleurl",
            github: "https://github.com/hannnmc/Cozybnb"
        },
        {
            name: "two",
            title: "Aviquest",
            img: project2photo,
            desc: "Aviquest is a gamified task manager desktop-application that helps users stick to their goals and build good habits, built using MERN stack by a team of four engineers. Aviquest features many interactive features such as selecting an Avitar, create to-do lists, complete quests, and equip items. As an incentive for completing tasks and quests, users are rewarded with coins to purchase items in the Gachapon store. Aviquest is based on an honor system for those who are looking to self develop or get things done.",
            live: "https://aviquest.herokuapp.com/",
            github: "https://github.com/whilekofman/aviquest"
        },
        {
            name: "three",
            title: "Budgit",
            img: project3photo,
            desc: "Budgit is a single-paged personal expense/income tracking desktop-application that helps users visualize their finances by date, month, and categories, built with Vanilla Javascript, DOM manipulation, Chart.js, and Local Storage. Users can enter daily transactions as an income or an expense, as well as monthly income to help them easily budget their finance. Budgit is a work in progress with more features to come, such as viewing historical data, savings calculator, and cost-cutting recommendations.",
            live: "https://hannnmc.github.io/Budgit/",
            github: "https://github.com/hannnmc/Budgit"
        }
        ];
          
    return projects.map((project, i) => (
    <motion.div 
        key={i}
        className={`square square--${project.name} flex flex-col items-center font-Mont`} 
        // onClick={() => setSelectedSquare(project.name)}
        variants={squareVariants}
        transition={{ duration: .2, type: 'spring' }}
    >
        <img className='rounded-t-2xl' src={project.img} alt="" />
        <div className='p-4 flex flex-col items-center'>
            <span className='text-l font-medium mb-2'>{project.title}</span>
            <span className='text-base'>{project.desc}</span>
        </div>
        <div className='card-buttons pb-4 flex justify-between w-full'>
            <button onClick={() => window.open(project.github, '_blank')} className='w-20 h-7 mx-4 bg-stone-100 text-slate-900 rounded-2xl'>
                CODE
            </button>
            <button onClick={() => window.open(project.live, '_blank')} className='w-20 h-7 mx-4 bg-blue-700 text-white rounded-2xl'>
                LIVE
            </button>
        </div>

    </motion.div>    
    ));
  }
  return (
    <div id='projects' className={`justify-self-center mt-60 mb-60 cp-transition cp-transition__container cp-transition__container--${selectedSquare}`}>
      <AnimatePresence mode='wait' initial={false}>
        {selectedSquare 
          ? (
            <motion.div 
              className={`card card__wrapper card__wrapper--${selectedSquare}`}
              key="card"
              variants={wrapperVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="card__header">
                <h2>Lorem ipsum</h2>
                <button onClick={() => setSelectedSquare(null)}>
                  <i className="fas fa-times fa-2x"/>
                </button>
              </div>
              <div className="card__content">
                <div className="card__img-placeholder" />
                <div className="card__text-placeholder">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Impedit ea neque quidem exercitationem possimus.
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