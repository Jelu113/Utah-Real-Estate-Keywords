// import { useState } from 'react';
import {
    // Box,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    TabIndicator
} from '@chakra-ui/react'

const Navbar = () => {
    return(
    <>
        <Tabs position="relative" variant="unstyled">
        <TabList>
        <Tab>Home</Tab>
        <Tab>Create User</Tab>
        <Tab>Login</Tab>
        </TabList>
        <TabIndicator
        mt="-1.5px"
        height="2px"
        bg="blue.500"
        borderRadius="1px"
        />
        <TabPanels>
        <TabPanel>
            <p>one!</p>
        </TabPanel>
        <TabPanel>
            <p>two!</p>
        </TabPanel>
        <TabPanel>
            <p>three!</p>
        </TabPanel>
        </TabPanels>
        </Tabs>
        <i class="fa-solid fa-gavel fa-fade fa-2xl"></i>
    </>
    
    )
}

export default Navbar;
