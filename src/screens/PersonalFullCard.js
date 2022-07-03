import { Text, HStack, Heading, Box, Center, Stack, Link } from "native-base";
import { AntDesign } from "@expo/vector-icons";

import { SafeAreaView } from "react-native";

import React from "react";
import PersonalCardCoursole from "../components/PersonalCardCoursole";

export default function PersonalFullCard() {
  const data = {
    _id: "1234ss",
    ownerId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    type: "personal",
    versionNo: 0,
    fullName: "Aafreen Khan",
    designation: "QA Test Engineer at Nvidia",
    imgUrl: "",
    details: {
      email: { show: true, value: "hackthon@gmail.com" },
      phoneNo: { show: true, value: "1234567890" },
      website: { show: false },
    },
    address: "pune",
    logo: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
    description:
      "A company description is an overview or summary of a business. It's an important part of a business plan that often briefly describes an organization's history, location, mission statement, management personnel and, when appropriate, legal structure",
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
        <PersonalCardCoursole data={data} />
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          marginTop={5}
          borderWidth="1"
          shadow={5}
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
              py="1.5"
            >
              {data.designation}
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {data.fullName}
              </Heading>
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
