import { FunctionComponent } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const HobbiesAccordion: FunctionComponent = () => {
	const currentYear = new Date().getFullYear();
	const nextYear = new Date().getMonth() >= 10 ? currentYear + 1 : currentYear;
	return (
		<Accordion collapsible type='single' className='w-full'>
			<AccordionItem value='item-1'>
				<AccordionTrigger className='font-normal'>Formula 1</AccordionTrigger>
				<AccordionContent>
					<strong>Formula 1 🏁</strong> became my big interest back in 2021 and ever since I've been
					a big fan of the sport. My favorite track is Austria, I currently dont support any
					specific team/driver and I'm looking forward to {nextYear} season!
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-2'>
				<AccordionTrigger className='font-normal'>Guitar</AccordionTrigger>
				<AccordionContent>
					<strong>Guitar 🎸</strong> is a from time to time thing for me as of late. I play electric
					guitar, mainly fingerstyle songs.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value='item-3'>
				<AccordionTrigger className='font-normal'>Crocheting</AccordionTrigger>
				<AccordionContent>
					<strong>Crocheting 🧶</strong> is my latest hobby. I mainly crochet "Amigurumis" which are
					little mascots made of fluffy yarn.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default HobbiesAccordion;
