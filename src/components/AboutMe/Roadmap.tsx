'use client'

import { FunctionComponent } from "react";
import { Separator } from "../ui/separator";
import { Tooltip, useDisclosure } from "@nextui-org/react";
import UniversityModal from "./UniversityModal";
 
const Roadmap: FunctionComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (  
        <div className="flex flex-col justify-center items-center h-full absolute">
            <h2 className="font-semibold mb-4 text-2xl">Experience</h2>
            <div className="flex justify-center h-full relative">
                <Separator orientation="vertical" className="absolute" />
                <Tooltip delay={0} closeDelay={0} content="Click to know more" placement="left">
                    <div className="bg-white w-4 h-4 absolute rounded-full border border-4 top-1/4 -translate-y-1/2 hover:scale-150 transition-all hover:cursor-pointer animate-button-float" onClick={onOpen}>
                    </div>
                </Tooltip>
                <UniversityModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
                <div className="bg-white w-4 h-4 absolute rounded-full border border-4 top-3/4 -translate-y-1/2 hover:scale-150 transition-all">

                </div>
                <div className="h-full relative">
                    <div className="absolute text-center top-1/4 -translate-y-1/2 left-16 truncate w-[180px]">
                        <h3>University of Gdańsk</h3>
                        <p className="text-muted-foreground">2021 - 2024</p>
                    </div>
                    <div className="absolute text-center top-3/4 -translate-y-1/2 left-16 truncate w-[180px]">
                        <h3>Looking for a job!</h3>
                        <p className="text-muted-foreground">Currently</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Roadmap;