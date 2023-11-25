import { useState } from "react";
import { Link } from "react-router-dom";
import {
  // Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab as={Link} to="/">
            Home
          </Tab>
          <Tab as={Link} to="/create-user">
            Create User
          </Tab>
          <Tab as={Link} to="/login">
            Login
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <p>Home</p>
          </TabPanel>
          <TabPanel>
            <p>Create User</p>
          </TabPanel>
          <TabPanel>
            <p>Login</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <i className="fa-solid fa-gavel fa-fade fa-2xl"></i>
    </>
  );
};

export default Navbar;
