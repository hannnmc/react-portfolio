import React from "react";

const Intro = () => {

    const introduction1 = 
    "I'm a Full stack Software Engineer and I love creating stunning and useful web-applications."


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