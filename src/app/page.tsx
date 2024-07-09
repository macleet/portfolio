"use client"

import Header from "@/components/Header/Header";
import MainContent from "@/components/MainContent/MainContent";

import { ActiveProvider } from "@/context/ActiveContext";

export default function Page() {
    return (
        <div className="h-fit flex flex-col lg:flex-row items-center lg:justify-evenly lg:items-stretch px-0 lg:px-2">
            <ActiveProvider>
                <Header />
                <MainContent />
            </ActiveProvider>
        </div>
    );
}
