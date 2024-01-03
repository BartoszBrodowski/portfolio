'use client'

import { NavTabInfo } from "@/interfaces/navtab.interface";
import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { buttonVariants } from "../../ui/button";

interface NavTabProps {
    tab: NavTabInfo;
    index: number;
    isClicked: boolean;
    changeTab: (index: number) => void
}
 
const NavTab: FunctionComponent<NavTabProps> = ({tab, index, isClicked, changeTab}) => {
    return ( 
        <button disabled={!tab.isActive} onClick={() => changeTab(index)} className={cn(
            isClicked
            ? buttonVariants({variant: 'default'})
            : buttonVariants({variant: 'ghost'}),
            !tab.isActive ? 'text-muted-foreground' : '',
            "flex justify-between w-full px-4 hover:cursor-pointer'", 
        )}>
            <div className="flex gap-2">
                <span>{tab.icon}</span>
                <h1>{tab.name}</h1>
            </div>
            {tab.isActive && <span className="flex h-2 w-2 rounded-full bg-main-green" />}
        </button>
    );
}
 
export default NavTab;