"use client"

import { NavSections } from "@/components/Header/NavBar/NavElement";

import React, {
    createContext,
    useContext,
    useState,
    FC,
    PropsWithChildren,
} from "react";

type ActiveContextType = {
    section: NavSections;
    setSection: React.Dispatch<React.SetStateAction<NavSections>>;
}

const ActiveContext = createContext<ActiveContextType | undefined>(undefined);
export const useActiveContext = () => {
    const context = useContext(ActiveContext);
    if (!context) {
        throw new Error("Use useActiveContext within Provider.");
    }
    return context;
};

export const ActiveProvider : FC<PropsWithChildren> = ({ children }) => {
    const [activeSection, setActiveSection] = useState<NavSections>(NavSections.About);
    return(
        <ActiveContext.Provider value={{section: activeSection, setSection: setActiveSection}}>
            {children}
        </ActiveContext.Provider>
    );
};
