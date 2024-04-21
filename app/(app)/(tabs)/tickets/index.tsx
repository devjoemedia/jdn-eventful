import { View, Text } from "react-native";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PastTickets from "@/components/PastTickets";
import UpcommingTickets from "@/components/UpcommingTickets";

const Tab = createMaterialTopTabNavigator();

export default function Events() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, width: 100, textAlign: "center" },
        tabBarItemStyle: { width: "auto" },
        // tabBarStyle: {
        //   backgroundColor: "powderblue",
        //   width: "100%",
        //   display: "flex",
        //   flexDirection: "row",
        //   alignItems: "center",
        //   justifyContent: "space-between",
        // },
      }}
    >
      <Tab.Screen name='Upcomming' component={UpcommingTickets} />
      <Tab.Screen name='Past Tickets' component={PastTickets} />
    </Tab.Navigator>
  );
}
