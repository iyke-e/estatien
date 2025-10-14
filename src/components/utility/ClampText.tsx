"use client";

import { useState } from "react";

interface ClampTextProps {
    text: string;
}

const ClampText = ({ text }: ClampTextProps) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <p className={expanded ? "" : "line-clamp-2"}>
                {text}
            </p> <span className="text-sm underline " onClick={() => setExpanded(!expanded)}> {expanded ? "Read less" : "Read more"}</span>
            {/* <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-600 font-medium mt-1"
            >
               
            </button> */}
        </div>
    );
};

export default ClampText;
