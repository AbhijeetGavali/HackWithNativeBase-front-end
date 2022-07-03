import { StyleSheet } from 'react-native'
import React from 'react'
import { Center, Stack,Text, HStack,VStack ,View, Box, Heading, Divider} from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const Card = () => {
  return (
    <Center borderRadius={15} h={192} w={336} bg='#242B2E'>
      <Heading color={'#CAD5E2'}>Avishkar Shinde</Heading>
      <Divider w={"70%"}/>
      <HStack>
      <Text style={{color:'#AF9D5A'}}>QA Test Engineer at </Text>
      <Text style={{color:'#AF9D5A'}}>Nvidia</Text> 
      </HStack>
      
    </Center>
  );
}
const cardFront = () => {
  return (
    <Center borderRadius={15} h={192} w={336} >
      <Heading>Avishkar Shinde</Heading>
      <Divider w={"70%"}/>
      <HStack>
      <Text>QA Test Engineer at </Text>
      <Text>Nvidia</Text> 
      </HStack>
    </Center>
  )  ;
};
const cardBack = () => {
  return(
    <Box borderRadius={15} h={192} w={336} ml={5} mt={20} bg="amber.800" >
    <Box  borderRadius={15} mx={5} my={10} justifyContent={'space-between'}>
      <Heading>Avishkar Shinde</Heading>
      <HStack>
        <Text style={{color:'#FFFF'}}>QA Test Engineer at </Text>
        <Text>Nvidia</Text>
      </HStack>
      <Divider w={"70%"}/>
      <HStack alignItems={'center'}>
        <Feather name='mail' size={20} style={{marginRight:5}}/>
        <Text >avishkar.inbox@gmail.com</Text>
      </HStack>
      <HStack alignItems={'center'}>
        <Feather name='phone' size={20} style={{marginRight:5}}/>
        <Text>8830039622</Text>
      </HStack>
      
      <HStack alignItems={'center'}>
        <EvilIcons name='location' size={20} style={{marginRight:5}}/>
        <Text>Pune</Text>
      </HStack>
    </Box>
  </Box>
  )
}
export default Card;
