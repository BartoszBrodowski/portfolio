import { ScrollShadow } from "@nextui-org/react";
import { FunctionComponent } from "react";
import Content from "./Content";
import TechIcons from "./TechIcons";

interface GuitarShopProps {
    github: string;
}
 
const GuitarShop: FunctionComponent<GuitarShopProps> = ({github}) => {
    return ( 
        <ScrollShadow size={50} className="h-[450px] pt-4">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-4xl">🎸 Guitar shop</h1>
                <TechIcons />
                <Content github={github} />
            </div>
        </ScrollShadow>
    );
}
 
export default GuitarShop;