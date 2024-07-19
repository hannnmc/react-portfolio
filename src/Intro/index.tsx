import React from "react";

const Intro = () => {

    const introduction1 = 
    "I'm a Full Stack Software Engineer based in NYC with a passion for leveraging technology to solve complex problems. I thrive on building beautiful and functional tools that make a real impact. Whether it's developing intuitive user interfaces or crafting robust back-end systems, I am dedicated to creating seamless and engaging experiences."


    const introduction2 = 
    "When I'm not coding, I enjoy rock climbing, hiking, cycling, and catching up on movies."
    

    return ( 
        <div className="self-center mt-24 w-1/2 text-xl text-center font-Mont sm:w-3/4 sm:mt-10 sm:text-base">
            {introduction1}
            <br/>
            <br/>
            {introduction2}
        </div>
     );
}
 
export default Intro;