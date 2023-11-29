import { Select } from '@chakra-ui/react'
 import { useState } from 'react'

const SectionKeyword2 = ({selectedSection}) => {
    const [selectedKeyword, setSelectedKeyword] = useState('');
    console.log(selectedSection);


    const keywordOptions = [
        {
            sectionTitle: "Affirmative Duties Required of Licensed Individuals.",
            keywords: ["Affirmative", "Duties", "License"]
        },
        {
            sectionTitle: "Prohibited Conduct As Applicable to Licensed Individuals",
            keywords: ["Prohibit", "Conduct", "Applicable"]
        },
        {
            sectionTitle: "Requirements and Restrictions in Advertising.",
            keywords: ["Requirement", "Restrictions", "Advertising"]
        },
        {
            sectionTitle: "Trust Accounts - Real Estate Company.",
            keywords: ["Trust", "Accounts", "Company"]
        },
    ]

    const selectedSectionKeywords = keywordOptions.find(
        (law) => law.sectionTitle === selectedSection
    )?.keywords || [];

    const keywordOptionsElements = selectedSectionKeywords.map((keyword, index) =>(
        <option key={index} value={keyword}>
            {keyword}
        </option>
    ))

    return (
        <>
        
            <h2 className="sectionText">Select a Keyword</h2>
            <Select className ="placeholderText" placeholder='Select keyword' value={selectedKeyword} onChange={(e) => setSelectedKeyword(e.target.value)}>
                {keywordOptionsElements}
            </Select>
        </>
    )
}


export default SectionKeyword2;