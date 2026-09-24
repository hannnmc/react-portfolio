import React from "react";

const Intro = () => {

    const introduction1 = 
    "High-growth startup Full Stack Developer based in NYC. Focused on understanding how the business operates, finding opportunities to improve it, and rapidly turning those opportunities into high-impact builds."

    return ( 
        <div className="self-center mt-24 w-1/2 text-xl text-center font-Mont sm:w-3/4 sm:mt-10 sm:text-base">
            {introduction1}
            <br/>
            <br/>
            {/* {introduction2} */}
        </div>
     );
}
 
export default Intro;