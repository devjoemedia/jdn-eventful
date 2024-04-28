import { Redirect, Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import useSession from "@/hooks/useSession";
import { Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const router = useRouter();
  const { user, loading } = useSession();

  if (loading) {
    return (
      <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        Loading...
      </Text>
    );
  }
  if (!user) {
    return router.push("/main");
  }

  return (
    <Stack
      screenOptions={{
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
