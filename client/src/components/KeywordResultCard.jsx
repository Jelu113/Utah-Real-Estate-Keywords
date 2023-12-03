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
  const { loading, data } = useQuery(GET_ALL_KEYWORDS);

  console.log("provider: " + keyword);

  const keywordData = data?.keyword || [];
  console.log(keywordData);

  const keywordFile = keywordData.find((keywordFileSection) => {
    return keywordFileSection.keyword === keyword;
  });
  console.log(keywordFile);

  const statuteCard = keywordFile && (
    <Card>
      <CardHeader>
        <Heading size="md"> Statute </Heading>
      </CardHeader>
      <CardBody>
        <Text mb={4}>{keywordFile.statute}</Text>
      </CardBody>
      <CardFooter>
        <a href={keywordFile.statuteURL} target="_blank" rel="noreferrer">
          <Button>Statute URL</Button>
        </a>
      </CardFooter>
    </Card>
  );

  const citationCards =
    keywordFile &&
    keywordFile.citations.map((citation) => (
      <Card>
        <CardHeader>
          <Heading size="md">Citation</Heading>
        </CardHeader>
        <CardBody>
          <Text mb={4}>
            {citation.section}
            {citation.laws}
            {citation.sublaws}
          </Text>
        </CardBody>
        <CardFooter>
          <Button>link to sub law text</Button>
        </CardFooter>
      </Card>
    ));

  if (loading) {
    return <h2> loading </h2>;
  }

  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {statuteCard}
        {citationCards}
      </SimpleGrid>
    </>
  );
};

export default KeywordResultCard;
