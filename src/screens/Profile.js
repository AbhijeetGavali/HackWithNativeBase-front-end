import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, FormControl, Heading, Input } from "native-base";
import * as ImagePicker from "expo-image-picker";
import { jsonToFormData } from "../../utils/formData";
import { addCard } from "../redux/action/profile";
import { useDispatch } from "react-redux";
const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result);
    }
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm("");

  const onSubmit = (data) => {
    console.log(data);
    let formData = jsonToFormData(data);
    formData.append("logo", image.uri);

    dispatch(addCard(formData, navigation));
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView height={Platform.OS === "android" ? 675 : 685}>
        <Heading padding={6} safeArea>
          Personal Details:
        </Heading>
        <FormControl isRequired isInvalid={"name" in errors} mx={5} mb={3}>
          <FormControl.Label _text={{ fontSize: "xl" }}>Name</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                placeholder="Harshad Birajdar"
                onChangeText={(val) => onChange(val)}
                value={value}
                height={50}
                size={"lg"}
                alignItems={"center"}
                width={"90%"}
              />
            )}
            name="name"
            rules={{
              required: "Please enter a name",
            }}
            defaultValue=""
          />
          <FormControl.ErrorMessage>
            {errors.name?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={"companyName" in errors}
          mx={5}
          mb={3}
        >
          <FormControl.Label _text={{ fontSize: "xl" }}>
            Company Name
          </FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                placeholder="Gratus Tech"
                onChangeText={(val) => onChange(val)}
                value={value}
                height={50}
                size={"lg"}
                alignItems={"center"}
                width={"90%"}
              />
            )}
            name="companyName"
            rules={{
              required: "Please enter a Company Name",
            }}
            defaultValue=""
          />
          <FormControl.ErrorMessage>
            {errors.companyName?.message}
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={"jobTitle" in errors} mx={5} mb={3}>
          <FormControl.Label _text={{ fontSize: "xl" }}>
            Job Title
          </FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                placeholder="Marketing Manager"
                onChangeText={(val) => onChange(val)}
                value={value}
                width={"90%"}
                height={50}
                size={"lg"}
                alignItems={"center"}
              />
            )}
            name="jobTitle"
            rules={{
              required: "Please enter a Job Title",
            }}
            defaultValue=""
          />
          <FormControl.ErrorMessage>
            {errors.jobTitle?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={"phoneNumber" in errors}
          mx={5}
          mb={3}
        >
          <FormControl.Label _text={{ fontSize: "xl" }}>
            Phone Number
          </FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                placeholder="9876543210"
                onChangeText={(val) => onChange(val)}
                value={value}
                width={"90%"}
                height={50}
                size={"lg"}
                alignItems={"center"}
              />
            )}
            name="phoneNumber"
            rules={{
              required: "Please enter a phone Number",
            }}
            defaultValue=""
          />
          <FormControl.ErrorMessage>
            {errors.phoneNumber?.message}
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={"email" in errors} mx={5} mb={3}>
          <FormControl.Label _text={{ fontSize: "xl" }}>
            Email Address
          </FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                placeholder="yourname@xyz.com"
                onChangeText={(val) => onChange(val)}
                value={value}
                width={"90%"}
                height={50}
                size={"lg"}
                alignItems={"center"}
              />
            )}
            name="email"
            rules={{
              required: "Please enter a email address",
            }}
            defaultValue=""
          />
          <FormControl.ErrorMessage>
            {errors.email?.message}
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={"website" in errors} mx={5} mb={3}>
          <FormControl.Label _text={{ fontSize: "xl" }}>
            Website
          </FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                placeholder="www.gratustech.com"
                onChangeText={(val) => onChange(val)}
                value={value}
                width={"90%"}
                height={50}
                size={"lg"}
                alignItems={"center"}
                mb={3}
              />
            )}
            name="website"
            rules={{
              required: "Please enter a website address",
            }}
            defaultValue=""
          />
          <FormControl.ErrorMessage>
            {errors.website?.message}
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={"address" in errors} mx={5} mb={3}>
          <FormControl.Label _text={{ fontSize: "xl" }}>
            Address
          </FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                placeholder="www.gratustech.com"
                onChangeText={(val) => onChange(val)}
                value={value}
                width={"90%"}
                height={50}
                size={"lg"}
                alignItems={"center"}
              />
            )}
            name="address"
            rules={{
              required: "Please enter a address",
            }}
            defaultValue=""
          />
          <FormControl.ErrorMessage>
            {errors.address?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={"desc" in errors} mx={5} mb={3}>
          <FormControl.Label _text={{ fontSize: "xl" }}>
            Description
          </FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                placeholder="some description"
                onChangeText={(val) => onChange(val)}
                value={value}
                width={"90%"}
                height={50}
                size={"lg"}
                alignItems={"center"}
              />
            )}
            name="desc"
            defaultValue=""
          />
          <FormControl.ErrorMessage>
            {errors.desc?.message}
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl isInvalid={"instagram" in errors} mx={5} mb={3}>
          <FormControl.Label _text={{ fontSize: "xl" }}>
            Instagram
          </FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                placeholder="https://instagram.com/gratustech"
                onChangeText={(val) => onChange(val)}
                value={value}
                width={"90%"}
                height={50}
                size={"lg"}
                alignItems={"center"}
              />
            )}
            name="instagram"
            defaultValue=""
          />
          <FormControl.ErrorMessage>
            {errors.instagram?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={"linkdin" in errors} mx={5} mb={3}>
          <FormControl.Label _text={{ fontSize: "xl" }}>
            Linkdin
          </FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                placeholder="https://www.linkedin.com/gratustech"
                onChangeText={(val) => onChange(val)}
                value={value}
                width={"90%"}
                height={50}
                size={"lg"}
                alignItems={"center"}
              />
            )}
            name="linkdin"
            defaultValue=""
          />
          <FormControl.ErrorMessage>
            {errors.linkdin?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <Box flexDirection={"row"} marginBottom={3}>
          <Button onPress={pickImage} flexGrow={1} width={50} marginX={2}>
            Choose Logo
          </Button>
          <Button
            onPress={handleSubmit(onSubmit)}
            flexGrow={1}
            width={50}
            marginX={2}
          >
            Make A card
          </Button>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
