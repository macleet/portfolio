"use client"

import React, {
    useState
} from "react";

import SkillsContainer from "./SkillsContainer";

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
        <div className="w-fit h-fit md:ml-8 lg:ml-0">
            <div className="flex justify-normal md:justify-end lg:justify-normal">
                {tabs.map((tab, index) => 
                    <h4 
                     key={index} 
                     onClick={() => setActiveTab(tab)} 
                     className={`text-xs lg:text-sm xl:text-base font-bold text-slate-700 w-fit py-1 px-2 rounded-t mr-1 md:mr-0 lg:mr-1 ml-0 md:ml-1 lg:ml-0 hover:bg-slate-300 transition-colors ${tab === activeTab ? "bg-slate-300" : "bg-slate-400"}`}
                    >
                        {tab}
                    </h4>
                )}
            </div>
            <div className="rounded-b rounded-tr md:rounded-tr-none lg:rounded-tr rounded-tl-none md:rounded-tl lg:rounded-tl-none bg-slate-300 h-fit pr-3 py-2">
                {"Languages" === activeTab && <SkillsContainer skillCategory="Languages" />}
                {"Frameworks & Libraries" === activeTab && <SkillsContainer skillCategory="Frameworks & Libraries" />}
                {"Tools" === activeTab && <SkillsContainer skillCategory="Tools" />}
            </div>
        </div>
    );
};

export default SkillsIndex;