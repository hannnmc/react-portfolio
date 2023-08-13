import React, { useCallback, useState } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';
import lightParticlesOptions from "./particles_light.json";
import darkParticlesOptions from "./particles_dark.json";
import { ISourceOptions } from "tsparticles-engine";
import Navbar from "./Navbar";
import profilePhoto from "../src/assets/images/profile_photo.jpg";
import Projects from "./Projects";
import SectionHeader from "./SectionHeader";
import Experience from "./Experience";


// Import the Switch component
import Switch from "./SwitchTheme";
import Intro from "./Intro";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const [isOn, setIsOn] = useState(true);

    // Dynamically select the particle options based on isOn value
    const particleOptions = isOn ? darkParticlesOptions : lightParticlesOptions;

    const toggleTheme = () => {
        setIsOn(!isOn);
    };

    return (
        <div  className="theme-wrapper" data-darkmode={isOn} >
        <div className="App flex flex-col text-Mont">
            {/* Add the theme toggle switch */}
            <Switch  
            isOn={isOn}
            setIsOn={toggleTheme} // Call toggleTheme when the switch is clicked
            />

            {/* Conditionally render the Particles component with a dynamic key */}
            <Particles key={isOn.toString()} options={particleOptions as ISourceOptions} init={particlesInit} />
            
            <Navbar/>
            <div className="main-container flex flex-col items-center w-full">
                <div className="w-52 rounded-full aspect-square mt-24 overflow-hidden">
                    <img  className="object-cover scale-125" src={profilePhoto} alt="han" />
                </div>
                <span className="text-inherit text-4xl font-semibold font-Mont mt-12">
                    Hi, I'm Han!
                </span>
            </div>

            <Intro />

            <SectionHeader title={"PROJECTS"}/>

            <Projects />

            <SectionHeader title={"EXPERIENCE"}/>

            <Experience />

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
        </div>
    );
}

export default App;
