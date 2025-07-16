import { ButtonProps } from '@/utils/constant';
import React from 'react';
import { Pressable, Text } from 'react-native';

const ButtonField = ({click,text,padding}:ButtonProps) => {
  return (
    <Pressable className='bg-[var(--primary)] rounded-md hover:opacity-40' onPress={click} style={{padding:padding}}>
        <Text className='text-xl text-center text-white font-bold'>{text}</Text>
    </Pressable>
  )
}

export default ButtonField;

