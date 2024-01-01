'use client'

import { Separator } from "@/components/ui/separator";
import { Project } from "@/interfaces/project.interface";
import { FunctionComponent } from "react";
import ProjectContentHeader from "./ProjectContentHeader";
import SenderInfo from "./SenderInfo";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

interface ProjectContentProps {
    project: Project;
}


const ProjectContent: FunctionComponent<ProjectContentProps> = ({ project }) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    // const initials = project.name.split(' ').map(word => word[0]).join('')
    return ( 
        <div className="flex flex-col w-full">
            <ProjectContentHeader />
            <Separator />
            {
                project.name ? 
                <>
                    <SenderInfo project={project} initials={'BB'} />
                    <div className="flex flex-col items-center gap-16 p-4">
                        <div className="whitespace-pre-line">{project.shortDescription}</div>
                        <Button onPress={onOpen} className="bg-main-green text-primary-foreground w-[150px]" >
                            Display project
                        </Button>
                        <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
                            <ModalContent>
                            {(onClose) => (
                                <>
                                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                <ModalBody>
                                    {project.content}
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                    Action
                                    </Button>
                                </ModalFooter>
                                </>
                            )}
                            </ModalContent>
                        </Modal>
                    </div>
                </>
            : null
            }
        </div>
    );
}
 
export default ProjectContent;