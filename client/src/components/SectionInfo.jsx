import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Box,
  Text,
  StackDivider,
} from "@chakra-ui/react";

import { useQuery } from "@apollo/client";
import { GET_SINGLE_SECTION } from "../utils/queries";
import { useSectionKeywordContext } from "../utils/SectionKeywordContext";

const SectionInfo = () => {
  const { section } = useSectionKeywordContext();
  console.log("section: " + section);

  // useQuery
  const { loading, data } = useQuery(GET_SINGLE_SECTION, {
    variables: {
      sectionNumber: section,
    },
  });

  const lawData = data?.singleSection || {};
  console.log(lawData);

  // trims out the null values from lawsections
  const lawSections = lawData.law_sections
    ? lawData.law_sections.map((lawSection) => {
        const nonNullValues = Object.entries(lawSection).reduce(
          (acc, [key, value]) => {
            if (value !== null) {
              acc[key] = value;
            }
            return acc;
          },
          {}
        );
        return nonNullValues;
      })
    : [];
  console.log(lawSections);

  // with lawsections make an box per
  const lawSublawElements = lawSections
    ? lawSections.map((law, index) => (
        <Box key={index}>
          <Heading size="sm">{law.law}</Heading>
          {Object.keys(law).map((key) => {
            if (key.startsWith("law_section")) {
              return <Text key={key}>{law[key]}</Text>;
            }
            return null;
          })}
        </Box>
      ))
    : [];

  console.log(lawSublawElements);

  return (
    <><div>
      <Card className="section-info-card">
        <CardHeader>
          <Heading size="lg">
            {lawData.section_number} - {lawData.section_title}
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="md" textTransform="uppercase">
                
              </Heading>
              <Text pt="2" fontSize="sm">
                {lawSublawElements}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      </div>
    </>
  );
};

export default SectionInfo;
