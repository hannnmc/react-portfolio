import React from "react";

const Intro = () => {

    const introduction1 = 
    "I'm a Full Stack Software Engineer based in NYC with a passion for using technology to solve real world problems. I thrive on building beautiful and functional tools that make a real impact."


    // const introduction2 = 
    // "When I'm not coding, I enjoy taking my Siamese cat for a walk around the neighborhood. I also enjoy rock climbing, hiking, good tv shows and movies."
    

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