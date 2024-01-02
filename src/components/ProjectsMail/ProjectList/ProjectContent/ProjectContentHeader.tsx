import { FunctionComponent } from "react";
import { Archive, ArchiveX, Trash2, Reply, ReplyAll, Forward, MoreVertical } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import { IconTooltip } from "@/interfaces/icon-tooltip.interface";

const iconSize = 20

const archiveIcons: IconTooltip[] = [
    { element: <Archive size={iconSize} />, tooltipText: "Archive" },
    { element: <ArchiveX size={iconSize} />, tooltipText: "Unarchive" },
    { element: <Trash2 size={iconSize} />, tooltipText: "Delete" }
];

const forwardIcons: IconTooltip[] = [
    { element: <Reply size={iconSize} />, tooltipText: "Reply" },
    { element: <ReplyAll size={iconSize} />, tooltipText: "Reply all" },
    { element: <Forward size={iconSize} />, tooltipText: "Forward" }
];
 
const ProjectContentHeader: FunctionComponent = () => {
    return (  
        <div className="flex justify-between w-full h-[68px] px-3">
            <TooltipProvider delayDuration={0}>
                <ul className="flex items-center justify-between gap-3">
                    {archiveIcons.map((icon, index) => {
                        return (
                            <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                    <Button variant='ghost' size='icon'>
                                        {icon.element}
                                        <TooltipContent>
                                            <span>{icon.tooltipText}</span>
                                        </TooltipContent>
                                    </Button>
                                </TooltipTrigger>
                            </Tooltip>
                        )
                    })}
                </ul>
                <ul className="flex items-center gap-3">
                    {forwardIcons.map((icon, index) => {
                        return (
                            <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                    <Button variant='ghost' size='icon'>
                                        {icon.element}
                                        <TooltipContent>
                                            <span>{icon.tooltipText}</span>
                                        </TooltipContent>
                                    </Button>
                                </TooltipTrigger>
                            </Tooltip>
                        )
                    })}
                    <Separator orientation="vertical" />
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant='ghost' size='icon'>
                                <MoreVertical size={iconSize} />
                                <TooltipContent>
                                    <span>More</span>
                                </TooltipContent>
                            </Button>
                        </TooltipTrigger>
                    </Tooltip>
                </ul>
            </TooltipProvider>
        </div>
    );
}
 
export default ProjectContentHeader;