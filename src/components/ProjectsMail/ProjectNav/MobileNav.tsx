import { Input } from "@/components/ui/input";
import { Project } from "@/interfaces/project.interface";
import { Search } from "lucide-react";
import { FunctionComponent } from "react";

interface MobileNavProps {
    currentFilterField: string;
    setProjects: (projects: Project[]) => void;
    changeFilterField: (field: string) => void;
}
 
const MobileNav: FunctionComponent<MobileNavProps> = () => {
    return (  
        <div className="w-full">
            <div className="flex items-center relative my-4">
                {/* <Search className="absolute left-2 text-muted-foreground" size={18} /> */}
                {/* <Input placeholder="Search" className="pl-8 w-full" value={searchValue} onChange={handleSearchChange} /> */}
                <div className="pl-8">
                    Testing
                </div>
            </div>
        </div>
    );
}
 
export default MobileNav;