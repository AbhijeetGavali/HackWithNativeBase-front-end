import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, FormControl, Input } from "native-base";
import * as ImagePicker from "expo-image-picker";
const Profile = ({ navigation }) => {
  const [image, setImage] = useState(null);
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
      setImage(result.uri);
    }
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <ScrollView>
      <FormControl isRequired isInvalid={"name" in errors}>
        <FormControl.Label>Name</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="Harshad Birajdar"
              onChangeText={(val) => onChange(val)}
              value={value}
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
      <FormControl isRequired isInvalid={"companyName" in errors}>
        <FormControl.Label>Company Name</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="Gratus Tech"
              onChangeText={(val) => onChange(val)}
              value={value}
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

      <FormControl isRequired isInvalid={"jobTitle" in errors}>
        <FormControl.Label>Job Title</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="Marketing Manager"
              onChangeText={(val) => onChange(val)}
              value={value}
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
      <FormControl isRequired isInvalid={"phoneNumber" in errors}>
        <FormControl.Label>Phone Number</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="9876543210"
              onChangeText={(val) => onChange(val)}
              value={value}
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

      <FormControl isRequired isInvalid={"email" in errors}>
        <FormControl.Label>Email Address</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="yourname@xyz.com"
              onChangeText={(val) => onChange(val)}
              value={value}
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

      <FormControl isRequired isInvalid={"website" in errors}>
        <FormControl.Label>Website</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="www.gratustech.com"
              onChangeText={(val) => onChange(val)}
              value={value}
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

      <FormControl isRequired isInvalid={"address" in errors}>
        <FormControl.Label>Address</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="www.gratustech.com"
              onChangeText={(val) => onChange(val)}
              value={value}
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
      <FormControl isRequired isInvalid={"desc" in errors}>
        <FormControl.Label>Description</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="some description"
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="desc"
          defaultValue=""
        />
        <FormControl.ErrorMessage>
          {errors.desc?.message}
        </FormControl.ErrorMessage>
      </FormControl>

      <FormControl isInvalid={"instagram" in errors}>
        <FormControl.Label>Instagram</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="https://instagram.com/gratustech"
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="instagram"
          defaultValue=""
        />
        <FormControl.ErrorMessage>
          {errors.instagram?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl isInvalid={"linkdin" in errors}>
        <FormControl.Label>Linkdin</FormControl.Label>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholder="https://www.linkedin.com/gratustech"
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
          name="linkdin"
          defaultValue=""
        />
        <FormControl.ErrorMessage>
          {errors.linkdin?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button onPress={pickImage}>Choose Logo</Button>
      <Button onPress={pickImage}>Make A card</Button>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
