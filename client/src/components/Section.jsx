import { Select, Button } from "@chakra-ui/react";
import { useState } from "react";
import SectionKeyword2 from "./SectionKeyword2";
import { useQuery } from "@apollo/client";
import { GET_LAW_SECTION_TITLES } from "../utils/queries";
import { useSectionKeywordContext } from "../utils/SectionKeywordContext";

const Section = () => {
  // Hooks
  const [selectedSection, setSelectedSection] = useState("");
  const { loading, data } = useQuery(GET_LAW_SECTION_TITLES, {
    fetchPolicy: "no-cache",
  });
  const { changeKeyword, changeSection } = useSectionKeywordContext();

  const sectionTitles = data?.section || [];
  // console.log(sectionTitles);
  const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  };

  const sectionOptions = sectionTitles.map((section) => (
    <option key={section._id} value={section.section_number}>
      {section.section_number} - {section.section_title}
    </option>
  ));

  const handleSectionChange = (e) => {
    const selectedVal = e.target.value;
    setSelectedSection(selectedVal);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (event.target[0].value && event.target[1].value) {
      await changeSection(event.target[0].value);
      await changeKeyword(event.target[1].value);
      window.location.href = "/keyword-result";
    }
  };

  return (
    <>
      <div className="sections">
       <h1 align ="center"> Keyword search</h1>   
         <form onSubmit={handleSubmit} >
              <h2>Select a Section</h2>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <Select 
                  color="color: #333333;"
                  borderColor="grey"
                  placeholder="Select section"
                  onChange={handleSectionChange}>
                  {sectionOptions}
                </Select>
                
              )}
              <SectionKeyword2 selectedSection={selectedSection} />
              <Button className="submit" type="submit" value="submit">
                {" "}
                Submit{" "}
              </Button>
            </form>
          
        
      </div>
      
    </>
  );
};

export default Section;
