import { Select } from '@chakra-ui/react'
// import { useState } from 'react'


const SectionKeyword = (section) => {
    // const [keyword, setKeyword] = useState('');
    console.log(section);

    return (
        <>
            <h2>Select a Keyword</h2>
            <Select placeholder='Select keyword'>
                <option value='option1'>keyword 1</option>
                <option value='option2'>keyword 2</option>
                <option value='option3'>keyword 3</option>
            </Select>
        </>
    )
}

export default SectionKeyword;