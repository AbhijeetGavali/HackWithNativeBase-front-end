import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
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
};

export default Home;

const styles = StyleSheet.create({});
