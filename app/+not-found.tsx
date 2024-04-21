import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function NotFound() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
      <Pressable onPress={()=> router.push('register')}>
        <Text>Not Found</Text>
      </Pressable>
    </View>
  );
}
