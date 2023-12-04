//Using Formik for the form layout and validation
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  // Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";


//Add login form next to the dropdown menu  maybe?

//A hook to use mutations we created
import { useMutation } from "@apollo/client";

//Mutation that has login functionality
import { LOGIN_USER } from "../utils/mutations";

//Auth has our token creation/validation functions
import Auth from "../utils/auth";

const Login = () => {
  const [loginUser] = useMutation(LOGIN_USER);

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="gray" p={6} rounded="md" w={64} shadow="lg">
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false,
          }}

          //Grabs values from the form inputs and runs the mutation plus the authentication setup
          onSubmit={async (values) => {
            try {
              const { data } = await loginUser({
                variables: { ...values }, //the initialValues object
              });
              console.log({ data });
              Auth.login(data.login.token);
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      if (!value) {
                        return "Password is required";
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                {/* <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  color="#333"
                >
                  Remember me?
                </Field> */}
                <Button
                  type="submit"
                  color="#333"
                  bgColor="rgb(199,207,207)"
                  width="full"
                >
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default Login;
