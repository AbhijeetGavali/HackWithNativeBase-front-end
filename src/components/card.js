import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Center, Stack, HStack,VStack ,View, Box} from 'native-base'

const card = () => {
  return (
    <View>
    <View borderRadius={15} bgColor={'amber.500'} h={192} w={336} justifyContent={'flex-end'} >
      <Box pb={5} px={5}>
      <Text style={{fontSize:32}}>Avishkar</Text>
      <Text style={{fontSize:22}}>QA Engineer At Nvidia</Text>
      </Box>  
    </View>
    <View borderRadius={15} bgColor={'amber.500'} h={192} w={336} justifyContent={'flex-end'} mt={10} >
    <Box pb={5} px={5}>
    <Text style={{fontSize:32}}>Avishkar</Text>
    <Text style={{fontSize:22}}>QA Engineer At Nvidia</Text>
    <Text style={{fontSize:22}}>QA Engineer At Nvidia</Text>
    <Text style={{fontSize:22}}>QA Engineer At Nvidia</Text>

    </Box>  
  </View>
  </View>
  )
}
const cardFront = () => {
  return(
    <></>
  )
}
const cardBack = () => {
  return(
   <></>
  )
}
export default card

const styles = StyleSheet.create({})