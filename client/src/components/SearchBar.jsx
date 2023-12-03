import { useState } from "react";

import { Field } from "formik";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

import { useQuery } from "@apollo/client";
import { GET_LAW_SECTION_TITLES } from "../utils/queries";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const { loading, data } = useQuery(GET_LAW_SECTION_TITLES);

  const sectionTitles = data?.section || {};
  console.log(sectionTitles);
  //Need to edit this
    const sectionNumber = sectionTitles.map((section, index) => {
        <div>
          <tr>
            <td>{section.section_number}</td>
          </tr>
        </div>;
      })
    
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    sectionTitles.filter((section) => {
      return section.section_number.match(searchInput);
    });
  }

  return (
    <FormControl>
      <FormLabel htmlFor="section"></FormLabel>
      <Field
        as={Input}
        id="search-section"
        name="search-section"
        type="text"
        placeholder="Search a section number"
        onChange={handleChange}
        value={searchInput}
      />
      <table>
        <tr>
          <th>Section Number</th>
        </tr>
        {sectionNumber}
      </table>
    </FormControl>
  );

  // const sectionOptions = sectionTitles.map((lawSection) => (
  //   <option key={lawSection.id} value={lawSection.section_number}>
  //     {lawSection.section_number}
  //   </option>
  //));

  //console.log(sectionOptions);

  // return (
  //   <FormControl>
  //     <FormLabel htmlFor="section"></FormLabel>
  //     <Field as={Select}>{sectionOptions}</Field>
  //   </FormControl>
  // );
};

export default SearchBar;
