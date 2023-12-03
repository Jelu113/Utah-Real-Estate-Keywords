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

//import { useQuery } from "@apollo/client";
//import { GET_LAW_SECTION_TITLES } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { ADD_KEYWORD } from "../utils/mutations";
import Auth from "../utils/auth";
//import { useState } from "react";

const CreateKeyword = () => {
  const [results, setResults] = useState([]);

  const [addKeyword, { loading, error }] = useMutation(ADD_KEYWORD);

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            keyword: "",
            statute: [""],
            statuteURL: "",
            section: "",
            laws: "",
            sublaws: "",
          }}
          onSubmit={async (values) => {
            const token = Auth.loggedIn() ? Auth.getToken() : null;

            if (!token) {
              return false;
            }

            try {
              await addKeyword({
                variables: { ...values },
              });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ handleSubmit, errors, touched }) => (
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

                <FormControl
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
                </FormControl>

                <SearchBar setResults={setResults} />
                <SearchResultsList results={results} />

                <FormControl isInvalid={!!errors.section && touched.section}>
                  <FormLabel htmlFor="section">Section</FormLabel>
                  <Field
                    as={Input}
                    id="section"
                    name="section"
                    type="text"
                    variant="filled"
                    validate={(value) => {
                      if (!value) {
                        return "Please select a section";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.section}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.laws && touched.laws}>
                  <FormLabel htmlFor="laws">Laws</FormLabel>
                  <Field
                    as={Input}
                    id="law"
                    name="law"
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
                  <FormLabel htmlFor="sublaws">Sublaws</FormLabel>
                  <Field
                    as={Input}
                    id="sublaw"
                    name="sublaw"
                    type="text"
                    variant="filled"
                    validate={(value) => {
                      if (!value) {
                        return "Please select a sublaw";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.keyword}</FormErrorMessage>
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
