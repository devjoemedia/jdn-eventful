import { EventType } from "@/types";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

type EventCardProps = {
  item: EventType;
};

const EventCardExplore = ({ item }: EventCardProps) => {
  return (
    <View className=' relative rounded-lg w-[50%] p-2'>
      <Link href={"events/1"}>
        <View className=' relative '>
          <Image
            source={item.src}
            className=' object-contain w-[200px] h-[280px] rounded-lg'
          />
        </View>
      </Link>
      {/* <View className=' absolute px-4 pb-3 bg-red-500'>
        <Text className='text-md '>Dr. Joseph Nartey</Text>
        <Text className='text-md '>$100/hr</Text>
      </View> */}
    </View>
  );
};

export default EventCardExplore;
