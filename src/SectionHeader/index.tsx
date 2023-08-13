import React from "react";
import "./SectionHeader.css";

const SectionHeader = ({title}: {title: string} ) => {
    return (
        <div id={title.toLowerCase()} className="section-title flex font-Mont text-3xl pt-40 self-center">
            {title}
        </div>
    );
}
 
export default SectionHeader;