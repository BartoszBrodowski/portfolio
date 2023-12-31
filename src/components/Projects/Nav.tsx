'use client'

import { navTabs } from "@/data/navtabs.data";
import { FunctionComponent, useState } from "react";
import NavTab from "./NavTab";


const Nav: FunctionComponent = () => {
    const [clicked, setClicked] = useState<number>(0);

    const changeTab = (index: number): void => {
        setClicked(index);
    }
    return (  
        <div className="w-full max-w-[250px]">
            <nav>
                <ul className="flex flex-col gap-1">
                    {navTabs.map((tab, index) => {
                        return (
                            <NavTab isClicked={clicked === index} setClicked={setClicked} key={index} tab={tab} index={index} />
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}
 
export default Nav;