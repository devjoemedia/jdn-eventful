import CustomHeader from "@/components/CustomHeader";
import EventCardHorizontal from "@/components/EventCardHorizontal";
import EventCardVertical from "@/components/EventCardVertical";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
        className=' bg-[#f1f1f1] p-2 '
      >
        <View className=' flex rounded-xl mb-3 bg-orange-100 p-2 justify-between items-center flex-row w-full gap-2'>
          <View className='    py-1 px-6'>
            <Text className=' my-1 text-smp-2 font-bold text-slate-900'>
              complete your profile to add event
            </Text>
          </View>

          <Ionicons name='close' size={24} color='black' />
        </View>

        <Text className=' mb-3 text-2xl font-bold text-slate-500'>
          Live now
        </Text>
        <FlatList
          horizontal
          contentContainerStyle={{ gap: 10 }}
          data={upcommingData}
          renderItem={({ item }) => <EventCardHorizontal item={item} />}
          keyExtractor={(item) => item.id}
        />

        <Text className=' mb-3 text-2xl font-bold text-slate-500'>New</Text>
        <FlatList
          horizontal
          contentContainerStyle={{ gap: 10 }}
          data={upcommingData}
          renderItem={({ item }) => <EventCardHorizontal item={item} />}
          keyExtractor={(item) => item.id}
        />

        <Text className=' my-3 text-2xl font-bold text-slate-500'>
          Up Comming
        </Text>
        <FlatList
          horizontal
          contentContainerStyle={{ gap: 10 }}
          data={commingSoomData}
          renderItem={({ item }) => <EventCardHorizontal item={item} />}
          keyExtractor={(item) => item.id}
        />

        <Text className=' my-3 text-2xl font-bold text-slate-500'>Popular</Text>
        <FlatList
          horizontal
          contentContainerStyle={{ gap: 15 }}
          data={popularData}
          renderItem={({ item }) => <EventCardVertical item={item} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}
const upcommingData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    src: require("../../assets/e1.jpeg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    src: require("../../assets/e2.jpeg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    src: require("../../assets/e4.jpeg"),
  },
];

const commingSoomData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
    title: "First Item",
    src: require("../../assets/e3.jpeg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f632",
    title: "Second Item",
    src: require("../../assets/e10.jpeg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d723",
    title: "Third Item",
    src: require("../../assets/e8.jpeg"),
  },
];

const popularData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7",
    title: "First Item",
    src: require("../../assets/e7.jpeg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f638",
    title: "Second Item",
    src: require("../../assets/e8.jpeg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d729",
    title: "Third Item",
    src: require("../../assets/e9.jpeg"),
  },
];
