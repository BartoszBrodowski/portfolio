'use client'

import { Snippet } from "@nextui-org/react";
import { CheckCheck, Copy, Github, Linkedin, Mail, Mailbox } from "lucide-react";
import { FunctionComponent, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ContactProps {
    
}
 
const Contact: FunctionComponent<ContactProps> = () => {
    const [copied, setCopied] = useState<boolean>(false);
    return (  
        <div id="contact" className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center items-center gap-4 lg:gap-8">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Get in touch with me!</h1>
                    <p className="text-sm md:text-md lg:text-xl text-muted-foreground w-3/4 sm:w-2/3 text-center px-4 lg:px-0">If you want to hire me, offer to join a cool project, or want to ask me anything, hit me up!</p>
                </div>
                <div className="flex flex-col gap-2 w-full items-start">
                    <div className="flex items-center justify-center gap-1 text-center w-full">
                        <Mailbox className="w-8 h-8 lg:w-12 lg:h-12 p-1" />
                        <a className="text-2xl font-mono" href="mailto:bar.brodowski@gmail.com">bar.brodowski@gmail.com</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Contact;