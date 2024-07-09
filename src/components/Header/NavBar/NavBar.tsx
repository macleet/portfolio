import React from "react";

import NavElement, { NavSections } from "./NavElement";

const NavBar : React.FC = () => {
    return(
        <nav className="invisible h-0 lg:h-fit lg:visible">
            <ul className="list-none" >
                <NavElement section={NavSections.About} />
                <NavElement section={NavSections.Projects} />
                <NavElement section={NavSections.Contact} />
            </ul>
        </nav>
    );
};

export default NavBar;