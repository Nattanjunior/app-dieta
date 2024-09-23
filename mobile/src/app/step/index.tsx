import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Header } from "@/src/components/header";
import { Input } from "@/src/components/input";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { router } from "expo-router";


const schema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  weight: z.string().min(1, { message: "Peso é obrigatório" }),
  age: z.string().min(1, { message: "Idade é obrigatória" }),
  height: z.string().min(1, { message: "Altura é obrigatória" }),
})

type FormData = z.infer<typeof schema>

export default function Step() {

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })


  function handleCreate(data: FormData){
    console.log(data)
    router.push("/create")
  }

  return (
    <View className="flex-1 bg-background">
      <Header step="Passo 1" title="Vamos começar" />

      <ScrollView className="p-4">
        <Text className="text-white">Nome:</Text>
        <Input
          name="name"
          control={control}
          placeholder="Digite seu nome..."
          error={errors.name?.message}
          keyboardType="default"
        />

        <Text className="text-white">Seu peso atual:</Text>
        <Input
          name="weight"
          control={control}
          placeholder="Ex: 75"
          error={errors.weight?.message}
          keyboardType="numeric"
        />

        <Text className="text-white">Sua altura atual:</Text>
        <Input
          name="height"
          control={control}
          placeholder="Ex: 1.80"
          error={errors.height?.message}
          keyboardType="numeric"
        />

        <Text className="text-white">Sua idade atual:</Text>
        <Input
          name="age"
          control={control}
          placeholder="Ex: 20"
          error={errors.age?.message}
          keyboardType="numeric"
        />

        <TouchableOpacity className="bg-blue h-11 justify-center items-center rounded-md" onPress={handleSubmit(handleCreate)}>
          <Text className="text-white text-base font-bold">Avançar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}