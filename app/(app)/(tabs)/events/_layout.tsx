import CustomHeader from "@/components/CustomHeader";
import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          header: () => <CustomHeader />,
        }}
      ></Stack.Screen>
      <Stack.Screen name='[id]' options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
}
