import { Select } from '@chakra-ui/react'
import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button, Heading, Text} from '@chakra-ui/react'

const KeywordResultCard = (keyword) => {
   
    [
        {
            "keyword": "Lender disclosure",
            "Section": "section test",
            "law:": "R162-2f-401a(6)(d)(i)(ii), R162-2f-401b(1)(a)(i)(ii), R162-2f-401b(1)(e)(i)(ii)",
            "sublaws": "sublaw test",
            "statute": "statute test",
            "statuteURL":"https://www.url.com"
        },
        
        {
            "keyword": "Agent non-disclosure",
            "law:": "",
            "statuteURL":""
        },
        
        {
            "keyword": "Felon",
            "law:": "",
            "statuteURL":"https://le.utah.gov/xcode/Title61/Chapter2F/61-2f-S401.html?v=C61-2f-S401_2023050320230503"
        },
        
        {
            "keyword": "Dishonest dealings",
            "law:": "",
            "statuteURL":"https://le.utah.gov/xcode/Title61/Chapter2F/61-2f-S401.html?v=C61-2f-S401_2023050320230503"
        },
        
        {
            "keyword": "False advertising",
            "law:": "",
            "statuteURL":"https://le.utah.gov/xcode/Title61/Chapter2F/61-2f-S401.html?v=C61-2f-S401_2023050320230503"
    
        }
          
    ]   



    // const [law, setLaw] = useState('');


    // useEffect(() => {
    //     console.log(law);
    // })
// const lawTest = 
//     {
//         section_number: "R162-2f-401a",
//         section_title: "Affirmative Duties Required of Licensed Individuals.",
//         section_clarifier: "An indivdual licensee shall:  ",
//         laws: 
//             {
//             "name": "(1)  uphold the following fiduciary duties in the course of representing a principal: ",
//             "sublaws": [
//               {
//                 "law_section_a": "(a)  loyalty, which obligates the agent to place the best interests of the principal above any other interest, including the agent's own;",
//                 "law_section_b": "(b)  obedience, which obligates the agent to obey any lawful instructions from the principal;",
//                 "law_section_c": "(c)  full disclosure, which obligates the agent to inform the principal of any material fact the agent learns about:(i)  the other party; or(ii)  the transaction;",
//                 "law_section_d": "(d)  confidentiality, which prohibits the agent from disclosing, without permission, any information given to the agent by the principal that would likely weaken the principal's bargaining position if it were known, but excepting any known material fact concerning:(i)  a defect in the property; or(ii)  the client's ability to perform on the contract;",
//                 "law_section_e": "(e)  reasonable care and diligence;",
//                 "law_section_f": "(f)  holding safe and accounting for any money or property entrusted to the agent; and",
//                 "law_section_g": "(g)  any additional duties created by the agency agreement;"
//               }
//             ]
//             }
//         }

    return (
    <>  
    <div>THIS IS OUR CARD </div>
 <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
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