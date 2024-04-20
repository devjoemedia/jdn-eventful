import { SectionList, Text, View } from "react-native";
import TicketCard from "./TicketCard";
import { groupAndSortTickets } from "../utils/index";
import { tickets } from "@/data";

const Upcomming = () => {
  const upcommingTickets = groupAndSortTickets(tickets);

  return (
    <View className=' p-2 bg-white flex-1'>
      <SectionList
        ListHeaderComponent={
          <Text className=' my-3 text-2xl font-bold text-slate-500'>
            My Tickets
          </Text>
        }
        contentContainerStyle={{ paddingBottom: 100 }}
        sections={upcommingTickets}
        renderItem={({ item }) => <TicketCard />}
        renderSectionHeader={({ section: { title } }) => (
          <Text className='text-2xl bg-slate-50 p-1 font-bold text-slate-800'>
            {title}
          </Text>
        )}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

export default Upcomming;
