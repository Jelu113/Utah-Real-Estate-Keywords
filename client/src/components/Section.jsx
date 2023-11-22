import { Select } from "@chakra-ui/react";
import { useState } from "react";
//import sectionKeyword from "./sectionKeyword";
import { useQuery } from "@apollo/client";
import { GET_LAW_SECTION_TITLES } from "../utils/queries";

const Section = () => {
  const [section, setSection] = useState("");
  //const { loading, error, data } = useQuery(GET_LAW_SECTION_TITLES);
  //const sectionData = data?.lawSections || {};
  //console.log(data);
  // useeffect every state change, pass in the section state to figure which keywords to render
  //   useEffect(() => {
  //     //keyword component based on section state
  //     section;
  //   });

  //   if (loading) {
  //     return <h2>LOADING...</h2>;
  //   }

  return (
    <>
      <Select
        value={section}
        placeholder="Select section"
        onChange={(e) => setSection(e.target.value)}
      >
        <option value="yay">section 1</option>
        <option value="option2">section 2</option>
        <option value="option3">section 3</option>
      </Select>
    </>
  );
};

export default Section;
