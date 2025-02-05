import ProjectTile from "./ProjectTile";

export default function Projects() {
    const projects = [
        {
            name: "Productivity Web App",
            description: "Take control of your time and tasks with this all-in-one productivity app. Effortlessly \
            organize your to-dos into custom folders, set due dates, and prioritize tasks with ease. Break down larger \
            tasks into manageable phases and steps with AI-generated suggestions, boosting efficiency and clarity. Stay \
            focused with the built-in Pomodoro timer and track your progress with detailed productivity charts that monitor \
            both work and rest hours. With powerful search functionality and intuitive link management for task organization, \
            this app helps you stay on top of personal projects and daily tasks while maintaining a healthy balance between \
            productivity and well-being.",
            skills: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "react-chartjs-2", "LLM"]
        },
        {
            name: "Inventory Management Mobile App",
            description:`Simplify your inventory management with a mobile app designed for ease of use 
            and security. Keep track of essential details, including item name, notes, category, unit type, 
            supplier, and SKU—all in one place. Employees can easily flag low-stock items to notify management, 
            ensuring timely restocking. With secure login powered by Argon2id hashing, you can access your 
            inventory seamlessly across multiple devices. Stay organized, informed, and in control with a 
            streamlined, secure solution for managing your inventory.`,
            // description: "Simplify your inventory management with a mobile app designed \
            // for ease of use and efficiency. Track essential data points such as par levels \
            // and quantities with a user-friendly interface that keeps everything at your \
            // fingertips. The app features a built-in calendar and reminder system for inventory \
            // checks and delivery notifications, ensuring you're always prepared. With the ability \
            // to create an account, you can seamlessly manage your inventory across devices and \
            // access it from anywhere. Stay organized, informed, and in control with this powerful \
            // inventory management tool.",
            skills: ["React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "SQLite", "Passport.js", "OAuth", "Argon2", "Tailwind CSS"]
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
}