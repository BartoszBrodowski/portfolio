'use client'

import { TypeAnimation } from "react-type-animation";
 
const OccupationText = () => {
    return ( 
        <div className="flex flex-col font-bold text-[24px] leading-8 lg:text-5xl lg:gap-2">
            <h1 className="text-8xl text-nowrap">Bartosz Brodowski</h1>
            <span className="text-main-green">
                <TypeAnimation
                    sequence={["Software Engineer 💻", 2000, "CS Student 🎓", 2000]}
                    wrapper="span"
                    speed={50}
                    style={{'display': 'inline-block'}}
                    repeat={Infinity}
                />
            </span>
        </div>
    );
}
 
export default OccupationText;