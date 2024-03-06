import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

type TicketCardProps = {
  type?: "past" | "upcoming";
};
const TicketCard = ({ type }: TicketCardProps) => {
  return (
    <Link replace href={"events/1"}>
      <View
        className={` p-1 flex-row my-2 bg-white shadow-sm shadow-black/20 ${
          type == "past" ? " opacity-40" : ""
        }`}
      >
        <View className=' relative '>
          <Image
            source={require("../assets/e8.jpeg")}
            className={`object-contain w-[150px] h-[110px] rounded-lg `}
          />
        </View>
        <View className=' p-2'>
          <Text className=' mb-3 text-2xl font-bold text-slate-900'>
            {/* Jaz Music Festival */}
            Black History Month
          </Text>

          <View className=' flex flex-row gap-2'>
            <FontAwesome5 name='calendar-alt' size={20} color='gray' />
            <Text className=' text-xl text-slate-500'>
              21ST June 2024 at 9:00 pm
            </Text>
          </View>

          <View className=' flex flex-row gap-2'>
            <Octicons name='location' size={20} color='gray' />
            <Text className=' text-xl text-slate-500'>Sycamore Pup</Text>
          </View>

          <View className=' flex flex-row gap-2'>
            <Ionicons name='people-outline' size={24} color='black' />
            <View className='  bg-orange-100 rounded-full py-1 px-6'>
              <Text className=' my-1 text-smp-2 font-bold text-slate-900'>
                1 ticket
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
};

export default TicketCard;
