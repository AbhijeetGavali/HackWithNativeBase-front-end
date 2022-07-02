import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {
  Button,
  Center,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
} from "native-base";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Username</FormControl.Label>
            <Input placeholder="Username" />
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              defaultValue="12345"
              placeholder="password"
            />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
            <Button onPress={() => navigation.navigate("Home")}>Login</Button>
          </Stack>
        </FormControl>
      </Center>
    </SafeAreaView>
  );
};

export default Login;
