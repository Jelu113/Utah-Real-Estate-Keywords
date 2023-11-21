import { Select } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const sectionKeyword = (section) => {
    const [keyword, setKeyword] = useState('');

    // based on keyword state, render law
    useEffect(() => {
        keyword;
    })

    

    return (
        <>
            <Select placeholder='Select section' onChange={(e) => setKeyword(e.target.value)}>
                <option value='option1'>keyword 1</option>
                <option value='option2'>keyword 2</option>
                <option value='option3'>keyword 3</option>
            </Select>
        </>
    )
}

export default sectionKeyword