import { ButtonProps } from '@/utils/constant';
import React from 'react';
import { Pressable, Text } from 'react-native';

const ButtonField = ({click,text}:ButtonProps) => {
  return (
    <Pressable className='bg-[var(--primary)] p-2 rounded-md hover:opacity-40' onPress={click}>
        <Text className='text-xl text-center text-white font-bold'>{text}</Text>
    </Pressable>
  )
}

export default ButtonField;

