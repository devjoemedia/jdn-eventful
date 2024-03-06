import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export default function PaymentModal({ isVisible, children, onClose }: Props) {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
      <View className=' h-[100%] bg-[#000]/70 absolute bottom-0 w-full'>
        <View className=' h-[40%] bg-white absolute bottom-0 w-full rounded-tr-2xl rounded-tl-2xl'>
          <View className=' h-[12%] bg-orange-600 flex flex-row items-center justify-between rounded-tr-2xl rounded-tl-2xl px-2'>
            <Text className=' text-white text-xl'>Payment</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name='close' color='#fff' size={22} />
            </Pressable>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}
