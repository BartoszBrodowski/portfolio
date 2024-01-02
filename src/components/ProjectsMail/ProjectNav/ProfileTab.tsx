import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";
import { FunctionComponent } from "react";

interface ProfileTabProps {
    currentField?: string;
    changeFilterField: (field: string) => void;
}

const fields = ['All', 'Frontend', 'Backend', 'Fullstack'];

const ProfileTab: FunctionComponent<ProfileTabProps> = ({currentField, changeFilterField}) => {
    return (  
        <div className="flex items-center justify-between p-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="h-[36px]">
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
                    </DropdownMenuContent>
                </DropdownMenuRadioGroup>
            </DropdownMenu>
        </div>
    );
}
 
export default ProfileTab;