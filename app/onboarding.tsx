import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnbaordingScreen = () => {
  return (
    <View className=' flex-1 bg-orange-600'>
      <SafeAreaView style={{ flex: 1 }} className=' flex-1 '>
        <View className='h-12 w-12 items-center mx-5 self-start justify-center bg-white  rounded-full'>
          <Link href={"/main"}>
            <AntDesign name='back' size={24} color='black' />
          </Link>
        </View>

        <View className='flex-[0.8] items-center justify-center'>
          <Text className=' text-7xl text-white font-extrabold'>EMaster</Text>
        </View>

        <View className=' p-5 justify-between items-center flex-row gap-5 flex-[0.1]'>
          <View className='h-10 items-center justify-center bg-white w-10 rounded-full'>
            <AntDesign name='left' size={20} color='black' />
          </View>

          <View className=' justify-center flex-1 flex-row gap-5 '>
            <View className='h-2 bg-gray-300 w-10 rounded-full'></View>
            <View className='h-2 bg-white w-10 rounded-full'></View>
            <View className='h-2 bg-white w-10 rounded-full'></View>
          </View>

          <View className='h-10 items-center justify-center bg-white w-10 rounded-full'>
            <AntDesign name='right' size={20} color='black' />
          </View>
        </View>
        <StatusBar barStyle={"light-content"} />
      </SafeAreaView>
    </View>
  );
};

export default OnbaordingScreen;
