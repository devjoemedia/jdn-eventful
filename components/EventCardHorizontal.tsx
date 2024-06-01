import { EventType } from "@/types";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type EventCardProps = {
  item: EventType;
};

const EventCardHorizontal = ({ item }: EventCardProps) => {
  const router = useRouter();
  return (
    <View className='  bg-slate-50 relative rounded-lg'>
      <Pressable onPress={() => router.navigate("/events/1")}>
        <Image
          source={item.src}
          className='w-[300px] h-[180px] rounded-lg object-contain'
        />
      </Pressable>

      {/* </Link> */}
      {/* <View className=' px-4 pb-3 '>
        <Text className='text-md '>Dr. Joseph Nartey</Text>
        <Text className='text-md '>$100/hr</Text>
      </View> */}
    </View>
  );
};

export default EventCardHorizontal;
