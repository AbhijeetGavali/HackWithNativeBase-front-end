import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import {
  Button,
  Center,
  FormControl,
  Input,
  Stack,
  useToast,
  HStack,
  VStack,
  Heading,
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signin } from "../redux/action/user";
import Feather from "react-native-vector-icons/Feather";

const Login = ({ navigation }) => {
  const toast = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(signin(data, displayMessage, navigation));
  };
  const displayMessage = (message) => {
    toast.show({
      description: message,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#5E6FD3" }}>
      <Center flex={1}>
        <HStack alignSelf={"center"} marginX={15} flex={1} mt={40}>
          <Feather name="upload-cloud" size={60} color={"#000000"} />
          <VStack marginLeft={2}>
            <Text style={{ fontSize: 50, color: "#ffffff", fontWeight: "900" }}>
              Cardz
            </Text>
          </VStack>
        </HStack>
      </Center>
      <Center
        px={4}
        flex={2}
        justifyContent={"flex-start"}
        backgroundColor={"#fff"}
        borderTopLeftRadius={70}
        pt={10}
      >
        <Heading mb={10}>Login</Heading>
        <FormControl isRequired _web={{ width: "50%" }}>
          <Stack mx="4">
            {/* start here */}
            <FormControl isRequired isInvalid={"email" in errors}>
              <FormControl.Label>Email Address</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    placeholder="yourname@domain.com"
                    onChangeText={(val) => onChange(val)}
                    value={value}
                    height={50}
                    size={"lg"}
                    alignItems={"center"}
                  />
                )}
                name="email"
                rules={{
                  required: "Please enter a email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Please enter a valid email address",
                  },
                }}
                defaultValue=""
              />
              <FormControl.ErrorMessage>
                {errors.email?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            {/* password */}
            <FormControl isRequired isInvalid={"password" in errors} pt={2}>
              <FormControl.Label>Password</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    placeholder="password"
                    onChangeText={(val) => onChange(val)}
                    value={value}
                    height={50}
                    size={"lg"}
                    alignItems={"center"}
                    secureTextEntry
                  />
                )}
                name="password"
                rules={{
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Please enter a valid password",
                  },
                }}
                defaultValue=""
              />
              <FormControl.ErrorMessage>
                {errors.password?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <Button
              onPress={handleSubmit(onSubmit)}
              marginY={5}
              background={"#3944F7"}
              height={50}
              size={"lg"}
              _text={{
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Login
            </Button>
          </Stack>
        </FormControl>
      </Center>
    </View>
  );
};

export default Login;
