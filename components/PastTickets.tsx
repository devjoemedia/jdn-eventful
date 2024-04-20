import { SectionList, Text, View } from "react-native";
import TicketCard from "./TicketCard";
import { Ticket, groupAndSortTickets } from "@/utils";
import { tickets } from "@/data";
const PastTickets = () => {
  const pastTickets = groupAndSortTickets(tickets);

  return (
    <View className=' p-2 flex-1'>
      <SectionList
        ListHeaderComponent={
          <Text className=' my-3 text-2xl font-bold text-slate-500'>
            Past Tickets
          </Text>
        }
        contentContainerStyle={{ paddingBottom: 100 }}
        sections={pastTickets}
        renderItem={({ item }) => <TicketCard key={item.id} type='past' />}
        renderSectionHeader={({ section: { title } }) => (
          <Text className='text-2xl bg-slate-50 p-1 font-bold text-slate-700'>
            {title}
          </Text>
        )}
        keyExtractor={(item: Ticket, index: number) => item.id}
      />
    </View>
  );
};

export default PastTickets;
