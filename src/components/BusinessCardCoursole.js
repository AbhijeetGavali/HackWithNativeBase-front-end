import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import {
  Text,
  Box,
  View,
  Center,
  Heading,
  Image,
  Divider,
  Link,
} from "native-base";
import Carousel from "react-native-anchor-carousel";
const { width: windowWidth } = Dimensions.get("window");
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import React from "react";

const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
    height: 210,
    margin: "auto",
  },
  item: {
    shadowColor: "#fff",
    shadowOpacity: 0.6,
    shadowOffset: { x: 5, y: 5 },
    shadowRadius: 5,
  },
});

var versionControle = [
  {
    f: (data) => <BusinessCardFroent1 data={data} />,
    b: (data) => <BusinessCardBack1 data={data} />,
  },
  {
    f: (data) => <BusinessCardFroent2 data={data} />,
    b: (data) => <BusinessCardBack2 data={data} />,
  },
];

export default function BusinessCardCoursole({ data }) {
  const carouselRef = React.useRef(null);
  var renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      >
        {index === 0
          ? versionControle[item.versionNo].f(item)
          : versionControle[item.versionNo].b(item)}
      </TouchableOpacity>
    );
  };
  return (
    <Carousel
      ref={carouselRef}
      data={[data, data]}
      renderItem={renderItem}
      style={styles.carousel}
      itemWidth={windowWidth < 700 ? windowWidth : 700}
      containerWidth={windowWidth < 700 ? windowWidth : 700}
      separatorWidth={2}
    />
  );
}

// Card versioning  starts from here

const BusinessCardFroent1 = ({ data }) => {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        width="336"
        height="192"
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
        <Box
          rounded="xl"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "#000",
            textAlign: "center",
          }}
        >
          <View
            alignItems="center"
            justifyContent={"center"}
            background="#242B2E"
            height="192"
          >
            <Center
              bg="#ffff"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "#FFD700",
                fontWeight: "700",
                fontSize: "xs",
              }}
              width={70}
              height={70}
              borderRadius={50}
            >
              <Image
                source={{
                  uri: data.logo,
                }}
                alt={"front image of the " + data.name}
                width={70}
                height={70}
                borderRadius={50}
              />
            </Center>
            <Heading color="#FFD700" marginTop={3}>
              {data.name}
            </Heading>
          </View>
        </Box>
      </Box>
    </Box>
  );
};

const BusinessCardBack1 = ({ data }) => {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        width="336"
        height="200"
        rounded="lg"
        overflow="hidden"
        borderColor="#242B2E"
        borderWidth="1"
        _dark={{
          borderColor: "#242B2E",
          backgroundColor: "#242B2E",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "#242B2E",
        }}
      >
        <Box
          rounded="xl"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "#242B2E",
            textAlign: "center",
          }}
        >
          <View
            alignItems="center"
            justifyContent={"center"}
            background="#242B2E"
            height="100%"
          >
            <Center
              flexDirection={"row"}
              _text={{
                color: "#242B2E",
                fontWeight: "700",
                fontSize: "xs",
              }}
              alignItems="center"
              justifyContent={"center"}
              _web={{ mt: 8 }}
            >
              <View width="40%" alignItems="center">
                <Image
                  source={{
                    uri: data.logo,
                  }}
                  alt={"front image of the " + data.name}
                  width={70}
                  height={70}
                  borderRadius={50}
                  style={{ shadowColor: "white", shadowRadius: 5 }}
                />
              </View>
              <Divider my={2} height={"90%"} width={1} />
              <View
                width="60%"
                alignItems={"flex-start"}
                padding="2%"
                _web={{ ml: 5 }}
              >
                <Heading
                  color="coolGray.300"
                  marginTop={3}
                  marginBottom={2}
                  _web={{ fontSize: "lg" }}
                >
                  {data.name}
                </Heading>
                <Text fontWeight="400">
                  <Entypo name="email" size={18} color="#fff" />
                  {data.details.email.show ? (
                    <Text fontWeight="400" style={{ color: "#FFFF" }}>
                      {data.details.email.value}
                    </Text>
                  ) : (
                    <Text fontWeight="400" style={{ color: "gray" }}>
                      default@email.com
                    </Text>
                  )}
                </Text>
                <Text fontWeight="400">
                  <Feather name="phone" size={18} color="#fff" />
                  {data.details.phoneNo.show ? (
                    <Text fontWeight="400" style={{ color: "#FFFF" }}>
                      {data.details.phoneNo.value}
                    </Text>
                  ) : (
                    <Text fontWeight="400" style={{ color: "gray" }}>
                      1234567890
                    </Text>
                  )}
                </Text>
                <Text fontWeight="400">
                  <Feather name="external-link" size={18} color="#fff" />
                  {data.details.website.show ? (
                    <Link href={data.details.website.value}>
                      <Text fontWeight="400" color="#fff">
                        {data.details.website.value}
                      </Text>
                    </Link>
                  ) : (
                    <Link href={data.details.website.value}>
                      <Text fontWeight="400" style={{ color: "gray" }}>
                        http://HelloWorld.com
                      </Text>
                    </Link>
                  )}
                </Text>
              </View>
            </Center>
          </View>
        </Box>
      </Box>
    </Box>
  );
};
