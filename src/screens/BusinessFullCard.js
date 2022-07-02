import {
  Text,
  HStack,
  Heading,
  VStack,
  Box,
  Avatar,
  FlatList,
  Spacer,
  Pressable,
  AspectRatio,
  Center,
  Stack,
  Divider,
  IconButton,
  Icon,
  Link,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";

import { Image, SafeAreaView } from "react-native";

import React from "react";
import BusinessCardCoursole from "../components/BusinessCardCoursole";

export default function BusinessFullCard() {
  const data = {
    _id: "7823",
    ownerId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    versionNo: 0,
    type: "business",
    name: "Ineuron pvl ltd",
    business: "IT COMPANY",
    logo: "",
    description:
      "A company description is an overview or summary of a business. It's an important part of a business plan that often briefly describes an organization's history, location, mission statement, management personnel and, when appropriate, legal structure",
    address: "",
    userName: "Alien matre",
    userDesignation: "software developer @ ineuron",
    imgUrl: "",
    details: {
      email: { show: true, value: "hackthon@gmail.com" },
      phoneNo: { show: false },
      website: { show: true, value: "https://ineuron.ai" },
    },
    social: {
      twitter: { show: false },
      youtube: { show: false },
      linkedin: { show: true, value: "http://linkedin.com" },
      instagram: { show: true, value: "http://instagram.com" },
    },
  };
  return (
    <SafeAreaView>
      <Box alignItems="center">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={1}>
              <BusinessCardCoursole data={data} />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              {data.business}
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {data.name}
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {data.userName} | {data.userDesignation}
              </Text>
            </Stack>
            <Text fontWeight="400">{data.description}</Text>
            <HStack space={4} alignItems="center" justifyContent={"center"}>
              {data.social.twitter.show ? (
                <Link href={data.social.twitter.value}>
                  <AntDesign name="twitter" size={24} color="black" />
                </Link>
              ) : (
                <AntDesign name="twitter" size={24} color="gray" />
              )}
              {data.social.linkedin.show ? (
                <Link href={data.social.linkedin.value}>
                  <AntDesign name="linkedin-square" size={24} color="black" />
                </Link>
              ) : (
                <AntDesign name="linkedin-square" size={24} color="gray" />
              )}
              {data.social.instagram.show ? (
                <Link href={data.social.instagram.value}>
                  <AntDesign name="instagram" size={24} color="black" />
                </Link>
              ) : (
                <AntDesign name="instagram" size={24} color="gray" />
              )}
              {data.social.youtube.show ? (
                <Link href={data.social.youtube.value}>
                  <AntDesign name="youtube" size={24} color="black" />
                </Link>
              ) : (
                <AntDesign name="youtube" size={24} color="gray" />
              )}
            </HStack>
          </Stack>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
