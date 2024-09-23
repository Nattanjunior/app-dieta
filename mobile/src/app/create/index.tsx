import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { Header } from "@/src/components/header";


export default function Create() {
 return (
   <View className="flex-1 bg-background">
    <Header
    step="Passo 2"
    title="Finalizando Dieta"
    />
   </View>
  );
}