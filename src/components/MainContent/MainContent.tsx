import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";

const MainContent : React.FC = () => {
    return(
        <div className="text-slate-900 leading-6 w-full flex flex-col justify-between gap-6">
            <AboutMe />
            <Contact />
            <Projects />
        </div>
    );
};

export default MainContent;