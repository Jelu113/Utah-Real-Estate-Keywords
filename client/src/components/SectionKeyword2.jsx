import { Select } from '@chakra-ui/react'
import { useState } from 'react'
import { useQuery } from "@apollo/client";
import { GET_KEYWORDS } from "../utils/queries";

const SectionKeyword2 = () => {
    //Hooks
    const [selectedKeyword, setSelectedKeyword] = useState("");
    const { loading, data } = useQuery(GET_KEYWORDS, {
        fetchPolicy: "no-cache",
    });

const keywordList = data?.keyword || [];
console.log(keywordList);

const keywordOptions = keywordList.map((keyword) => (
   <option key={keyword._id} value={keyword.keyword}>
     {keyword.keyword}
    </option>
));

const handleSectionChange = (e) => {
    const selectedVal = e.target.value;
    setSelectedKeyword(selectedVal);
};

return (
    <>
      <h2 className="sectionText">Select a Keyword</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Select
          className="placeholderText"
          placeholder="Select keyword"
          onChange={handleSectionChange}
        >
          {keywordOptions}
        </Select>
      )}
    </>
  );
};

export default SectionKeyword2;

//<selectedKeyword = {selectedKeyword} /> 

// const SectionKeyword2 = ({selectedSection}) => {
//     const [selectedKeyword, setSelectedKeyword] = useState('');
//     console.log(selectedSection);


//     const keywordOptions = [
//         {
//             sectionTitle: "Affirmative Duties Required of Licensed Individuals.",
//             keywords: ["Affirmative", "Duties", "License"]
//         },
//         {
//             sectionTitle: "Prohibited Conduct As Applicable to Licensed Individuals",
//             keywords: ["Prohibit", "Conduct", "Applicable"]
//         },
//         {
//             sectionTitle: "Requirements and Restrictions in Advertising.",
//             keywords: ["Requirement", "Restrictions", "Advertising"]
//         },
//         {
//             sectionTitle: "Trust Accounts - Real Estate Company.",
//             keywords: ["Trust", "Accounts", "Company"]
//         },
//     ]

//     const selectedSectionKeywords = keywordOptions.find(
//         (law) => law.sectionTitle === selectedSection
//     )?.keywords || [];

//     const keywordOptionsElements = selectedSectionKeywords.map((keyword, index) =>(
//         <option key={index} value={keyword}>
//             {keyword}
//         </option>
//     ))