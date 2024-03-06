import CustomHeader from "@/components/CustomHeader";
import CustomTabBar from "@/components/CustomTabBar";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router/tabs";
export default function AppLayout() {
  return (
    <Tabs
      tabBar={({ state, descriptors, navigation }) => (
        <CustomTabBar
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      )}
      // screenOptions={{
      //   header: (props: any) => <CustomHeader {...props} />,
      //   headerShown: false,
      // }}
    >
      <Tabs.Screen
        name='index'
        options={{
          header: (props: any) => <CustomHeader {...props} />,
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name='home-outline'
              size={30}
              // className={`${true ? "black" : "bg-gray-500"}`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='events'
        options={{
          headerShown: false,
          header: (props: any) => <CustomHeader {...props} />,
          tabBarLabel: "Explore",
          tabBarIcon: () => (
            <Ionicons
              name='compass-outline'
              size={30}
              // className={`${true ? "black" : "bg-gray-500"}`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='live/index'
        options={{
          // headerShown: false,
          header: (props: any) => <CustomHeader {...props} />,
          tabBarLabel: "Live Events",
          tabBarIcon: () => (
            <MaterialIcons name='live-tv' size={30} color='white' />
          ),
        }}
      />
      <Tabs.Screen
        name='tickets/index'
        options={{
          header: (props: any) => <CustomHeader {...props} />,
          tabBarLabel: "Tickets",
          tabBarIcon: () => (
            <MaterialIcons name='payments' size={30} color='black' />
          ),
          // tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          header: (props: any) => <CustomHeader {...props} />,
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <FontAwesome5 name='user' size={24} color='black' />
          ),
        }}
      />
    </Tabs>
  );
}
