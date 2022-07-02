import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { Button } from 'native-base'

const Onboarding = ({ navigation }) => {
  return (
    <View >
      <Button borderRadius={5}
         onPress={() => navigation.navigate('Login')}
      >Login</Button>
      <Button
         onPress={() => navigation.navigate('Register')}
      >Register</Button>
    </View>
  )
}


export default Onboarding

const styles = StyleSheet.create({})