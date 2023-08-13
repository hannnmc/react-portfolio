"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import "./Experience.css"; 

const Experience = () => {

    const ref1 = useRef<HTMLDivElement>(null);
    // const ref2 = useRef<HTMLDivElement>(null);
    // const ref3 = useRef<HTMLDivElement>(null);

    const {scrollYProgress, scrollY } = useScroll({
        target: ref1,
        offset: ["2.2 1", "8 1"]
    });

    const xScale1 = useTransform(scrollYProgress, [0, 1], [(window.innerWidth /20) , (window.innerWidth /2) - 400])

    const opacityScale1 = useTransform(scrollYProgress, [0, 1], [0.1, 1])

    const xScale2 = useTransform(scrollYProgress, [0, 1], [(window.innerWidth /1.0526) - 400, (window.innerWidth /2)])

    const opacityScale2 = useTransform(scrollYProgress, [0, 1], [0.1, 1])

    const xScale3 = useTransform(scrollYProgress, [0, 1], [(window.innerWidth /40) , (window.innerWidth /2) - 400])

    const opacityScale3 = useTransform(scrollYProgress, [0, 1], [0.1, 1])

    return ( 
        <div className="w-3/4 font-Mont mt-32 text-2xl">
            <motion.div 
            ref={ref1}
            style={{
                x: xScale1,
                opacity: opacityScale1
            }}
            className="flex flex-col w-96 text-center gap-2"
            >
                <span className="text-sm opacity-75">
                    Feb. 2023 - Present
                </span >
                <span className="text-3xl font-semibold">
                    Software Developer
                </span>
                <span className="text-xl">
                    Stellar Services
                </span>
            </motion.div>
            <motion.div
            style={{
                x: xScale2,
                opacity: opacityScale2
            }}
            className="flex flex-col w-96 text-center gap-2 mt-12"
            >
                <span className="text-sm opacity-75">
                    Aug. 2022 - Aug. 2023
                </span >
                <span className="text-3xl font-semibold">
                    Data Instructor
                </span>
                <span className="text-xl">
                    DBC Edu & Tech Co.
                </span>
            </motion.div>
            <motion.div
            style={{
                x: xScale3,
                opacity: opacityScale3
            }}
            className="flex flex-col w-96 text-center gap-2 mt-12"
            >
                <span className="text-sm opacity-75">
                    Feb. 2019 - March. 2022
                </span >
                <span className="text-3xl font-semibold">
                    Account Executive
                </span>
                <span className="text-xl">
                    T-Mobile US
                </span>
            </motion.div>
        </div>
     );
}
 
export default Experience;
