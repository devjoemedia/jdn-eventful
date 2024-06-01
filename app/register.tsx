import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import useSession from "@/hooks/useSession";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterScreen = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  const { signIn, user } = useSession();

  if (user) {
    return router.push("(app)/(tabs)");
  }

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className='flex-1 items-center justify-around bg-white px-5'
    >
      <View className='h-12 w-12 items-center mx-5 self-start justify-center bg-orange-600  rounded-full'>
        <Link href={"/main"}>
          <AntDesign name='back' size={24} color='white' />
        </Link>
      </View>
      <View className='flex-1 w-full px-5 items-center justify-center'>
        <View className=' font-default flex-row mb-10'>
          <Text className='text-orange-600 font-extrabold text-5xl'>Event</Text>
          <Text className='font-extrabold text-5xl'>Master</Text>
        </View>

        <View className='w-full gap-5'>
          <TextInput
            placeholder='username'
            value={username}
            onChangeText={(text: string) => setUsername(text)}
            className=' border-0 h-20 text-2xl bg-orange-50 px-4 py-5 rounded-lg'
          />
          <TextInput
            placeholder='Email'
            value={email}
            onChangeText={(text) => setEmail(text)}
            className=' border-0 h-20 text-2xl bg-orange-50 px-4 py-5 rounded-lg'
          />
          <TextInput
            placeholder='Password'
            value={password}
            onChangeText={(value) => setPassword(email)}
            className=' border-0 h-20 text-2xl bg-orange-50 px-4 py-5 rounded-lg'
          />
        </View>
      </View>

      <View className='px-5 flex-[0.1] mb-5 gap-5 w-full'>
        <Pressable
          onPress={async () => {
            router.push("onboarding");
          }}
          className=' p-2 mt-2 py-4 bg-orange-600 text-white h-20 w-full flex items-center justify-center rounded-xl'
        >
          <Text className=' text-white font-bold text-2xl'>Create Account</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
