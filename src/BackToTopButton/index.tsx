import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BackToTopButtonProps {
    isOn: boolean; 
}

const BackToTopButton = ({ isOn }: BackToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.i
      className={`
      fa-solid fa-circle-arrow-up
      back-to-top-arrow
      ${
        isVisible ? "opacity-30" : "opacity-0"
      } 
      ${
        isOn ? "text-white" : "text-900"
      }
      fixed bottom-32 right-16 rounded-full z-50 cursor-pointer text-5xl
      sm:bottom-10 sm:right-6 sm:text-3xl
      `}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
    </motion.i>
  );
};

export default BackToTopButton;
