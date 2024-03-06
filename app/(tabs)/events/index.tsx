import EventCardExplore from "@/components/EventCardExplore";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Home() {
  return (
    <View className=' px-2 '>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Text className=' my-3 text-2xl font-bold text-slate-500'>
              Explore Events
            </Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        // columnWrapperStyle={{ gap: 10 }}
        data={upcommingData}
        renderItem={({ item }) => <EventCardExplore item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const upcommingData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bae",
    title: "First Item",
    src: require("../../../assets/e1.jpeg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63g",
    title: "Second Item",
    src: require("../../../assets/e2.jpeg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72sw",
    title: "Third Item",
    src: require("../../../assets/e4.jpeg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72sg",
    title: "Third Item",
    src: require("../../../assets/e3.jpeg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72sdf",
    title: "Third Item",
    src: require("../../../assets/e5.jpeg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72s",
    title: "Third Item",
    src: require("../../../assets/e9.jpeg"),
  },
];
