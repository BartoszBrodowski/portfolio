import { Dot, Github } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

interface ContentProps {
    github: string;   
}
 
const Content: FunctionComponent<ContentProps> = ({github}) => {
    return (  
        <div className="flex flex-col gap-6">
            <p>
                It's a frontend project of Guitar Shop website that allows users to search through guitars or strings and lets them put the products in their shopping cart/wishlist. It also allows users to create accounts and log in.
            </p>
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-2xl">🎓 What have I learned?</h2>
                The most important things I've learned in the making of this project are:
                <ul>
                    <li className="flex items-center"><Dot size={24} />Redux state management</li>
                    <li className="flex items-center"><Dot size={24} />Searching/sorting and filtering</li>
                    <li className="flex items-center"><Dot size={24} />Forms validation using Formik</li>
                    <li className="flex items-center"><Dot size={24} />Using Redux state management asynchronously</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-xl">📷 Check out the design on Github README:</h2>
                <Link href={github} target="#" className="flex items-center gap-2">
                    <Github size={32} />
                    <span className="hover:text-main-green transition-all transform-150">{github}</span>
                </Link>
            </div>
        </div>
    );
}
 
export default Content;