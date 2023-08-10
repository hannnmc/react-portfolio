import React, { useCallback, useState } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import Navbar from "./Navbar";
import profilePhoto from "../src/assets/images/profile_photo.jpg";
import { motion, AnimatePresence } from 'framer-motion';

// Import the Switch component
import Switch from "./SwitchTheme";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
    const [isOn, setIsOn] = useState(false);

    return (
        <div className="App">
            {/* Add the theme toggle switch */}
            <Switch  
            isOn={isOn}
            setIsOn={setIsOn}
            />

            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
            <Navbar/>
            <div className="main-container flex flex-col items-center w-full">
                <img className="w-52 rounded-full aspect-square mt-24" src={profilePhoto} alt="han" />
                <span className="text-white text-4xl font-semibold font-Mont mt-8">
                    Han Chen
                </span>
            </div>
        </div>
    );
}

export default App;
