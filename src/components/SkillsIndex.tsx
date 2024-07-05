import React from "react";

const SkillsIndex : React.FC = () => {
    const mySkills = [
        "React",
        "React Native",
        "Node.js",
        "Express",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "C#",
        "PostgreSQL",
        "HTML/CSS"
    ];
    
    return(
        <div className="flex flex-wrap sticky top-0 mb-20 2xl:mb-44 select-none">
            {mySkills.map((value, index) => 
                <div key={index} className="bg-slate-300 flex items-center justify-center px-2 py-1 rounded-full w-fit mr-1 mb-1">
                    <span className="text-xs md:text-sm text-slate-700 font-bold text-nowrap" >{value}</span>
                </div>
            )}
        </div>
    );
};

export default SkillsIndex;