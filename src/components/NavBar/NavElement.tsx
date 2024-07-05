import React from "react";
import Link from "next/link";

export enum NavSections {
    "About",
    "Projects",
    "Contact"
}

interface NavElementProps {
    // navText : string,
    section: NavSections,
    activeSection : NavSections,
    setActiveSection: React.Dispatch<React.SetStateAction<NavSections>>,
}

const NavElement : React.FC<NavElementProps> = ({section, activeSection, setActiveSection}) => {
    let navText : string = "";
    switch (section) {
        case NavSections.About:
            navText = "About";
            break;
        case NavSections.Projects:
            navText = "Projects";
            break;
        case NavSections.Contact:
            navText = "Contact";
            break;
    }

    return(
        <li onClick={() => setActiveSection(section)} className={`my-2 w-fit hover:font-semibold hover:text-black transition-all ${section === activeSection ? "font-semibold" : "text-gray-600"}`} >
            <Link href={`/#${navText.toLowerCase()}`}>
                <span>{navText} </span> 
                {section === activeSection && "•"}
            </Link>
        </li>
    );
};

export default NavElement;