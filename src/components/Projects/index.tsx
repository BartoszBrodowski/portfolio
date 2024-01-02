'use client';

import { FunctionComponent } from "react";
import ProjectMail from "./Mail";

const Projects: FunctionComponent = () => {
    return (  
        <div id="projects" className="flex flex-col justify-center gap-8 pt-4">
            <div className="flex flex-col justify-center text-center gap-2">
                <h1 className="text-5xl font-bold">Projects</h1>
                <p className="text-md text-muted-foreground">It's that time of the day to check your email.</p>
            </div>
            <ProjectMail />
        </div>
    );
}
 
export default Projects;
