import NavBar from "@/components/NavBar/NavBar";
import SkillsIndex from "@/components/SkillsIndex";

export default function Page() {
    return (
        <div className="flex flex-col md:flex-row items-center md:justify-evenly md:items-stretch px-0 md:px-2">
            <header className="md:sticky md:top-0 md:h-screen flex flex-col justify-between gap-6 w-11/12 md:w-5/12 2xl:w-1/3 min-w-min pt-10 md:pt-20 2xl:pt-24">
                <div className="flex flex-col justify-between gap-10">
                    <span className="text-nowrap">
                        <h1 className="text-4xl md:text-6xl font-bold">Mac Lee</h1>
                        <h2 className="font-semibold md:text-xl">Junior Software Developer</h2>
                    </span>
                    <NavBar />
                </div>
                <SkillsIndex />
            </header>

            <main className="min-w-min w-11/12 md:w-5/12 2xl:w-1/3 md:pt-20 2xl:pt-24">
                <div>
                    <h1 id="about" >About</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
                <div>
                    <h1 id="projects" >Projects</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
                <div>
                    <h1 id="contact" >Contact</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </main>
        </div>
    );
}
