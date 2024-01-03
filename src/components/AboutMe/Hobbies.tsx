import { FunctionComponent } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const Hobbies: FunctionComponent = () => {
    const currentYear = new Date().getFullYear();
    const nextYear = new Date().getMonth() >= 10 ? currentYear + 1 : currentYear;
    return (
        <div className='w-full text-xl'>
            <h2 className="font-semibold text-2xl mb-2">Hobbies</h2>
            <Accordion type="single" className="w-full" defaultValue='item-1'>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-normal">Formula 1</AccordionTrigger>
                    <AccordionContent>
                        <strong>Formula 1 🏁</strong> became my big interest back in 2021 and ever since I've been a big fan of the sport. My favorite track is Austria, I currently dont support any specific team/driver and I'm looking forward to {nextYear} season!
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="font-normal">Guitar</AccordionTrigger>
                    <AccordionContent>
                        <strong>Guitar 🎸</strong> is a from time to time thing for me as of late. I paly electric guitar, mainly fingerstyle songs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="font-normal">Crocheting</AccordionTrigger>
                    <AccordionContent>
                        <strong>Crocheting 🧶</strong> is my latest hobby. I mainly crochet "Amigurumis" which are little moscots made of fluffy yarn.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Hobbies