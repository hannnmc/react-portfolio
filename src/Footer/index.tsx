import React from "react";
import "./Footer.css";

const Footer = () => {
    return ( 
        <div className="footer font-Mont mt-60 self-center w-5/6 h-24 border-blue-500 text-sm text-center py-2 justify-between flex sm:mt-24 sm:h-14 sm:text-xs sm:w-11/12">
            <span className="sm:w-32 sm:text-left">Designed & Built by: Han Chen 2023</span>
            <span>All right reserved.</span>
        </div>
     );
}
 
export default Footer;