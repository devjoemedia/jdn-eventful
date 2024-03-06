import { SectionList, StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import TicketCard from "./TicketCard";
import { Ticket, groupAndSortTickets } from "@/utils";
import { tickets } from "@/data";

const PastTickets = () => {
  const pastTickets = groupAndSortTickets(tickets);

  return (
    <View className=' p-2'>
      <Text className=' my-3 text-2xl font-bold text-slate-500'>
        Past Tickets
      </Text>

      <View>
        <SectionList
          contentContainerStyle={{ paddingBottom: 200 }}
          sections={pastTickets}
          keyExtractor={(item: Ticket, index: number) => item.id.toString()}
          renderItem={({ item }) => <TicketCard type='past' />}
          renderSectionHeader={({ section: { title } }) => (
            <Text className='text-2xl bg-slate-50 p-1 font-bold text-slate-700'>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default PastTickets;
