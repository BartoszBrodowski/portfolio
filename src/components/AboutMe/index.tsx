import { FunctionComponent } from "react";
import Hobbies from "./Hobbies";
import Roadmap from "./Roadmap";
 
const AboutMe: FunctionComponent = () => {
    return (  
        <div id="about" className="flex flex-col justify-center items-center gap-16 min-h-screen w-full relative">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">About Me</h1>
            <div className="grid grid-cols-2 items-center h-[550px]">
                <div className="flex flex-col gap-8 col-span-2 md:col-span-1 h-full">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-2xl">Who am I?</h2>
                        <p className="text-lg mt-4">I'm a 3rd year Computer Science student at University of Gdańsk keen on learning new things, taking on challenges and open to new friendships.
                        </p>
                        <p className="text-lg mt-4">
                            My best quality is organisation and being able to manage my time. I think that planning ahead is the key to success.
                        </p>
                    </div>
                    <Hobbies />
                </div>
                <div className="flex justify-start ml-16 lg:ml-0 lg:justify-center col-span-1 h-full relative">
                    <Roadmap />
                </div>
            </div>
        </div>
    );
}
 
export default AboutMe;