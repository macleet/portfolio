
import React from "react";

import { NavSections } from "../Header/NavBar/NavElement";

const ContentSection : React.FC<{section : NavSections}> = ({section}) => {
    let sectionId : string = "";
    switch (section) {
        case NavSections.About:
            sectionId = "about";
            break;
        case NavSections.Projects:
            sectionId = "projects";
            break;
        case NavSections.Contact:
            sectionId = "contact";
            break;
    }

    const break1 = <span className="bg-orange-400" >1<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></span>;
    const break2 = <span>2<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></span>;

    return(
        <div id={sectionId}>
            {section === NavSections.About && <p className="bg-red-500">The summer I moved to India from New Jersey, I often found myself inside rather than outside 
                of the house. The downside to being indoors, while cool and dry, is that indoors gets <i>very</i> old after a while. 
                One week, I got so bored that I decided I wanted to learn something. And that something was how to create a website. 
                I remember fiddling around with markup, style sheets, and scripts for days to create this website for myself. I have
                always had a passion for building/engineering, as well as the visual arts. This seemed like a perfect hobby for me. Alas,
                my youthful yet short attention span got to me and I never touched my Sublime Text code editor ever again. Thankfully,
                my high school offered computer science classes and my brain had developed to be less... scattered.
                </p>}
            {section === NavSections.Projects && break1 }
            {section === NavSections.Contact && break2 }
        </div>
    );
};

export default ContentSection;
