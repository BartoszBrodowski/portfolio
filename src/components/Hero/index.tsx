import { FunctionComponent } from "react";
import ThemeToggle from "../ThemeProvider/ThemeToggle";
import OccupationText from "./OccupationText";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const iconSize = 36;


const Hero: FunctionComponent = () => {
    return ( 
        <>
            <ThemeToggle />
            <div className="flex flex-col justify-center items-start gap-20 h-screen lg:mt-0 relative w-4/5">
                <OccupationText />
                <div className="flex items-center gap-40 w-full">
                    <span className="w-[570px] text-xl">
                        I'm passionate about <strong>Web Development</strong>. Currently looking for a job and learning NextJS and Angular with SpringBoot. Based in <strong>Gdańsk, Poland📍</strong>
                    </span>
                    <div className="flex flex-col gap-4 text-2xl text-main-black">
                        <div className="flex flex-col gap-2 link">
                            <Link href='https://github.com/BartoszBrodowski' target="_blank" className="flex items-center gap-2"><GithubIcon size={iconSize} />
                                Github
                            </Link>
                        </div>
                        <div className="flex flex-col gap-2 link">
                            <Link href='https://www.linkedin.com/in/bartoszbrodowski/' target="_blank" className="flex items-center gap-2"><LinkedinIcon strokeWidth={1.5} size={iconSize} />
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Hero;