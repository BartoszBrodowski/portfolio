import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";
import { FunctionComponent, useState } from "react";

interface ProfileTabProps {
    currentField?: string;
    changeFilterField: (field: string) => void;
}

const fields = ['Frontend', 'Backend', 'Fullstack'];
 
const ProfileTab: FunctionComponent<ProfileTabProps> = ({currentField, changeFilterField}) => {
    return (  
        <div className="flex items-center justify-between h-[60px] px-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' className="flex justify-between w-full">
                        {currentField}
                        <ChevronsUpDown size={16} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuRadioGroup value={currentField}>
                    <DropdownMenuContent className="w-[230px]">   
                        <ul className="flex flex-col">
                            {fields.map((field, index) => {
                                return (
                                    <DropdownMenuRadioItem onClick={() => changeFilterField(field)} value={field} className="hover:cursor-pointer w-full" key={index}>{field}</DropdownMenuRadioItem>
                                )
                            })}
                        </ul>
                        {/* <DropdownMenuCheckboxItem checked={true}>Test</DropdownMenuCheckboxItem> */}
                    </DropdownMenuContent>
                </DropdownMenuRadioGroup>
            </DropdownMenu>
        </div>
    );
}
 
export default ProfileTab;