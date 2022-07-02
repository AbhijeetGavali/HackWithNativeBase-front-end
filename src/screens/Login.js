import { View, Text } from "react-native";
import React from "react";
import {
  Center,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
} from "native-base";

const Login = () => {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" defaultValue="12345" placeholder="password" />
          <FormControl.HelperText>
            Must be atleast 6 characters.
          </FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Center>
  );
};

export default Login;