import React from "react";

const Intro = () => {

    const introduction1 = 
    "I'm a Full Stack Software Developer at Stellar and a former Data Instructor and Account Executive. My software development journey began when I took a decisive step and joined App Academy in the summer of 2022. Since then, I've thoroughly enjoyed learning new technologies and the feeling of finally figuring out the solution to a problem."


    const introduction2 = 
    "When I'm not coding, I enjoy exploring national parks, cycling, playing sports, and catching up on movies."
    

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