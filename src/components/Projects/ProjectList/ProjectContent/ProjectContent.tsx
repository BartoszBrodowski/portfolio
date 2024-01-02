'use client'

import { Separator } from "@/components/ui/separator";
import { Project } from "@/interfaces/project.interface";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { FunctionComponent } from "react";
import ProjectContentHeader from "./ProjectContentHeader";
import SenderInfo from "./SenderInfo";
import { Paperclip } from "lucide-react";
import ProjectModal from "./ProjectModal";

interface ProjectContentProps {
    project: Project;
}


const ProjectContent: FunctionComponent<ProjectContentProps> = ({ project }) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return ( 
        <div className="flex flex-col w-full">
            <ProjectContentHeader />
            <Separator />
            {project.name && 
                <>
                    <SenderInfo project={project} initials={'BB'} />
                    <div className="flex flex-col items-center gap-16 p-4">
                        <div className="whitespace-pre-line text-sm">{project.shortDescription}</div>
                        <Button 
                            onClick={onOpen} 
                            variant="outline" 
                            className="text-main-green hover:text-primary-foreground border-main-green hover:bg-main-green"
                        >
                            <Paperclip size={16}></Paperclip>
                            Display project
                        </Button>
                        <ProjectModal project={project} isOpen={isOpen} onOpenChange={onOpenChange} onClose={onOpenChange} />
                    </div>
                </>
            }
        </div>
    );
}
 
export default ProjectContent;