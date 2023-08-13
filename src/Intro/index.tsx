import React from "react";

const Intro = () => {

    const introduction1 = 
    "I am a Full Stack Software Developer at Stellar, with a background as an Instructor and a B2B Account Executive. My passion for technology led me to take a pivotal step in transitioning my career by enrolling in a coding bootcamp in the summer of 2022 - App Academy. My core stack is React, Ruby on Rails, Node.js, and PostgreSQL, but I’m also familiar with TypeScript, Angular, MongoDB, Express, and more.  I am always looking to learn new technologies, and I love the feeling of finally figuring out the solution to a problem."


    const introduction2 = 
    "When I’m not coding, I enjoy exploring national parks, riding the bike, playing sports, and watching movies."
    

    return ( 
        <div className="self-center mt-24 w-1/2 text-xl text-center font-Mont">
            {introduction1}
            <br/>
            <br/>
            {introduction2}
        </div>
     );
}
 
export default Intro;