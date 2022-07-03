import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { Button, HStack, Image, VStack } from "native-base";
import Feather from "react-native-vector-icons/Feather";
const Onboarding = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#5E6FD3" }}>
      <VStack flex={1}>
        <HStack alignSelf={"center"} marginX={15} flex={1} mt={40}>
          <Feather name="upload-cloud" size={60} color={"#000000"} />
          <VStack marginLeft={2}>
            <Text style={{ fontSize: 50, color: "#ffffff", fontWeight: "900" }}>
              Cardz
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <VStack
        bgColor={"#ffffff"}
        borderTopLeftRadius={100}
        flex={1}
        justifyContent="flex-end"
      >
        <Image
          source={require("../images/onboarding.png")}
          w={380}
          h={190}
          mb={10}
          alignSelf={"center"}
          _web={{ width: "80%", height: 400 }}
        />
        <VStack
          mb={10}
          _web={{ flexDirection: "row", justifyContent: "space-evenly" }}
        >
          <Button
            mb={5}
            borderRadius={10}
            marginX={5}
            background={"#FF6666"}
            height={50}
            size={"lg"}
            _text={{
              fontWeight: "bold",
              color: "#fff",
            }}
            onPress={() => navigation.navigate("Login")}
            _web={{ width: "40%" }}
          >
            Login
          </Button>
          <Button
            mb={5}
            marginX={5}
            size={"lg"}
            borderRadius={10}
            background={"#3944F7"}
            height={50}
            _text={{
              fontWeight: "bold",
              color: "#fff",
            }}
            onPress={() => navigation.navigate("Register")}
            _web={{ width: "40%" }}
          >
            Register
          </Button>
        </VStack>
      </VStack>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
