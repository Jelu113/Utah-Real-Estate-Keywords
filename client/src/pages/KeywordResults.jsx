import {

  Flex
} from "@chakra-ui/react";

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
