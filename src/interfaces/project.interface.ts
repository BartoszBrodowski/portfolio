import { ReactElement } from "react";

export interface Project {
    name: string;
    date: string;
    shortDescription: string;
    technologies: string[];
    github: string;
    field: string;
    preview?: string;
    modalComponent?: ReactElement;
}