import { Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Carousel from "react-native-anchor-carousel";
const { width: windowWidth } = Dimensions.get("window");
import React from "react";
import { Box, Center, Divider, Heading, HStack, Link } from "native-base";
import { EvilIcons, Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
    height: 210,
    margin: "auto",
  },
  item: {
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { x: 5, y: 5 },
    shadowRadius: 5,
  },
});

var versionControle = [
  {
    f: (data) => <PersonalCardFroent1 data={data} />,
    b: (data) => <PersonalCardBack1 data={data} />,
  },
];

export default function PersonalCardCoursole({ data }) {
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

const PersonalCardFroent1 = ({ data }) => {
  return (
    <Box alignItems="center">
      <Center maxW="80" borderRadius={15} h={192} w={336} bg="#242B2E">
        <Heading color={"#CAD5E2"}>{data.fullName}</Heading>
        <Divider w={"70%"} />
        <HStack>
          <Text style={{ color: "#AF9D5A", marginTop: 2 }}>
            {data.designation}
          </Text>
        </HStack>
      </Center>
    </Box>
  );
};

const PersonalCardBack1 = ({ data }) => {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        borderRadius={15}
        h={192}
        w={336}
        bg="#242B2E"
        justifyContent={"center"}
      >
        <Box borderRadius={15} mx={5} justifyContent={"center"}>
          <Heading color="#FFF">{data.fullName}</Heading>
          <HStack mb={1}>
            <Text style={{ color: "#AF9D5A" }}>{data.designation}</Text>
          </HStack>
          <Divider w={"70%"} />
          <HStack alignItems={"center"} mt={3}>
            <Feather
              name="mail"
              size={20}
              style={{ marginRight: 5 }}
              color="#fff"
            />
            {data.details.email.show ? (
              <Text fontWeight="400" style={{ color: "#FFFF" }}>
                {data.details.email.value}
              </Text>
            ) : (
              <Text fontWeight="400" style={{ color: "gray" }}>
                default@email.com
              </Text>
            )}
          </HStack>
          <HStack alignItems={"center"} mt={1}>
            <Feather
              name="phone"
              size={20}
              style={{ marginRight: 5 }}
              color="white"
            />
            {data.details.phoneNo.show ? (
              <Text fontWeight="400" style={{ color: "#FFFF" }}>
                {data.details.phoneNo.value}
              </Text>
            ) : (
              <Text fontWeight="400" style={{ color: "gray" }}>
                1234567890
              </Text>
            )}
          </HStack>
          <HStack alignItems={"center"} mt={1}>
            <Feather
              name="external-link"
              size={18}
              color="white"
              style={{ marginRight: 5 }}
            />
            {data.details.website.show ? (
              <Text fontWeight="400" style={{ color: "#FFFF" }}>
                {data.details.website.value}
              </Text>
            ) : (
              <Text fontWeight="400" style={{ color: "gray" }}>
                http://HelloWorld.com
              </Text>
            )}
          </HStack>

          <HStack alignItems={"center"} mt={1}>
            <EvilIcons
              name="location"
              size={24}
              style={{ color: "white", marginRight: 5, marginLeft: -5 }}
            />
            <Text style={{ color: "#FFFF" }}>{data.address}</Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
