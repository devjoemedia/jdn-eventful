import { EventType } from "@/types";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

type EventCardProps = {
  item: EventType;
};

const EventCardHorizontal = ({ item }: EventCardProps) => {
  return (
    <View className='  bg-slate-50 relative rounded-lg'>
      <Link replace href={"events/1"}>
        <View className=' relative p-2'>
          <Image
            source={item.src}
            className=' object-contain w-[320px] h-[180px] rounded-lg'
          />
        </View>
      </Link>
      {/* <View className=' px-4 pb-3 '>
        <Text className='text-md '>Dr. Joseph Nartey</Text>
        <Text className='text-md '>$100/hr</Text>
      </View> */}
    </View>
  );
};

export default EventCardHorizontal;
