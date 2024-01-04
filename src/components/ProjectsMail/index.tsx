'use client';

import { FunctionComponent } from "react";
import ProjectMail from "./Mail";

const Projects: FunctionComponent = () => {
    return (  
        <div id="projects" className="flex flex-col justify-center min-h-screen gap-8 w-full">
            <div className="flex flex-col text-center gap-2">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Projects</h1>
                <p className="sm:text-sm md:text-md lg:text-lg text-muted-foreground">It's that time of the day to check your email.</p>
            </div>
            <ProjectMail />
        </div>
    );
}
 
export default Projects;
