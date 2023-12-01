import { Select } from "@chakra-ui/react";
import { useState } from "react";
import SectionKeyword2 from "./SectionKeyword2";
import { useQuery } from "@apollo/client";
import { GET_LAW_SECTION_TITLES } from "../utils/queries";

const Section = () => {
  // Hooks
  const [selectedSection, setSelectedSection] = useState("");
  const { loading, data } = useQuery(GET_LAW_SECTION_TITLES, {
    fetchPolicy: "no-cache",
  });

  const sectionTitles = data?.section || [];
  console.log(sectionTitles);

  const sectionOptions = sectionTitles.map((section) => (
    <option key={section._id} value={section.section_title}>
      {section.section_number} - {section.section_title}
    </option>
  ));

  const handleSectionChange = (e) => {
    const selectedVal = e.target.key;
    setSelectedSection(selectedVal);
  };

  return (
    <>
      <div className="sections">
        <div className="selectBoxContainer">
          <h1> Keyword search</h1>
          <br />
          <div className="selectBox">
            <h2 className="sectionText">Select a Section</h2>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Select
                className="placeholderText"
                placeholder="Select section"
                onChange={handleSectionChange}
              >
                {sectionOptions}
              </Select>
            )}
            <SectionKeyword2 selectedSection={selectedSection} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
