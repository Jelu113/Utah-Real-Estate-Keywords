import { Formik, Field } from "formik";
import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import SearchResultsList from "../components/SearchResultsList";

import SearchBar from "../components/SearchBar";

import { useQuery } from "@apollo/client";
import { GET_LAW_SECTION_TITLES } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { ADD_KEYWORD } from "../utils/mutations";
import Auth from "../utils/auth";
import SectionDropDown from "./SectionDropDown";

const CreateKeyword = () => {
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [addKeyword] = useMutation(ADD_KEYWORD);

  const [selectedNumber, setSelectedNumber] = useState("");

  const { loading, data } = useQuery(GET_LAW_SECTION_TITLES);

  const sectionTitles = data?.section || [];

  const sectionNumbers = sectionTitles.map((section) => (
    <option key={section.id} value={section.section_number}>
      {section.section_number} - {section.section_title}
    </option>
  ));

  const handleSectionChange = (e) => {
    const selectedVal = e.target.value;
    setSelectedNumber(selectedVal);
    console.log(selectedVal);
  };

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            keyword: "",
            statute: "",
            statuteURL:
              "https://le.utah.gov/xcode/Title61/Chapter2F/61-2f-S401.html?v=C61-2f-S401_2023050320230503",
            citations: [
              {
                section: "",
                laws: "",
                sublaws: "",
              },
            ],
          }}
          onSubmit={async (values) => {
            const token = Auth.loggedIn() ? Auth.getToken() : null;

            if (!token) {
              return false;
            }

            try {
              await addKeyword({
                variables: {
                  input: { ...values },
                },
              });
              console.log(values);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ handleSubmit, handleChange, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.keyword && touched.keyword}>
                  <FormLabel htmlFor="keyword">Keyword</FormLabel>
                  <Field
                    as={Input}
                    id="keyword"
                    name="keyword"
                    type="text"
                    variant="filled"
                    validate={(value) => {
                      if (!value) {
                        return "Please enter a keyword";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.keyword}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.statute && touched.statute}>
                  <FormLabel htmlFor="statute">Statute</FormLabel>
                  <Field
                    as={Input}
                    id="statute"
                    name="statute"
                    type="text"
                    variant="filled"
                    validate={(value) => {
                      if (!value) {
                        return "Please enter a statute";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.statute}</FormErrorMessage>
                </FormControl>

                {/* <FormControl
                  isInvalid={!!errors.statuteURL && touched.statuteURL}
                >
                  <FormLabel htmlFor="statuteURL">Statute URL</FormLabel>
                  <Field
                    as={Input}
                    id="statuteURL"
                    name="statuteURL"
                    type="text"
                    variant="filled"
                    validate={(value) => {
                      if (!value) {
                        return "Please enter a statute link";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.statuteURL}</FormErrorMessage>
                </FormControl> */}

                <FormControl>
                  <FormLabel htmlFor="section">Select a section</FormLabel>
                  <Field
                    as={Select}
                    id="section"
                    name="citation[0].section"
                    type="text"
                    placeholder="Select section"
                    onChange={handleChange("citations[0].section")}
                  >
                    {sectionNumbers}
                  </Field>
                </FormControl>

                {/* <SearchBar setResults={setResults} />
                <SearchResultsList results={results} /> */}

                <FormControl isInvalid={!!errors.laws && touched.laws}>
                  <FormLabel htmlFor="laws">Law</FormLabel>
                  <Field
                    as={Input}
                    id="laws"
                    name="citations[0].laws"
                    type="text"
                    variant="filled"
                    validate={(value) => {
                      if (!value) {
                        return "Please select a law";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.laws}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.sublaws && touched.sublaws}>
                  <FormLabel htmlFor="sublaws">Sublaw</FormLabel>
                  <Field
                    as={Input}
                    id="sublaws"
                    name="citations[0].sublaws"
                    type="text"
                    variant="filled"
                    validate={(value) => {
                      if (!value) {
                        return "Please select a sublaw";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.sublaws}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  color="white"
                  bgColor="#3182CE"
                  width="full"
                >
                  Add Keyword
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default CreateKeyword;
