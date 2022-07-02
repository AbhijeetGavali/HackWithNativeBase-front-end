import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Button } from "native-base";

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button borderRadius={5} onPress={() => navigation.navigate("Login")}>
        Login
      </Button>
      <Button onPress={() => navigation.navigate("Register")}>Register</Button>
      <Button onPress={() => navigation.navigate("Dashboard")}>
        Dashboard
      </Button>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
