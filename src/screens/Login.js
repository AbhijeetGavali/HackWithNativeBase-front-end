import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {
  Button,
  Center,
  FormControl,
  Input,
  Stack,
  useToast,
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signin } from "../redux/action/user";

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
    <View>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <FormControl isRequired>
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
            <FormControl isRequired isInvalid={"password" in errors}>
              <FormControl.Label>Password</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    placeholder="password"
                    onChangeText={(val) => onChange(val)}
                    value={value}
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

            <Button onPress={handleSubmit(onSubmit)}>Login</Button>
          </Stack>
        </FormControl>
      </Center>
    </View>
  );
};

export default Login;
