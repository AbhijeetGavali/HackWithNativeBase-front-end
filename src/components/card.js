import { StyleSheet, Text } from "react-native";
import React from "react";
import {
  Center,
  Stack,
  HStack,
  VStack,
  View,
  Box,
  Heading,
  Divider,
} from "native-base";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
const Card = () => {
  return (
    <View borderRadius={15} bgColor={"amber.700"} h={192} w={336}>
      <Box flex={1} bgColor={"#0908"} borderRadius={15}>
        <Heading>Avishkar Shinde</Heading>
        <HStack>
          <Text>QA Test Engineer at </Text>
          <Text>Nvidia</Text>
        </HStack>
        <Divider w={"70%"} />
        <HStack>
          <Feather name="mail" size={20} />
          <Text>avishkar.inbox@gmail.com</Text>
        </HStack>
        <HStack>
          <Feather name="phone" size={20} />
          <Text>8830039622</Text>
        </HStack>

        <HStack>
          <EvilIcons name="location" size={20} />
          <Text>Pune</Text>
        </HStack>
      </Box>
    </View>
  );
};
const cardFront = () => {
  return <></>;
};
const cardBack = () => {
  return <></>;
};
export default Card;

const styles = StyleSheet.create({});
