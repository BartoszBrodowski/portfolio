import { Button } from "@/components/ui/button";
import ReactIcon from "@/icons/ReactIcon";
import ReduxIcon from "@/icons/ReduxIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import { IconTooltip } from "@/interfaces/icon-tooltip.interface";
import { Tooltip } from "@nextui-org/react";
import { FunctionComponent } from "react";

interface TechIconsProps {
    
}

const iconSize = 32

const icons: IconTooltip[] = [
    {
        element: <ReduxIcon size={iconSize} />, 
        tooltipText: 'Redux'
    },
    {
        element: <TailwindIcon size={iconSize} />,
        tooltipText: 'TailwindCSS'
    },
    {
        element: <ReactIcon size={iconSize} />, 
        tooltipText: 'React'
    },
];
 
const TechIcons: FunctionComponent<TechIconsProps> = () => {
    return (  
            <div className="flex items-center gap-1">
                <h1 className="font-semibold text-md">Technologies: </h1>
                <div className="flex gap-1">
                    {icons.map((icon, index) => {
                        return (
                            <Tooltip delay={0} closeDelay={0}  key={index} content={icon.tooltipText} placement="bottom">
                                <div className="flex items-center justify-center">
                                    {icon.element}
                                </div>
                            </Tooltip>
                        )
                    })}
                </div>
            </div>
    );
}
 
export default TechIcons;