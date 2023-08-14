import React from "react";
import { motion } from "framer-motion";

const contactButtons = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hanchen28/",
    icon: "fa-brands fa-linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/hannnmc",
    icon: "fa-brands fa-square-github",
  },
  {
    name: "AngelList",
    url: "https://angel.co/u/han-chen-17",
    icon: "fa-brands fa-angellist",
  },
  {
    name: "Email",
    url: "mailto:han.c91028@gmail.com",
    icon: "fa-regular fa-envelope",
  },
];

export const ContactButtons = () => (
  <div className="contact-buttons flex gap-12 text-center self-center mt-16 sm:gap-8 sm:mt-12">
    {contactButtons.map((button, index) => (
      <motion.a
        key={index}
        href={button.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          className="contact-button text-4xl sm:text-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={button.icon}> </i>
        </motion.button>
      </motion.a>
    ))}
  </div>
);

export default ContactButtons;