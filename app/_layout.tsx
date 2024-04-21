import { Slot, useRouter } from "expo-router";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import "../global.css";

export default function Root() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
      setReady(true);
    }, 3000);
  }, []);

  if (!isReady) {
    return <View style={{ flex: 1, backgroundColor: "#000" }} />;
  }

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
