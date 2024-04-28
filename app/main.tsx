import { Link, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import useSession from "@/hooks/useSession";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

const MainScreen = () => {
  const router = useRouter();
  const { signIn, user } = useSession();

  if (user) {
    return router.push("(app)/(tabs)");
  }

  return (
    <View className='flex-1 items-center justify-around bg-orange-600 px-5'>
      <View className='flex-[0.7] items-center justify-center'>
        <View className=' font-default flex-row'>
          <Text className='text-white font-extrabold text-5xl'>Event</Text>
          <Text className='font-extrabold text-5xl'>Master</Text>
        </View>
      </View>

      <View className='w-full flex-[0.3] items-center gap-1'>
        <View className=' flex-row gap-10 mb-5'>
          <FontAwesome name='facebook' size={24} color='white' />
          <AntDesign name='google' size={24} color='white' />
          <AntDesign name='apple1' size={24} color='white' />
        </View>

        <Pressable
          onPress={async () => {
            router.push("login");
          }}
          className=' p-2 mt-2 py-4 bg-white h-20 w-full flex items-center justify-center rounded-xl'
        >
          <Text className=' text-orange-600 font-bold text-2xl'>
            Already registered?
          </Text>
        </Pressable>
        <Pressable
          onPress={async () => {
            router.push("register");
          }}
          className=' p-2 mt-2 py-4 bg-black h-20 w-full flex items-center justify-center rounded-xl'
        >
          <Text className=' text-orange-600 font-bold text-2xl'>
            I'm new here
          </Text>
        </Pressable>
      </View>
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
};

export default MainScreen;
