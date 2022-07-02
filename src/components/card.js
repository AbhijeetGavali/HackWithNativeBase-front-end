import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const card = () => {
  return (
    <View style={{height:192,width:336,backgroundColor:'#50DBB4',borderRadius:10}}>
      <Text>card</Text>
    </View>
  )
}
const cardFront = () => {
  return(
    <Text>Hello</Text>
  )
}
const cardBack = () => {
  return(
    <Text>NativeBase</Text>
  )
}
export default card

const styles = StyleSheet.create({})