import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col md:flex-row items-center md:justify-evenly md:items-stretch bg-violet-300 px-0 md:px-2 ">
            <header className="sticky top-0 md:h-screen flex flex-col justify-between gap-8 bg-red-400 w-11/12 md:w-5/12 min-w-min py-10 md:py-20 mb-14 md:mb-0">
                <div className="flex flex-col justify-between gap-8">
                    <span className="text-nowrap">
                        <h1 className="text-4xl font-bold">Mac Lee</h1>
                        <h2 className="font-medium">Junior Software Developer</h2>
                    </span>

                    <nav>
                        <ul className="list-none font-medium text-sm" >
                            <li className="my-2" ><Link href="/">About</Link></li>
                            <li className="my-2" ><Link href="/">Projects</Link></li>
                            <li className="my-2" ><Link href="/">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="bg-blue-500 flex flex-wrap">
                    <div className="bg-slate-200 px-2 rounded-full w-fit mr-1 mb-1">
                        <span className="text-sm text-slate-700 font-bold" >React</span>
                    </div>
                    <div className="bg-slate-200 px-2 rounded-full w-fit mr-1 mb-1">
                        <span className="bg-slate-200 rounded-full text-sm text-slate-700 font-bold text-nowrap" >React Native</span>
                    </div>
                    <div className="bg-slate-200 px-2 rounded-full w-fit mr-1 mb-1">
                        <span className="bg-slate-200 rounded-full text-sm text-slate-700 font-bold" >Node.js</span>
                    </div>
                    <div className="bg-slate-200 px-2 rounded-full w-fit mr-1 mb-1">
                        <span className="bg-slate-200 rounded-full text-sm text-slate-700 font-bold" >Next.js</span>
                    </div>
                    <div className="bg-slate-200 px-2 rounded-full w-fit mr-1 mb-1">
                        <span className="bg-slate-200 rounded-full text-sm text-slate-700 font-bold" >Express</span>
                    </div>
                    <div className="bg-slate-200 px-2 rounded-full w-fit mr-1 mb-1">
                        <span className="bg-slate-200 rounded-full text-sm text-slate-700 font-bold" >TypeScript</span>
                    </div>
                    <div className="bg-slate-200 px-2 rounded-full w-fit mr-1 mb-1">
                        <span className="bg-slate-200 rounded-full text-sm text-slate-700 font-bold" >JavaScript</span>
                    </div>
                    <div className="bg-slate-200 px-2 rounded-full w-fit mr-1 mb-1">
                        <span className="bg-slate-200 rounded-full text-sm text-slate-700 font-bold" >C#</span>
                    </div>
                    <div className="bg-slate-200 px-2 rounded-full w-fit mr-1 mb-1">
                        <span className="bg-slate-200 rounded-full text-sm text-slate-700 font-bold" >PostgreSQL</span>
                    </div>
                    <div className="bg-slate-200 px-2 rounded-full w-fit mr-1 mb-1">
                        <span className="bg-slate-200 rounded-full text-sm text-slate-700 font-bold" >HTML/CSS</span>
                    </div>
                </div>
            </header>

            <main className="bg-green-500 min-w-min w-11/12 md:w-5/12 md:pt-20 ">
                <h1>About</h1>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h1>Experience</h1>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h1>Contact</h1>
            </main>
        </div>
    );
}
