import { Select } from '@chakra-ui/react'
import { useState } from 'react'
import SectionKeyword from './SectionKeyword'


const Section = () => {
    const [selectedSection, setSelectedSection] = useState('');


    const section = [
        "Affirmative Duties Required of Licensed Individuals.",
        "Prohibited Conduct As Applicable to Licensed Individuals",
        "Requirements and Restrictions in Advertising.",
        "Trust Accounts - Real Estate Company."
    ]

    const sectionOptions = section.map((sectionTitle) => (
        <option key={sectionTitle} value={sectionTitle}>{sectionTitle}</option>
    ))

    const handleSectionChange = (e) => {
        const selectedVal = e.target.value;
        setSelectedSection(selectedVal)
    }


    return (
        <>
            <h2>Select a Section</h2>
            <Select placeholder='Select section' onChange={handleSectionChange}>
                {sectionOptions}
            </Select>
            <SectionKeyword selectedSection={selectedSection}/>
        </>
    )
}

export default Section;
