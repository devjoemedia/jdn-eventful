import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import useSession from "@/hooks/useSession";

const Register = () => {
  const router = useRouter();
  const { signIn, user } = useSession();

  if (user) {
    return router.push("(app)/(tabs)");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable onPress={() => router.push("login")}>
        <Text>register</Text>
      </Pressable>
    </View>
  );
};

export default Register;
