
import { useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_LAW_SECTION_TITLES } from "../utils/queries";

const SectionDropDown = () => {
  const [selectedSection, setSelectedSection] = useState("");

  const { loading, data } = useQuery(GET_LAW_SECTION_TITLES);

  const sectionTitles = data?.section || [];

  const sectionNumbers = sectionTitles.map((section) => (
    <option
      key={section.id}
      value={section.section_number + "." + section.section_title}
    >
      {section.section_number} - {section.section_title}
    </option>
  ));

  const handleSectionChange = (e) => {
    const selectedVal = e.target.value;
    setSelectedSection(selectedVal);
  };
};

export default SectionDropDown;
