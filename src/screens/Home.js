import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Card from "../components/Card";
import Scanner from "../components/Scanner";
const Home = ({ navigation }) => {
  return (
    <>
      {/* <SafeAreaView>
        <Card />
      </SafeAreaView> */}
      <Scanner navigation={navigation} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
