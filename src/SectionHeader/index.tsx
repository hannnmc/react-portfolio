import React from "react";
import "./SectionHeader.css";

const SectionHeader = ({title}: {title: string} ) => {
    return (
        <div id={title.toLowerCase()} className="section-title flex font-Mont text-3xl pt-48 mb-8 self-center sm:pt-20 sm:text-xl">
            {title}
        </div>
    );
}
 
export default SectionHeader;