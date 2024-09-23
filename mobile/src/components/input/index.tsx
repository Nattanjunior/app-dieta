import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import { Controller } from 'react-hook-form';

interface InputProps {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
  keyboardType: KeyboardTypeOptions
}

export function Input({ name, control, placeholder, rules, error, keyboardType }: InputProps) {
  return (
    <View className='mb-4'>
      <Controller
        control={control}
        name={name}
        rules={rules}

        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className='h-11 bg-white p-3 rounded-md'
            placeholder={placeholder}
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
            keyboardType={keyboardType}
          />
        )}
      />

      {error && <Text className='text-red-600 mt-1'>{error}</Text>}

    </View>
  );
}