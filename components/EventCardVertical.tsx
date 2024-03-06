import { EventType } from "@/types";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

type EventCardProps = {
  item: EventType;
};

const EventCardVertical = ({ item }: EventCardProps) => {
  return (
    <View className='  bg-slate-50 relative rounded-lg'>
      <Link replace href={"events/1"}>
        <View className='relative'>
          <Image
            source={item.src}
            className=' w-[150px] h-[250px] rounded-lg'
          />
        </View>
      </Link>
    </View>
  );
};

export default EventCardVertical;
