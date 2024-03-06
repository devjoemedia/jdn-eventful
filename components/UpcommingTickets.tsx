import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons";
import {
  Image,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TicketCard from "./TicketCard";
import { GroupedData, groupAndSortTickets } from "../utils/index";
import { tickets } from "@/data";
import { useEffect, useState } from "react";

const Upcomming = () => {
  const [data, setData] = useState<GroupedData[]>([]);
  useEffect(() => {
    const upcommingTickets = groupAndSortTickets(tickets);
    setData(upcommingTickets);
  }, []);
  console.log("Group");

  return (
    <View className=' p-2 bg-white'>
      <Text className=' my-3 text-2xl font-bold text-slate-500'>
        My Tickets
      </Text>

      <View>
        <SectionList
          contentContainerStyle={{ paddingBottom: 200 }}
          sections={data}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => <TicketCard />}
          renderSectionHeader={({ section: { title } }) => (
            <Text className='text-2xl bg-slate-50 p-1 font-bold text-slate-800'>
              {title}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

export default Upcomming;
