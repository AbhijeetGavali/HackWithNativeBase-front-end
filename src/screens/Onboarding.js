import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Button, HStack, Image, VStack } from "native-base";
import Feather from 'react-native-vector-icons/Feather'
const Onboarding = ({ navigation }) => {
  return (
    <View style={{flex:1,lexDirection:'column',justifyContent:'flex-end',backgroundColor:'#ffffff'}}>
      <HStack marginY={20} alignSelf={'center'}>
        <Feather name='upload-cloud' size={70} color={'#FF6666'}/>
        <VStack marginLeft={5}>
          <Text style={{fontSize:34,color:"#3944F7"}}>Cardz</Text>
          <Text style={{fontSize:24,color:"#FF6666"}}>Wallet for Business Cards</Text>
        </VStack>
      </HStack>
      
      <Image 
        source={require('../images/onboarding.png')}
        w={380}
        h={190}
        mb={10}
        alignSelf={'center'}
      />
      <Button mb={5} borderRadius={5} marginX={5}
        background={'#FF6666'}
      onPress={() => navigation.navigate("Login")}>
        Login
      </Button>
      <Button   mb={5} marginX={5}
        background={'#3944F7'}
      onPress={() => navigation.navigate("Register")}>Register</Button>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
