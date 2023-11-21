import { Select } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import sectionKeyword from './sectionKeyword';

const Home = () => {
    const [section, setSection] = useState('');

    // useeffect every state change, pass in the section state to figure which keywords to render
    useEffect(() => {
        //keyword component based on section state
        section;
    })

    return (
        <>
            <Select placeholder='Select section' onChange={(e) => setSection(e.target.value)}>
                <option value='option1'>section 1</option>
                <option value='option2'>section 2</option>
                <option value='option3'>section 3</option>
            </Select>
        </>
    )
}

export default Home;