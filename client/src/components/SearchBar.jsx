import { useState } from "react";

import { FaSearch } from "react-icons/fa";

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { useQuery } from "@apollo/client";
import { GET_LAW_SECTION_TITLES } from "../utils/queries";

const SearchBar = ({ setResults }) => {
  const [searchInput, setSearchInput] = useState("");

  const { loading, data } = useQuery(GET_LAW_SECTION_TITLES);

  const fetchData = async (value) => {
    try {
      const sectionTitles = data?.section || [];
      console.log(sectionTitles);

      const results = await sectionTitles.filter((section) => {
        return (
          value &&
          section &&
          section.section_number &&
          section.section_number.toLowerCase().includes(value)
        );
      });
      setResults(results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (value) => {
    setSearchInput(value);
    fetchData(value);
  };

  return (
    <FormControl>
      <FormLabel htmlFor="section"></FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch />
        </InputLeftElement>
        <Input
          variant="filled"
          id="search-section"
          name="search-section"
          type="text"
          placeholder="Search a section #"
          onChange={(e) => handleChange(e.target.value)}
          value={searchInput}
        />
      </InputGroup>
    </FormControl>
  );
  console.log(searchInput);
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
