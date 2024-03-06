import { Stack } from "expo-router";
import "../global.css";
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name='(tabs)'
        options={{
          title: "",
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack>
  );
}
