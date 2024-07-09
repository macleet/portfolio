import NavBar from "./NavBar/NavBar";
import SkillsIndex from "./SkillsTabs/SkillsIndex";

import React from "react";

const Header : React.FC = () => {
    return(
        <header className="select-none lg:sticky lg:top-0 lg:h-screen flex flex-col md:flex-row lg:flex-col justify-between gap-6 w-11/12 lg:w-5/12 2xl:w-1/3 min-w-min py-10 lg:py-28">
            <div className="flex flex-col justify-between gap-10">
                <span className="text-nowrap">
                    <h1 className="text-5xl md:text-6xl font-bold">Mac Lee</h1>
                    <h2 className="font-semibold md:text-lg lg:text-xl xl:text-2xl">Junior Software Developer</h2>
                </span>
                <NavBar />
            </div>
            <SkillsIndex />
        </header>
    );
};

export default Header;