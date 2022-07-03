import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
<<<<<<< HEAD
 import Card from '../components/Card'
import Scanner from "../components/Scanner"
import { VStack } from "native-base";
const Home = () => {
  return (
    <Card></Card>
    // <VStack flex={1}>
  //   <Card/> 
  //   <VStack bg="red.500" flex={1}/>
    
  // </VStack>
    );
=======
import Card from "../components/Card";
import Scanner from "../components/Scanner";
const Home = ({ navigation }) => {
  const navigateToHome = () => {
    console.log("navigate to home");
    navigation.navigate("Dashboard");
  };
  return (
    <>
      {/* <SafeAreaView>
        <Card />
      </SafeAreaView> */}
      <Scanner navigateToHome={navigateToHome} />
    </>
  );
>>>>>>> b535baa98f030a788545e6c2f62edd8229e14e2a
};

export default Home;

const styles = StyleSheet.create({});
