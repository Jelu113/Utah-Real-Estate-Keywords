import { useFormik } from "formik";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";


import { useMutation } from "@apollo/client";
import { ADD_KEYWORD } from "../utils/mutations";
import Auth from "../utils/auth";

const createKeyword = () => {
  const formik = useFormik({
    initialValues: {
      keyword: "",
      citation: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            Keyword: "",
            Citation: "",
           
          }}
          onSubmit={(values) => { //change in future to connect to Database 
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="keyword">Keyword</FormLabel>
                  <Field
                    as={Input}
                    id="keyword"
                    name="keyword"
                    type="keyword"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Citation</FormLabel>
                  <Field
                    as={Input}
                    id="citation"
                    name="citation"
                    type="citation"
                    variant="filled"
                    // validate={(value) => {
                     
                    // }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                
                <Button type="submit" colorScheme="green" width="full">
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

export default createKeyword;
