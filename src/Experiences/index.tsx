import React, { useState } from "react";
import "./Experiences.css"; 
import ExperienceItem from "../ExperienceItem";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Experiences = () => {

    const ref = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileView, setMobileView ] = useState((windowWidth < 541));

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: mobileView ? 
        ["-1 1", "1.25 1"] : 
        ["0 1", "1.85 1"]
    })

    const opacityScale = useTransform(
        scrollYProgress, [0.25, 0.68, 1], [0.1, 0.4, 1]
        )


    const experiences = [
        {
            time: "Feb. 2023 - Present",
            title: "Software Developer",
            company: "Stellar Services",
            flow: true
        },
        {
            time: "Aug. 2021 - Aug. 2022",
            title: "Data Instructor",
            company: "DBC Edu and Tech Co.",
            flow: false

        },
        {
            time: "Feb. 2019 - March. 2021",
            title: "Account Executive",
            company: "T-Mobile US",
            flow: true
        }
    ]
    return ( 
        <div className="w-full font-Mont mt-32 text-2xl self-center relative sm:overflow-x-hidden sm:pt-12 sm:mt-16">
            {experiences.map((e, i) =>
                <ExperienceItem
                key={i}  
                time={e.time}
                title={e.title}
                company={e.company}
                flow={e.flow}
                mobileView={mobileView}
                setMobileView={setMobileView}
                windowWidth={windowWidth}
                setWindowWidth={setWindowWidth}
                />
            )}
            
        <motion.div className="flex items-center justify-center h-96 relative -mt-96 mb-24 sm:-mt-80 sm:h-80"
        ref={ref}
        style={{
            opacity: opacityScale
        }}
        >
            <div className="experience-timeline w-0.5 h-96 absolute rounded-full"></div>

            {/* <motion.div
            className="-mt-60 rounded-full h-2 w-2 absolute bg-white"
            style={{opacity: dotOpacityScale}}
            ></motion.div>
            <motion.div
            className="rounded-full h-2 w-2 absolute bg-white"
            style={{opacity: dotOpacityScale}}
            ></motion.div> */}

            
        </motion.div>
  
        </div>
     );
}
 
export default Experiences;
