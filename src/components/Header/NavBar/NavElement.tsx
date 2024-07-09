// "use client"

import React, { 
    useEffect,
    useState,
} from "react";
import Link from "next/link";

import { useActiveContext } from "@/context/ActiveContext";

export enum NavSections {
    "About",
    "Projects",
    "Contact"
}

interface NavElementProps {
    section: NavSections,
    // activeSection : NavSections,
    // setActiveSection: React.Dispatch<React.SetStateAction<NavSections>>,
}

const NavElement : React.FC<NavElementProps> = ({section}) => {
    const {section: activeSection, setSection: setActiveSection} = useActiveContext();

    let navText : string = "";
    switch (section) {
        case NavSections.About:
            navText = "About ";
            break;
        case NavSections.Projects:
            navText = "Projects ";
            break;
        case NavSections.Contact:
            navText = "Contact ";
            break;
    }

    return(
        <li className={`text-sm md:text-base my-2 w-fit hover:font-semibold hover:text-black transition-all ${section === activeSection ? "font-semibold" : "text-gray-600"}`} >
            <Link href={`/#${navText.toLowerCase()}`}>
                {navText}
                {section === activeSection && "•"}
            </Link>
        </li>
    );
};

export default NavElement;