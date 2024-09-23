import { Text, View, SafeAreaView, Platform, StatusBar, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons"
import { router } from "expo-router"

interface HeaderProps {
  step: string;
  title: string;
}

export function Header({ step, title }: HeaderProps) {
  return (
    <SafeAreaView className="bg-white rounded-bl-2xl rounded-br-2xl mb-4" style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 34 : 34 }}>

      <View className="p-4 pb-9  rounded-bl-2xl rounded-br-2xl">

        <View className="flex-row gap-2 items-center">
          <Pressable onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color={"#000"} />
          </Pressable>

          <Text className="text-lg">
            {step} <Feather name="loader" size={16} color={"#000"} />
          </Text>
        </View>

        <Text className="text-3xl font-bold text-background">{title}</Text>
      </View>

    </SafeAreaView>
  )
}