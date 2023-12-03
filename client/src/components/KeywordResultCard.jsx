import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useSectionKeywordContext } from "../utils/SectionKeywordContext";
import { useQuery } from "@apollo/client";
import { GET_ALL_KEYWORDS } from "../utils/queries";
import { useEffect } from "react";

const KeywordResultCard = () => {
  const { keyword } = useSectionKeywordContext();
  const { loading, data } = useQuery(GET_ALL_KEYWORDS, {
    fetchPolicy: "no-cache",
  });

  console.log("provider: " + keyword);

  const keywordData = data?.keyword || [];
  console.log(keywordData);

  const keywordFile = keywordData.filter((keywordFileSection) => {
    return keywordFileSection.keyword === keyword;
  });
  console.log(keywordFile);

  // const statuteCard = (
  //   <Card>
  //     <CardHeader>
  //       <Heading size="md"> Statute </Heading>
  //     </CardHeader>
  //     <CardBody>
  //       <Text mb={4}>{keywordFile[0].statute}</Text>
  //     </CardBody>
  //     <CardFooter>
  //       <a href={keywordFile[0].statuteURL} target="_blank" rel="noreferrer">
  //         <Button>Statute URL</Button>
  //       </a>
  //     </CardFooter>
  //   </Card>
  // );

  // const citationCards = keywordFile[0].citations.map((citation) => (
  //   <Card>
  //     <CardHeader>
  //       <Heading size="md">Citation</Heading>
  //     </CardHeader>
  //     <CardBody>
  //       <Text mb={4}>
  //         {citation.section}
  //         {citation.laws}
  //         {citation.sublaws}
  //       </Text>
  //     </CardBody>
  //     <CardFooter>
  //       <Button>link to sub law text</Button>
  //     </CardFooter>
  //   </Card>
  // ));

  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {/* {statuteCard}
        {citationCards} */}
      </SimpleGrid>
    </>
  );
};

export default KeywordResultCard;
