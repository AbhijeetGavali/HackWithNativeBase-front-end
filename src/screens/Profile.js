import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import React from 'react'
import { Box, Button, FormControl, Input } from 'native-base'

const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <Text>Name</Text>
      <Input />
      <Text>Company</Text>
      <Input />
      <Text>Job Title</Text>
      <Input />
      <Text>Address</Text>
      <Input />
      <Text>Phone</Text>
      <Input />
      <Text>Email</Text>
      <Input />
      <Text>Website</Text>
      <Input />
      <Button
       onPress={() => navigation.navigate("MakeCard")}>
         Make A card
      </Button>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({})