"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

type ExperienceItemProps = {
    time: string;
    title: string;
    company: string;
    flow: boolean;
    mobileView: boolean;
    setMobileView:React.Dispatch<React.SetStateAction<boolean>>;
    windowWidth:number;
    setWindowWidth:React.Dispatch<React.SetStateAction<number>>;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({time, title, company, flow, mobileView, setMobileView, windowWidth, setWindowWidth}) => {

    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress } = useScroll({
        target: ref,
        offset: mobileView ? ["0 1", "4 1"] : ["2.2 1", "8 1"]
    });

    const xScales = mobileView ?
    [
        flow ? (-200) : (windowWidth),
        flow ? (windowWidth / 2) - 181 : (windowWidth /2) + 5
    ] : [
        flow ? (windowWidth /10) : (windowWidth /1.11 - 376),
        flow ? (windowWidth / 2) - 394 : (windowWidth /2) - 30
    ]

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (windowWidth > 540) {
                setMobileView(true);
            } else {
                setMobileView(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const opacityScale = useTransform(
        scrollYProgress, 
        mobileView ?  [.4, .86] : [0, 1] ,
        mobileView ? [0, 1] : [0, 1] 
        )

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
        className="flex flex-col w-96 text-center gap-2 mb-6 scale-50 sm:w-44"
        >
            <span className="text-sm opacity-75 sm:text-xs">
                {time}
            </span >
            <span className="text-3xl font-semibold sm:text-base">
                {title}
            </span>
            <span className="text-xl sm:text-sm">
                {company}
            </span>
        </motion.div>
    );
}
 
export default ExperienceItem;