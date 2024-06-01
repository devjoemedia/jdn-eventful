import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import useSession from "@/hooks/useSession";
import { useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const CustomHeader = () => {
  const { signOut, user } = useSession();
  const router = useRouter();

  return (
    // <SafeAreaProvider>
    <View className=' bg-orange-200 w-full'>
      <SafeAreaView>
        <View className='bg-orange-200  flex flex-row pb-3 items-center justify-between px-3'>
          <View className=' flex flex-row items-center justify-between'>
            <Pressable onPress={() => router.push("(app)/(tabs)/profile")}>
              <Image
                source={require("../assets/jdn.jpg")}
                className=' w-[50px] h-[50px] rounded-full'
              />
            </Pressable>
            <View className='ml-3'>
              <Text className=' font-bold text-2xl'>
                Hello, {user?.name || "Joseph"}
              </Text>
            </View>
          </View>

          <Pressable onPress={() => signOut()}>
            <Ionicons name='notifications-outline' size={30} color='black' />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
    // </SafeAreaProvider>
  );
};

export default CustomHeader;
