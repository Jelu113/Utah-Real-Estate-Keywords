import { Select } from "@chakra-ui/react";
import { useState } from "react";
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

const KeywordResultCard = (keyword) => {
  const SampleData = [
    {
      keyword: "Lender disclosure",
      statute: ["61-2f-401(16), 61-2f-401(22)(iii)(A)"],
      statuteURL:
        "https://le.utah.gov/xcode/Title61/Chapter2F/61-2f-S401.html?v=C61-2f-S401_2023050320230503",
      citations: [
        {
          section: "R162-2f-401a",
          laws: "(6)",
          sublaws: "(d)(i)(ii)",
        },
        {
          section: "R162-2f-401b",
          laws: "(1)",
          sublaws: "(a)(i)(ii)",
        },
        {
          section: "R162-2f-401b",
          laws: "(1)",
          sublaws: "(e)(i)(ii)",
        },
      ],
    },
    {
      keyword: "False Advertising",
      statute: ["61-2f-401(12)"],
      statuteURL:
        "https://le.utah.gov/xcode/Title61/Chapter2F/61-2f-S401.html?v=C61-2f-S401_2023050320230503",
      citations: [
        {
          section: "R162-2f-401h",
          laws: "(1)",
          sublaws: "",
        },
        {
          section: "R162-2f-401h",
          laws: "(4)",
          sublaws: "",
        },
        {
          section: "",
          laws: "",
          sublaws: "",
        },
      ],
    },
  ];

  const TestRender = SampleData.find((value) => {
    return value.keyword === "Lender disclosure";
  });
  console.log(TestRender);

  const StatuteCard = (
    <Card>
      <CardHeader>
        <Heading size="md"> Statute </Heading>
      </CardHeader>
      <CardBody>
        <Text mb={4}>{TestRender.statute}</Text>
      </CardBody>
      <CardFooter>
        <a href={TestRender.statuteURL} target="_blank" rel="noreferrer">
          <Button>Statute URL</Button>
        </a>
      </CardFooter>
    </Card>
  );

  const citationCards = TestRender.citations.map((citation) => (
    <Card>
      <CardHeader>
        <Heading size="md"> Citation</Heading>
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

  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {StatuteCard}
        {citationCards}
      </SimpleGrid>
    </>
  );
};

export default KeywordResultCard;
