"use client"

import React, {
    useState,
    useEffect,
} from "react";

import NavElement, { NavSections } from "./NavElement";

const NavBar : React.FC = () => {
    const [activeSection, setActiveSection] = useState<NavSections>(NavSections.About);

    const [scrollPosition, setScrollPosition] = useState<number>();

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        console.log(scrollPosition);
    }, [scrollPosition]);

    return(
        <nav className="invisible h-0 md:h-fit md:visible">
            <ul className="list-none" >
                <NavElement activeSection={activeSection} setActiveSection={setActiveSection} section={NavSections.About} />
                <NavElement activeSection={activeSection} setActiveSection={setActiveSection} section={NavSections.Projects} />
                <NavElement activeSection={activeSection} setActiveSection={setActiveSection} section={NavSections.Contact} />
            </ul>
        </nav>
    );
};

export default NavBar;