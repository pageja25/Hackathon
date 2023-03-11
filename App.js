import * as React from 'react'


// 1. import `ChakraProvider` component
import { ChakraProvider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
  Box,
  Badge, 
  Stack,
  Card, CardHeader, CardBody, CardFooter,
  Text, Image, Button,
  Flex, Avatar, Heading, IconButton, Divider, ButtonGroup} from '@chakra-ui/react'
import makeCard from './cards'



export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    makeCard()
  )
}