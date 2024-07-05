"use client"

import React, {
    useState
} from "react";

const SkillsIndex : React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("Languages");

    const myLanguages = [
        "TypeScript",
        "JavaScript",
        "C#",
        "PostgreSQL",
        "HTML/CSS"
    ];

    const myLibraries = [
        "React",
        "React Native",
        "Node.js",
        "Express",
        "Next.js",
        "Tailwind CSS",
    ];

    const myTools = [
        "Git",
        "GitHub",
        "Figma",
        "GIMP",
        "Vercel"
    ];

    const tabs = [
        "Languages",
        "Frameworks & Libraries",
        "Tools"
    ];
    
    return(
        <div>
            <div className="flex">
                {tabs.map((tab, index) => 
                    <h3 
                     key={index} 
                     onClick={() => setActiveTab(tab)} 
                     className={`text-sm font-bold md:text-base text-slate-700 w-fit py-1 px-3 rounded-t mr-1  ${tab === activeTab ? "bg-slate-300" : "bg-slate-400"}`}
                    >
                        {tab}
                    </h3>
                )}
            </div>
            <div className="rounded-b rounded-tr bg-slate-300 h-fit mb-20 2xl:mb-44 pr-3 py-2">
                {activeTab === "Languages" && <div className="flex flex-wrap sticky top-0 pl-3 py-1">
                    {myLanguages.map((value, index) => 
                        <div key={index} className="bg-slate-200 flex items-center justify-center px-2 py-1 rounded-full w-fit mr-1">
                            <span className="text-xs md:text-sm text-slate-700 font-bold text-nowrap" >{value}</span>
                        </div>
                    )}
                </div>}
                {activeTab === "Frameworks & Libraries" && <div className="flex flex-wrap sticky top-0 pl-3 py-1">
                    {myLibraries.map((value, index) => 
                        <div key={index} className="bg-slate-200 flex items-center justify-center px-2 py-1 rounded-full w-fit mr-1">
                            <span className="text-xs md:text-sm text-slate-700 font-bold text-nowrap" >{value}</span>
                        </div>
                    )}
                </div>}
                {activeTab === "Tools" && <div className="flex flex-wrap sticky top-0 pl-3 py-1">
                    {myTools.map((value, index) => 
                        <div key={index} className="bg-slate-200 flex items-center justify-center px-2 py-1 rounded-full w-fit mr-1">
                            <span className="text-xs md:text-sm text-slate-700 font-bold text-nowrap" >{value}</span>
                        </div>
                    )}
                </div>}
            </div>
        </div>
    );
};

export default SkillsIndex;