"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

type ExperienceProps = {
    time: string;
    title: string;
    company: string;
    flow: boolean;
}

const Experience: React.FC<ExperienceProps> = ({time, title, company, flow}) => {

    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress } = useScroll({
        target: ref,
        offset: ["2.2 1", "8 1"]
    });

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const xScales = [
        flow ? (windowWidth /10) : (windowWidth /1.11 - 376),
        flow ? (windowWidth / 2) - 394 : (windowWidth /2) - 30
    ]

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const opacityScale = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <motion.div 
        ref={ref}
        style={{
            x: useTransform(scrollYProgress, [.3, .9], 
                [
                    xScales[0],
                    xScales[1]
                ]),
            opacity: opacityScale
        }}
        className="flex flex-col w-96 text-center gap-2 mb-6"
        >
            <span className="text-sm opacity-75">
                {time}
            </span >
            <span className="text-3xl font-semibold">
                {title}
            </span>
            <span className="text-xl">
                {company}
            </span>
        </motion.div>
    );
}
 
export default Experience;