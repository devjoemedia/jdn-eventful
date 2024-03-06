import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

type CustomTabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const handleTabPress = (index: number) => {
    const selectedRoute = state.routes[index];
    const event = navigation.emit({
      type: "tabPress",
      target: selectedRoute.key,
      canPreventDefault: true,
    });

    if (!selectedRoute || event.defaultPrevented) {
      return;
    }

    navigation.navigate(selectedRoute.name);
  };

  return (
    <ImageBackground
      source={require("../assets/Subtract.png")} // Provide the path to your image
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        width: "100%",
      }}
    >
      <View className=' flex flex-row items-center justify-between w-full h-full'>
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;
          const { tabBarIcon, tabBarLabel } = descriptors[route.key].options;

          return index == 2 ? (
            <TouchableOpacity
              key={route.key}
              onPress={() => handleTabPress(index)}
              className=' flex items-center justify-center text-white -mt-16 bg-orange-600 h-[65px] w-[65px] rounded-full'
            >
              {tabBarIcon()}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={route.key}
              onPress={() => handleTabPress(index)}
              className=' flex-1 items-center  mb-5'
            >
              {tabBarIcon && tabBarIcon()}
              <Text style={{ color: isFocused ? "black" : "gray" }}>
                {tabBarLabel || route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ImageBackground>
  );
};
export default CustomTabBar;
