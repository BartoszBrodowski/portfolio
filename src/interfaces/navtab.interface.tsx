import { ReactElement } from "react";
import { Project } from "./project.interface";

export interface NavTabInfo {
    name: string;
    icon: ReactElement<any, any>;
    projects?: Array<Project>;
    isActive: boolean;
}