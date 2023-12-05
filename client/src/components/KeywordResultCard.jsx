import {
  Box,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";
import { useSectionKeywordContext } from "../utils/SectionKeywordContext";
import { useQuery } from "@apollo/client";
import { GET_ALL_KEYWORDS } from "../utils/queries";

const KeywordResultCard = () => {
  const { keyword, changeSection } = useSectionKeywordContext();
  const { loading, data } = useQuery(GET_ALL_KEYWORDS);

  console.log("provider: " + keyword);

  const keywordData = data?.keyword || [];
  console.log(keywordData);

  const keywordFile = keywordData.find((keywordFileSection) => {
    return keywordFileSection.keyword === keyword;
  });
  console.log(keywordFile);

  const keywordTitle = keywordFile && (
    <Center mb={4} width="85%">
      <Heading size="2xl">{keywordFile.keyword}</Heading>
    </Center>
  );

  const cardStyle = {
    boxShadow: "black", // Set border color
  };

  const statuteCard = keywordFile && (
    <Card
      boxShadow="xl"
      mt={4}
      mb={7}
      width="100%"
      ml={{ base: 0, md: 4 }}
      style={cardStyle}
    >
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
      <Card
        boxShadow="xl"
        key={citation.id}
        mb={7}
        width="100%"
        ml={{ base: 0, md: 4 }}
        style={cardStyle}
      >
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
          <Button onClick={() => changeSection(citation.section)}>
            Go to Section
          </Button>
        </CardFooter>
      </Card>
    ));

  if (loading) {
    return <h2> loading </h2>;
  }

  return (
    <div>
      <Flex className="card-column"
        direction={{ base: "column", md: "column" }}
        align="center"
        justify="space-between"
      >
        <Box className="keyword-padding" flex="1">
          {keywordTitle}
        </Box>
        <Box flex="1" mr={{ base: 0, md: 4 }}>
          {statuteCard}
          {citationCards}
        </Box>
      </Flex>
    </div>
  );
};

export default KeywordResultCard;
