import PaymentModal from "@/components/PaymentModal";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import MapView from "react-native-maps";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Event() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        className='relative bg-white flex-1'
      >
        <View className=' flex-1 h-[55%]'>
          <Image
            style={{ objectFit: "cover" }}
            source={require("../../../../assets/e1.jpeg")}
            className=' relative w-full flex-1'
          />
        </View>
        <SafeAreaView
          style={{ position: "absolute", top: 0, left: 0, right: 0 }}
        >
          <View className=' flex flex-row justify-between items-center w-full'>
            <View className='flex ml-2 p-2 items-center justify-center bg-black/40 h-[50px] w-[50px] rounded-full '>
              <Pressable onPress={() => router.navigate("(app)/(tabs)/events")}>
                <AntDesign name='back' size={30} color='white' />
              </Pressable>
            </View>
            <View className='flex mr-2 p-2 items-center justify-center bg-black/40 h-[50px] w-[50px] rounded-full '>
              <Pressable onPress={() => null}>
                <MaterialCommunityIcons
                  name='bookmark-minus-outline'
                  size={30}
                  color='white'
                />
              </Pressable>
            </View>
          </View>
        </SafeAreaView>

        <View className=' p-3 flex gap-5 '>
          <View className=' rounded-[10px] p-3 gap-2 '>
            <Text className=' mb-3 text-3xl font-bold text-slate-900'>
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
                  +420 paticipants
                </Text>
              </View>
            </View>

            <Text className=' text-lg text-slate-500'>
              Keep in mind that ScrollViews must have a bounded height in order
              to work, since they contain unbounded-height children into a
              bounded container (via a scroll interaction). In order to bound
              the height of a ScrollView, either set the height of the view
              directly (discouraged) or make sure all parent views have bounded
              height.
            </Text>
          </View>

          <View className=' rounded-[20px] my-2 p-3 bg-slate-100 w-full h-[220px]'>
            <MapView className=' w-full h-full' />
          </View>

          <View className=' flex flex-row gap-5'>
            <View className=' rounded-full h-[50px] w-[50px] flex items-center justify-center border border-slate-200 p-2'>
              <MaterialCommunityIcons
                name='bookmark-minus-outline'
                size={30}
                color='gray'
              />
            </View>
            <Pressable
              onPress={() => setIsModalVisible(true)}
              className=' p-2 mt-2 py-4 bg-orange-600 text-white flex-1 flex items-center justify-center rounded-full'
            >
              <Text className=' text-white font-bold text-2xl'>Get Ticket</Text>
            </Pressable>
          </View>
        </View>

        <PaymentModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        >
          <ScrollView contentContainerStyle={{ paddingVertical: 30, gap: 10 }}>
            <TextInput
              placeholder='Name'
              className=' border border-slate-200 px-4 py-6 mx-3 rounded-lg'
            />
            <TextInput
              placeholder='Amount'
              className=' border border-slate-200 px-4 py-6 mx-3 rounded-lg'
            />

            <View className=' flex flex-row gap-5 px-5'>
              <Pressable
                onPress={() => setIsModalVisible(false)}
                className=' p-2 mt-2 py-4 bg-orange-600 text-white flex-1 flex items-center justify-center rounded-full'
              >
                <Text className=' text-white font-bold text-2xl'>Pay now</Text>
              </Pressable>
            </View>
          </ScrollView>
        </PaymentModal>
        <StatusBar style='light' />
      </ScrollView>
    </SafeAreaProvider>
  );
}
