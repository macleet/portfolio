"use client"

import ContentSection from "@/components/MainContent/ContentSection";
import Footer from "../Footer";

import React, {
    useRef,
    useEffect,
    useState,
} from "react";

import { useActiveContext } from "@/context/ActiveContext";
import { NavSections } from "../Header/NavBar/NavElement";

type SectionHeight = {
    "about": number,
    "projects": number,
    "contact": number,
}

const MainContent : React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [heights, setHeights] = useState<SectionHeight>({"about": 0, "projects": 0, "contact": 0});

    const {section: _, setSection: setActiveSection} = useActiveContext();
    const handleScroll = () => {
        const {about, projects, contact} = heights;
        if (window.scrollY <= about)         setActiveSection(NavSections.About);
        else if (window.scrollY <= projects) setActiveSection(NavSections.Projects);
        else if (window.scrollY <= contact)  setActiveSection(NavSections.Contact);
    };

    const [resize, setResize] = useState<boolean>(false);
    const handleResize = () => {
        setResize(true);
    };

    useEffect(() => {
        if (ref.current) {
            const children = ref.current.children;
            for (let i = 0, sumHeight = 0; i < children.length; i++) {
                sumHeight += children[i].scrollHeight;
                switch (children[i].id) {
                    case "about":
                        heights.about = sumHeight;
                        break;
                    case "projects":
                        heights.projects = sumHeight;
                        break;
                    case "contact":
                        heights.contact = sumHeight;
                        break;
                }
            }
        }
        setHeights(heights);
        setResize(false);
    }, [resize]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const sections = [
        NavSections.About, 
        NavSections.Projects, 
        NavSections.Contact, 
    ];

    return(
        <div className="flex flex-col min-w-min w-11/12 lg:w-5/12 xl:w-1/3">
            <main className="lg:py-28" ref={ref} >
                {sections.map((section, index) => <ContentSection key={index} section={section} />)}
            </main>
            <Footer />
        </div>
    );
};

export default MainContent;