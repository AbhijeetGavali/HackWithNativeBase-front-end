import { StyleSheet, Text ,SafeAreaView} from 'react-native'
import React from 'react'
import { Center, Stack, HStack,VStack ,View} from 'native-base'
import Feather from 'react-native-vector-icons/Feather'

const Register = () => {
  return (
      <View flex={1} bgColor="#5E6FD3">
      <View flex={1} >
      <HStack alignSelf={'center'} marginX={15} flex={1}
        mt={40} 
        >
          <Feather name='upload-cloud' size={60} color={'#000000'}/>
          <VStack marginLeft={2}>
            <Text style={{fontSize:50,color:"#ffffff",fontWeight:'900'}}>Cardz</Text>
          </VStack>
        </HStack>
      </View>
      <View flex={2} bgColor="#fff" borderTopRightRadius={50}>
        
      </View>
      </View>
  )
}

export default Register

const styles = StyleSheet.create({})