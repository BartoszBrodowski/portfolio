import { FunctionComponent } from 'react'
import HobbiesAccordion from './HobbiesAccordion'

const Hobbies: FunctionComponent = () => {
    return (
        <div className='w-full text-xl'>
            <h2 className="font-semibold text-2xl mb-2">Hobbies</h2>
            <HobbiesAccordion />
        </div>
    )
}

export default Hobbies