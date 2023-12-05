import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Button,
  Text,
  Flex
} from "@chakra-ui/react";
import { useState } from "react";
//import Header from './'
import KeywordResultCard from "../components/KeywordResultCard";

import SectionInfo from "../components/SectionInfo";

const Keyword = () => {
  return (
    <>
      <div>
        <Flex>
        <KeywordResultCard />
        <SectionInfo />
        </Flex>
     
      </div>
      
    </>
  );
};

export default Keyword;
