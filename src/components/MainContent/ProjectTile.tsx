interface ProjectProps {
    name: string;
    description: string;
    skills: string[];
    url: string;
}

export default function ProjectTile({name, description, skills, url}: ProjectProps) {
    return(
        <div className="transition-all ease-in-out bg-sky-100 bg-opacity-35 hover:bg-opacity-50 flex flex-col justify-between gap-3 px-4 py-3 border-2 border-sky-300 border-opacity-5 hover:border-opacity-10 border-solid rounded-2xl" >
            <a href={url} target="_blank" title="See project details" tabIndex={0} className="hover:text-blue-900 text-left w-fit text-lg font-medium hover:font-semibold hover:cursor-pointer transition-all after:content-['_↗'] after:text-sm hover:after:text-base hover:after:font-medium after:transition-all" >{name}</a>
            <div className="flex flex-wrap items-center" >
                {skills.map((skill, index) => <div key={index} className="text-blue-100 text-sm font-medium bg-blue-800 bg-opacity-70 px-3 py-1 mx-0.5 my-1 rounded-full shadow-sm">{skill}</div>)}
            </div>
            <p>{description}</p>
        </div>
    );
};