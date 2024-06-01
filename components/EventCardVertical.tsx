import { EventType } from "@/types";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type EventCardProps = {
  item: EventType;
};

const EventCardVertical = ({ item }: EventCardProps) => {
  const router = useRouter();

  return (
    <View className='  bg-slate-50 relative rounded-lg'>
      <Pressable onPress={() => router.navigate("/events/1")}>
        <Image
          source={item.src}
          className='w-[150px] h-[250px] rounded-lg object-contain'
        />
      </Pressable>
    </View>
  );
};

export default EventCardVertical;
