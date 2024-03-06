import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

const CustomHeader = () => {
  return (
    <View className=' bg-orange-200'>
      <SafeAreaView>
        <View className=' flex flex-row pb-3 items-center justify-between px-3'>
          <View className=' relative flex flex-row items-center justify-between'>
            <View>
              <Image
                source={require("../assets/jdn.jpg")}
                className=' w-[50px] h-[50px] rounded-full'
              />
            </View>
            <View className='ml-3'>
              <Text className=' font-bold text-2xl'>Hello, Joseph</Text>
            </View>
          </View>
          <Ionicons name='notifications-outline' size={30} color='black' />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CustomHeader;
