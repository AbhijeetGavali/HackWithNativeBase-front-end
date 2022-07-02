import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import Onboarding from "./src/screens/Onboarding";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Dashboard from "./src/screens/Dashboard";
import BusinessFullCard from "./src/screens/BusinessFullCard";
import PersonalFullCard from "./src/screens/PersonalFullCard";
import ImageFullCard from "./src/screens/ImageFullCard";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
const Stack = createNativeStackNavigator();

// extend the theme
export const theme = extendTheme({ config });

// all screens
import Login from "./src/screens/Login";
import store from "./src/redux/store";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MakeCard from "./src/screens/MakeCard";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Onboarding">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTabs"
              component={MyTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MakeCard"
              component={MakeCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessFullCard"
              component={BusinessFullCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalFullCard"
              component={PersonalFullCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ImageFullCard"
              component={ImageFullCard}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
const HomeScreen = () => {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <NativeBaseIcon />
        <Heading size="lg">Welcome to NativeBase</Heading>
        <HStack space={2} alignItems="center">
          <Text>Edit</Text>
          <Box
            _web={{
              _text: {
                fontFamily: "monospace",
                fontSize: "sm",
              },
            }}
            px={2}
            py={1}
            _dark={{ bg: "blueGray.800" }}
            _light={{ bg: "blueGray.200" }}
          >
            App.js
          </Box>
          <Text>and save to reload.</Text>
        </HStack>
        <Link href="https://docs.nativebase.io" isExternal>
          <Text color="primary.500" underline fontSize={"xl"}>
            Learn NativeBase
          </Text>
        </Link>
        <ToggleDarkMode />
      </VStack>
    </Center>
  );
};
// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
