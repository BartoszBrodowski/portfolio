import { Project } from "@/interfaces/project.interface";
import { Button, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { FunctionComponent } from "react";

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onClose: () => void;
}
 
const ProjectModal: FunctionComponent<ProjectModalProps> = ({project, isOpen, onOpenChange, onClose}) => {
    return (  
        <Modal className="p-1 lg:p-4" backdrop="blur" size="2xl" placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalBody className="pt-2">
                    {project.modalComponent}
                    <Button onPress={onClose} color="danger" variant="ghost" className="w-[150px] ml-auto" >Close</Button>
                </ModalBody>
                </>
            )}
            </ModalContent>
        </Modal>
    );
}
 
export default ProjectModal;