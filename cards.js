import * as React from 'react'


// 1. import `ChakraProvider` component
import { ChakraProvider,
  Badge, 
  Stack,
  Card, CardHeader, CardBody, CardFooter,
  Text, Image, Button,
  Flex, Avatar, Heading, IconButton, Divider, ButtonGroup, SimpleGrid, Container} from '@chakra-ui/react'
  const event =  [
    {title: 'Sociasize with GTSBE & GTCaribSA!',
    description: "Join CaribSA & GTSBE for a fun soca workout to finish off International Week! Learn some moves! See you there! \n Friday, March 10th 6:00-7:00pm \n CRC Studio A \n Dress: Exercise Wear",}
  ];
  export default function makeCard() {
    
    return (
        <ChakraProvider>
            <SimpleGrid columns={2} spacing={4} >
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                            {event[0].title}
                            <Stack direction='row'>
                            <Badge variant='solid' colorScheme='orange'>GTCaribSA</Badge>
                            <Badge variant='solid' colorScheme='green'>GTSBE</Badge></Stack>
                        </Heading>
      
      <Text>
        {event[0].description}
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='yellow'>
        Save
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                        Women's History Scattergories!
                            <Stack direction='row'>
                            <Badge variant='solid' colorScheme='green'>GTSBE</Badge></Stack>
                        </Heading>
      
      <Text>
      Celebrate women's history month with GTSBE! Come out to our GBM
      to play a fun game of Scattergories themed around Women's History!
      <br/>
      Home Park Room, Exhibition Hall
      <br/>
      Thursday, March 9th
      11am-12pm
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='yellow'>
        Save
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                        Chillout with AASU featuring The Boondocks
                            <Stack direction='row'>
                            <Badge variant='solid' colorScheme='yellow'>AASU</Badge></Stack>
                        </Heading>
      
      <Text>
      Our next GBM will be real chillll with midterms and other things going on
      this week. Come out and watch the Boondocks this Tuesday for a break from
      all this studying!
      <br/>
      IC 211
      <br/>
      Tuesday, March 7th
      11am-12pm 9th
      11am-12pm
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='yellow'>
        Save
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
            </SimpleGrid>
    </ChakraProvider>
    )
  }