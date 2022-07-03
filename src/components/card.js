import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Center, Stack, HStack,VStack ,View, Box, Heading, Divider} from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const Card = () => {
  return (
  
    <View borderRadius={15} bgColor={'#ffff'} h={192} w={336} ml={5} mt={20} >
      <Box flex={1} borderRadius={15} mx={5} my={10} justifyContent={'space-between'}>
        <Heading>Avishkar Shinde</Heading>
        <HStack>
          <Text>QA Test Engineer at </Text>
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
    </View>
  );
};
const cardFront = () => {
  return <></>;
};
const cardBack = () => {
  return(
   <></>
  )
}
export default Card

const styles = StyleSheet.create({});
