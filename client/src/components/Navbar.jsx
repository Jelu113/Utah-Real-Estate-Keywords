import { Link } from "react-router-dom";
import {
  // Box,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  // Button,
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
              <Tab onClick={Auth.logout}>Logout</Tab>
            </>
          ) : (
            <>
              <Tab as={Link} to="/create-user">
                Create User
              </Tab>
              <Tab as={Link} to="/login">
                Login
              </Tab>
            </>
          )}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="rgb(104, 103, 103)"
          borderRadius="1px"
        />
      </Tabs>
    </>
  );
};

export default Navbar;
