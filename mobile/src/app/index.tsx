import { Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-background p-4">
      <Image
        source={require('../../assets/images/logo.png')}
      />
      <Text className="text-Togreen text-[2.5rem] font-bold">
        Easy<Text className="text-white">Diet</Text>
      </Text>

      <Text className="text-white text-[1rem] w-60 text-center m-2">Sua dieta personalizada com inteligência artificial</Text>

      <Link href={"/step"} asChild>
        <TouchableOpacity className="bg-blue w-full h-10 rounded-md justify-center items-center mt-9">
          <Text className="text-white text-base font-bold">Gerar Dieta</Text>
        </TouchableOpacity>
      </Link>

    </View>
  );
}
