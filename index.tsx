import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className=' h-full bg-yellow-500 flex items-center justify-center'>
      <Text className=' text-2xl text-gray-950'>Home Screen</Text>
      <Link href={"(tabs)/events"}>Tabs</Link>
    </View>
  );
}
