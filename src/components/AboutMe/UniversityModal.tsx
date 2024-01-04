import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { FunctionComponent } from "react";

interface UniversityModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
 
const UniversityModal: FunctionComponent<UniversityModalProps> = ({ isOpen, onOpen, onClose }) => {
    return (  
        <Modal backdrop='blur' isOpen={isOpen} onClose={onClose} size="xl">
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-2xl">Univerity of Gdańsk 🎓</ModalHeader>
                <ModalBody>
                    <p> 
                        I'm a <strong>3rd year Computer Science</strong> student at University of Gdańsk.
                    </p>
                    <p>
                        I was also fascinated by the idea of <strong>creating</strong> something from scratch and seeing it come to life but I never could draw, paint etc. Math was always something that was coming easy to me, so I thought that Computer Science would be a good choice for me.
                    </p>
                    <p>
                        I was right. I'm really enjoying my studies and I'm keen on <strong>learning new thigns</strong>. My favorite field of IT is <strong>Web Development</strong> and I'd want to forward my career in this direction.
                    </p>
                </ModalBody>
                <ModalFooter className="pt-0">
                    <Button color="danger" variant="light" onPress={onClose}>
                    Close
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    );
}
 
export default UniversityModal;