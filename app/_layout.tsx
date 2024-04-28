import { Slot, useRouter } from "expo-router";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import "../global.css";
import { StatusBar } from "expo-status-bar";

export default function Root() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
      setReady(true);
    }, 3000);
  }, []);

  if (!isReady) {
    return (
      <View className=' flex-1 p-5 items-center justify-center bg-orange-600'>
        <Text className=' text-7xl text-white font-extrabold'>EMaster</Text>
        <StatusBar style='light' />
      </View>
    );
  }

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
