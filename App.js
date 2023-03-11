import logo from './logo.svg';
import * as React from 'react'
import './App.css';
import { 
  ChakraProvider, 
  Input, InputGroup,
  Stack,
  InputLeftAddon,
  InputRightAddon,
  Avatar, AvatarBadge, AvatarGroup,
  Wrap, WrapItem,
  Checkbox, CheckboxGroup,
  Card, CardHeader, CardBody, CardFooter,
  Image, Text, Heading,
  Button, ButtonGroup,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
    } from '@chakra-ui/react'



function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const favorite = false;
  
  function addToFavs() {
    
  }

  
  return (
    <ChakraProvider>
        <Card maxW='sm'>
          <CardBody id = 'card1' prop={favorite}>
            <Image
              src='https://cdn.uconnectlabs.com/wp-content/uploads/sites/123/2021/08/National-Society-of-Black-Engineers-featured.png'
              alt='gtsbe'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Scholarship Sunday</Heading>
              <Text>
                Come study with your peers for a chance to win a scholarship!
              </Text>
            
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Add to Favorites
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Remove 
              </Button>
            </ButtonGroup>
            
          </CardFooter>
        </Card>
        
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Favorite Events</DrawerHeader>

          <DrawerBody>
            Add current event to Favorites?
            <Button onClick={addToFavs}>Add</Button>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
    </ChakraProvider>
  );
}

export default App;
