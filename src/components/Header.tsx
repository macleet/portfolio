import React from "react";

const Header : React.FC = () => {
    return(
        <header className="select-none flex w-full" >
            <a title="Home" href="#" className="text-slate-800 text-nowrap hover:cursor-pointer">
                <h1 className="text-5xl font-bold">Mac Lee</h1>
                <h2 className="font-semibold text-lg">New Grad Software Developer</h2>
            </a>
        </header>
    );
};

export default Header;