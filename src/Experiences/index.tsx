import React from "react";
import "./Experiences.css"; 
import Experience from "../Experience";

const Experiences = () => {

    const experiences = [
        {
            time: "Feb. 2023 - Present",
            title: "Software Developer",
            company: "Stellar Services",
            flow: true
        },
        {
            time: "Aug. 2022 - Aug. 2023",
            title: "Data Instructor",
            company: "DBC Edu and Tech Co.",
            flow: false

        },
        {
            time: "Feb. 2019 - March. 2022",
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
            
        <div className="flex items-center justify-center h-96 relative">
            <div className="w-0.5 h-96 -top-96 bg-black absolute"></div>
        </div>
        </div>
     );
}
 
export default Experiences;
