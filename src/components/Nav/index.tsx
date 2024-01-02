'use client'

import { IconTooltip } from "@/interfaces/icon-tooltip.interface";
import { Tooltip } from "@nextui-org/react";
import { FolderDot, Home } from 'lucide-react';
import { FunctionComponent } from "react";
import { Button } from "../ui/button";

const iconSize = 24

interface NavTooltip extends IconTooltip {
    id: string;
}

const icons: NavTooltip[] = [
    {
        element: <Home size={iconSize} />,
        tooltipText: 'Home',
        id: 'home'
    },
    {
        element: <FolderDot size={iconSize} />,
        tooltipText: 'Projects',
        id: 'projects'
    },
];

interface NavProps {
    
}
 
const Nav: FunctionComponent<NavProps> = () => {
    function scrollToElement(id: string) {
        const element = document.getElementById(id);
  
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (  
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 rounded-md bg-muted p-3">
            <ul className="flex flex-col gap-4">
                {icons.map((icon, index) => {
                    return (
                        <Tooltip delay={0} closeDelay={0}  key={index} content={icon.tooltipText} placement="left">
                            <Button onClick={() => scrollToElement(icon.id)} variant='outline' className="p-0 px-2 flex items-center justify-center">
                                {icon.element}
                            </Button>
                        </Tooltip>
                    )
                })}
            </ul>
        </div>
    );
}
 
export default Nav;