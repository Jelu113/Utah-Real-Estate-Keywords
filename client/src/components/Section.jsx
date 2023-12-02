import { Select, Button } from "@chakra-ui/react";
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
    <option
      key={section._id}
      value={section.section_number + "." + section.section_title}
    >
      {section.section_number} - {section.section_title}
    </option>
  ));

  const handleSectionChange = (e) => {
    const selectedVal = e.target.value;
    setSelectedSection(selectedVal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
  };

  return (
    <>
      <div className="sections">
        <div className="selectBoxContainer">
          <h1> Keyword search</h1>
          <br />
          <div className="selectBox">
            <form onSubmit={handleSubmit}>
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
              <Button type="submit" value="submit">
                {" "}
                Submit{" "}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
