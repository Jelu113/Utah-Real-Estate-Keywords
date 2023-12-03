import { Select } from '@chakra-ui/react'
import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button, Heading, Text} from '@chakra-ui/react'

const KeywordResultCard = (keyword) => {
   
  // {
  //   "keyword": "Lender disclosure",
  //   "statute": ["61-2f-401(16), 61-2f-401(22)(iii)(A)"],
  //   "statuteURL": "https://le.utah.gov/xcode/Title61/Chapter2F/61-2f-S401.html?v=C61-2f-S401_2023050320230503",
  //   "citations": [
  //     {
  //       "section": "R162-2f-401a",
  //       "laws": "(6)",
  //       "sublaws": "(d)(i)(ii)"
  //     },
  //     {
  //       "section": "R162-2f-401b",
  //       "laws": "(1)",
  //       "sublaws": "(a)(i)(ii)"
  //     },
  //     {
  //       "section": "R162-2f-401b",
  //       "laws": "(1)",
  //       "sublaws": "(e)(i)(ii)"
  //     }

  //   ]

  // },



    return (
    <>  
 <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'> Section</Heading>
    </CardHeader>
    <CardBody>
      <Text mb={4}>Law</Text>
      <Text mb={4}>Sublaw</Text>
      <Text mb={4}>Statute</Text>
    </CardBody>
    <CardFooter>
      <Button>Statute URL</Button>
    </CardFooter>
  </Card>
</SimpleGrid> 
</>
 );
    }


    export default KeywordResultCard; 