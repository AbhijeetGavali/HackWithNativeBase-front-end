import {
  Text,
  Heading,
  Box,
  FlatList,
  Pressable,
  HStack,
  Modal,
  FormControl,
  Button,
} from "native-base";
import QRCode from "react-native-qrcode-svg";

import {
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";

import React, { useEffect, useState } from "react";
import BusinessCardCoursole from "../components/BusinessCardCoursole";
import PersonalCardCoursole from "../components/PersonalCardCoursole";
import ImageCardCoursole from "../components/ImageCardCoursole";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "../redux/action/card";
function Dashboard({ navigation }) {
  // const data = [];
  const data = useSelector((state) => state.card.cards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCard());
  }, []);
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <HStack
        alignItems={"center"}
        justifyContent={"space-between"}
        mx={5}
        mr={7}
        shadowColor="black"
      >
        <Heading fontSize="xl">Cards Shared with you</Heading>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <MaterialCommunityIcons name="qrcode" size={32} />
        </TouchableOpacity>
      </HStack>
      <FlatList
        data={data}
        height={Platform.OS === "android" ? 675 : 685}
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
        safeAreaBottom={true}
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <Box alignItems="center" justifyContent="center">
              <QRCode value="62c0e564e894ca013f9bccf3" />
            </Box>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
  );
}

export default Dashboard;
