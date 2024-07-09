import React from "react"

interface SkillProps {
    skillCategory : string,
}

const SkillsContainer : React.FC<SkillProps> = ({skillCategory}) => {
    let skills : string[] = [];
    switch (skillCategory) {
        case "Languages":
            skills = [
                "TypeScript",
                "JavaScript",
                "C#",
                "PostgreSQL",
                "HTML/CSS"
            ];
            break;
        case "Frameworks & Libraries":
            skills = [
                "React",
                "React Native",
                "Node.js",
                "Express",
                "Next.js",
                "Tailwind CSS",
            ];
            break;
        case "Tools":
            skills = [
                "Git",
                "GitHub",
                "Figma",
                "GIMP",
                "Vercel"
            ];
            break;
    }
    
    return(
        <div className="flex flex-wrap sticky top-0 pl-3 py-1">
            {skills.map((value, index) => 
                <div key={index} className="bg-slate-200 flex items-center justify-center px-2 py-1 rounded-full w-fit mr-1 my-1">
                    <span className="text-xs md:text-[11px] lg:text-xs xl:text-sm text-slate-700 font-bold text-nowrap" >{value}</span>
                </div>
            )}
        </div>
    );
};

export default SkillsContainer;