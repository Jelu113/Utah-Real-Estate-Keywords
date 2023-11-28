import { Select } from "@chakra-ui/react";
import { useState } from "react";
import SectionKeyword from "./SectionKeyword";
import { useQuery } from "@apollo/client";
import { GET_LAW_SECTION_TITLES } from "../utils/queries";

const Section = () => {
  // Hooks
  const [selectedSection, setSelectedSection] = useState("");
  const { loading, data } = useQuery(GET_LAW_SECTION_TITLES, {
    fetchPolicy: "no-cache",
  });

  const sectionTitles = data?.lawSections || [];
  console.log(sectionTitles);

  //   const section = [
  //     "Affirmative Duties Required of Licensed Individuals.",
  //     "Prohibited Conduct As Applicable to Licensed Individuals",
  //     "Requirements and Restrictions in Advertising.",
  //     "Trust Accounts - Real Estate Company.",
  //   ];

  const sectionOptions = sectionTitles.map((lawSection) => (
    <option key={lawSection._id} value={lawSection.section_title}>
      {lawSection.section_number}. {lawSection.section_title}
    </option>
  ));

  const handleSectionChange = (e) => {
    const selectedVal = e.target.key;
    setSelectedSection(selectedVal);
  };

  return (
    <>
    <div className="sections" >
        <div classNambe="selectBoxContainer">
            
        <div className="selectBox">
      <h2>Select a Section</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Select placeholder="Select section" onChange={handleSectionChange}>
          {sectionOptions}
        </Select>
      )}
      <SectionKeyword selectedSection={selectedSection} />
      </div>
      </div>
      </div>
    </>
  );
};

export default Section;
