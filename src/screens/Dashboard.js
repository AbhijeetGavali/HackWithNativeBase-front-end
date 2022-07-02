import { Text, Heading, Box, FlatList, Pressable } from "native-base";

import { SafeAreaView } from "react-native";

import React from "react";
import BusinessCardCoursole from "../components/BusinessCardCoursole";
import PersonalCardCoursole from "../components/PersonalCardCoursole";
import ImageCardCoursole from "../components/ImageCardCoursole";
function Dashboard({ navigation }) {
  const data = [
    {
      _id: "7890",
      ownerId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      type: "img",
      fUrl: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      bUrl: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
    },
    {
      _id: "1234",
      ownerId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      type: "personal",
      versionNo: 0,
      fullName: "Aafreen Khan",
      designation: "software developer @ ineuron",
      imgUrl: "",
      details: {
        email: { show: true, value: "hackthon@gmail.com" },
        phoneNo: { show: true, value: "1234567890" },
        website: { show: false },
      },
    },
    {
      _id: "7823",
      ownerId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      type: "business",
      versionNo: 0,
      name: "Ineuron pvl ltd",
      logo: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      imgUrl:
        "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      details: {
        email: { show: true, value: "hackthon@gmail.com" },
        phoneNo: { show: false },
        website: { show: true, value: "1234567890" },
      },
    },
  ];

  return (
    <SafeAreaView>
      <Box>
        <Heading fontSize="xl" p="4" pb="3">
          Cards Shared with you
        </Heading>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            item.type === "business" ? (
              <>
                <BusinessCardCoursole key={item._id} data={item} />
                <Pressable
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 20,
                    left: 20,
                    zIndex: 100,
                    alignItems: "flex-end",
                    shadowColor: "black",
                    shadowOpacity: 1,
                    shadowOffset: { x: 10, y: 10 },
                    shadowRadius: 10,
                  }}
                  onPress={() => navigation.navigate("BusinessFullCard")}
                >
                  <Text
                    style={{
                      color: "#fff",
                      bottom: 10,
                      right: 25,
                    }}
                  >
                    View Full
                  </Text>
                </Pressable>
              </>
            ) : item.type === "personal" ? (
              <>
                <PersonalCardCoursole key={item._id} data={item} />
                <Pressable
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 20,
                    left: 20,
                    zIndex: 100,
                    alignItems: "flex-end",
                    shadowColor: "black",
                    shadowOpacity: 1,
                    shadowOffset: { x: 10, y: 10 },
                    shadowRadius: 10,
                  }}
                  onPress={() => navigation.navigate("PersonalFullCard")}
                >
                  <Text
                    style={{
                      color: "#fff",
                      bottom: 10,
                      right: 25,
                    }}
                  >
                    View Full
                  </Text>
                </Pressable>
              </>
            ) : (
              <>
                <Pressable
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 20,
                    left: 20,
                    zIndex: 100,
                    alignItems: "flex-end",
                    shadowColor: "black",
                    shadowOpacity: 1,
                    shadowOffset: { x: 10, y: 10 },
                    shadowRadius: 10,
                  }}
                  onPress={() => navigation.navigate("ImageFullCard")}
                >
                  <Text
                    style={{
                      color: "#fff",
                      bottom: 10,
                      right: 25,
                    }}
                  >
                    View Full
                  </Text>
                </Pressable>
                <ImageCardCoursole key={item._id} data={item} />
              </>
            )
          }
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaView>
  );
}

export default Dashboard;
