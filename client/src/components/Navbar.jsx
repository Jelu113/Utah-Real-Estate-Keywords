import { Link } from "react-router-dom";
import {
  // Box,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  Button,
} from "@chakra-ui/react";

import Auth from "../utils/auth";

const Navbar = () => {
  return (
    <>
      <Tabs position="relative" variant="unstyled">
        <TabList mt="5px">
          <Tab as={Link} to="/">
            Home
          </Tab>
          {Auth.loggedIn() ? (
            <>
              <Tab as={Link} to="/create-keyword">
                Create a Keyword
              </Tab>
              <Button color="white" bgColor="#3182CE" onClick={Auth.logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Tab as={Link} to="/create-user">
                Create User
              </Tab>
              <Button color="white" bgColor="#3182CE" as={Link} to="/login">
                Login
              </Button>
            </>
          )}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
      </Tabs>
      <i className="fa-solid fa-gavel fa-fade fa-2xl"></i>
    </>
  );
};

export default Navbar;
