import { useState, useEffect } from 'react';
import { 
    Card, 
    CardBody, 
    CardFooter,
    Stack,
    Heading,
    Text,
    Divider,
    ButtonGroup,
    Button
} from '@chakra-ui/react'

const LawCard = (keyword) => {
    const [law, setLaw] = useState('');


    useEffect(() => {
        console.log(law);
    })

    return (
        <Card maxW='sm'>
            <CardBody>
                <Stack spacing='3'>
                <Heading size='md'>Section Heading</Heading>
                <Text>
                    Citation
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Copy
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Link
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default LawCard;