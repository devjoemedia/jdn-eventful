import {
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";

export default function Settings() {
  return (
    <View>
      <View className=' bg-orange-200 w-full'>
        <SafeAreaView>
          <View className='h-[220px] flex items-center justify-between w-full'>
            <View className='ml-3 items-center'>
              <Image
                source={require("../../../assets/jdn.jpg")}
                className=' w-[110px] h-[110px] rounded-full'
              />
              <Text className=' text-center font-semibold text-2xl mt-5'>
                Hi, 👋✌️
              </Text>
              <Text className=' text-center font-bold text-3xl uppercase mt-2  '>
                Joseph Nartey
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
      <View className='space-y-3 gap-1 px-2 mt-1'>
        <Pressable
          onPress={() => null}
          className='flex-row justify-between items-center bg-orange-200 rounded-lg p-5 w-full'
        >
          <View className='gap-3 flex-row items-center'>
            <FontAwesome5 name='user' size={24} color='black' />
            <Text className=' font-bold text-2xl'>Profile</Text>
          </View>
          <Entypo name='chevron-right' size={24} color='black' />
        </Pressable>

        <Pressable
          onPress={() => null}
          className='flex-row justify-between items-center bg-orange-200 rounded-lg p-5 w-full'
        >
          <View className='gap-3 flex-row items-center'>
            <SimpleLineIcons name='settings' size={24} color='black' />
            <Text className=' font-bold text-2xl'>Settings</Text>
          </View>
          <Entypo name='chevron-right' size={24} color='black' />
        </Pressable>
        <Pressable
          onPress={() => null}
          className='flex-row justify-between items-center bg-orange-200 rounded-lg p-5 w-full'
        >
          <View className='gap-3 flex-row items-center'>
            <MaterialIcons
              name='notifications-active'
              size={24}
              color='black'
            />
            <Text className=' font-bold text-2xl'>Notifications</Text>
          </View>
          <Entypo name='chevron-right' size={24} color='black' />
        </Pressable>
        <Pressable
          onPress={() => null}
          className='flex-row justify-between items-center bg-orange-200 rounded-lg p-5 w-full'
        >
          <View className='gap-3 flex-row items-center'>
            <Ionicons name='moon' size={24} color='black' />
            <Text className=' font-bold text-2xl'>Theme</Text>
          </View>
          <Entypo name='chevron-right' size={24} color='black' />
        </Pressable>
        <Pressable
          onPress={() => null}
          className='flex-row justify-between items-center bg-orange-200 rounded-lg p-5 w-full'
        >
          <View className='gap-3 flex-row items-center'>
            <Feather name='log-out' size={24} color='black' />
            <Text className=' font-bold text-2xl'>Logout</Text>
          </View>
          <Entypo name='chevron-right' size={24} color='black' />
        </Pressable>
      </View>
    </View>
  );
}
