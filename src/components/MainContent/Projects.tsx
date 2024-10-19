import ProjectTile from "./ProjectTile";

export default () => {
    const projects = [
        {
            name: "Productivity Web App",
            description: "Take control of your time and tasks with this all-in-one productivity app. \
            Organize your to-dos into custom folders, set due dates, and prioritize with ease. Break \
            down larger tasks into manageable steps with AI-generated suggestions for enhanced \
            efficiency. Boost focus using the built-in Pomodoro timer, and track your progress \
            with detailed productivity charts that balance work and rest hours. Whether you're \
            managing personal projects or daily tasks, this app empowers you to stay organized \
            and productive while maintaining a healthy balance.",
            skills: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"]
        },
        {
            name: "Inventory Management Mobile App",
            description: "Simplify your inventory management with a mobile app designed \
            for ease of use and efficiency. Track essential data points such as par levels \
            and quantities with a user-friendly interface that keeps everything at your \
            fingertips. The app features a built-in calendar and reminder system for inventory \
            checks and delivery notifications, ensuring you're always prepared. With the ability \
            to create an account, you can seamlessly manage your inventory across devices and \
            access it from anywhere. Stay organized, informed, and in control with this powerful \
            inventory management tool.",
            skills: ["React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "Passport.js", "JWT", "Argon2", "Tailwind CSS"]
        },
        {
            name: "Personal Website",
            description: "My mobile-first portfolio website, designed with a focus on \
            responsiveness and user experience. Whether you're browsing on a smartphone, tablet, \
            or desktop, my work is presented in a clean layout that adapts seamlessly to \
            any screen size. With a clean, intuitive interface, you can easily explore my projects \
            and skills.",
            skills: ["React", "Next.js", "Vercel", "TypeScript", "Tailwind CSS"]
        }
    ];

    return(
        <div className="flex flex-col justify-between gap-2">
            <h2 className="font-semibold text-xl">My Projects</h2>
            <div className="flex flex-col justify-between gap-3" >
                {projects.map((project, index) => <ProjectTile key={index} {...project} />)}
            </div>
        </div>
    );
};