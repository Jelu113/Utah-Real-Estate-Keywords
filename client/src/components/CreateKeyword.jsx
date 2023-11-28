import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { useQuery } from "@apollo/client";
import { GET_LAW_SECTION_TITLES } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { ADD_KEYWORD } from "../utils/mutations";
import Auth from "../utils/auth";

const SearchBar = () => {
  const { loading, data } = useQuery(GET_LAW_SECTION_TITLES);

  const sectionTitles = data?.lawSections || {};

  //Need to edit this
  const sectionOptions = sectionTitles.map((lawSection) => (
    <option key={lawSection.id} value={sectionTitles}>
      {lawSection.section_number}
    </option>
  ));

  console.log(sectionOptions);

  return (
    <FormControl>
      <FormLabel htmlFor="section-heading"></FormLabel>
    </FormControl>
  );
};

const CreateKeyword = () => {
  const [addKeyword] = useMutation(ADD_KEYWORD);

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            keyword: "",
            citation: "",
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
                <FormControl isInvalid={!!errors.citation && touched.citation}>
                  <FormLabel htmlFor="citation">Citation</FormLabel>
                  <Field
                    as={Input}
                    id="citation"
                    name="citation"
                    type="text"
                    variant="filled"
                    validate={(value) => {
                      if (!value) {
                        return "Please enter a citation";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.citation}</FormErrorMessage>
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
