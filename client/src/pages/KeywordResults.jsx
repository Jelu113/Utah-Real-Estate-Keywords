import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
//import Header from './'
import KeywordResultCard from "../components/KeywordResultCard";

import SectionInfo from "../components/SectionInfo";

const Keyword = () => {
  return (
    <>
      <KeywordResultCard />
      <SectionInfo />
    </>
  );
};

export default Keyword;
