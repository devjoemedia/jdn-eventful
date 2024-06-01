import { EventType } from "@/types";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type EventCardProps = {
  item: EventType;
};

const EventCardExplore = ({ item }: EventCardProps) => {
  const router = useRouter();

  return (
    <View className=' w-[50%] m-1 rounded-lg '>
      <Pressable onPress={() => router.navigate("/events/1")}>
        <Image source={item.src} className='h-[280px] w-full object-contain' />
      </Pressable>
      {/* <View className=' absolute px-4 pb-3 bg-red-500'>
        <Text className='text-md '>Dr. Joseph Nartey</Text>
        <Text className='text-md '>$100/hr</Text>
      </View> */}
    </View>
  );
};

export default EventCardExplore;
