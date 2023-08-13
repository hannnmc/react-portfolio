import React from "react";
import "./Experiences.css"; 
import Experience from "../Experience";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Experiences = () => {

    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.28 1"]
    })

    const opacityScale = useTransform(scrollYProgress, [0.25, 0.68, 1], [0.1, 0.4, 1])

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
        <div className="w-full font-Mont mt-32 text-2xl self-center relative">
            {experiences.map((e, i) =>
                <Experience
                key={i}  
                time={e.time}
                title={e.title}
                company={e.company}
                flow={e.flow}
                />
            )}
            
        <motion.div className="flex items-center justify-center h-96 relative -mt-96 mb-24"
        ref={ref}
        style={{
            opacity: opacityScale
        }}
        >
            <div className="experience-timeline w-0.5 h-96 absolute rounded-full"></div>
        </motion.div>
        </div>
     );
}
 
export default Experiences;
