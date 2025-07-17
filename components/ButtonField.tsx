import { ButtonProps } from '@/utils/constant';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonField = ({click,text,padding}:ButtonProps) => {
  return (
    <TouchableOpacity className='bg-[var(--primary)] rounded-md hover:opacity-40 h-[50px] flex justify-center items-center' onPress={click} style={{padding:padding}}>
        <Text className='text-xl text-center text-white font-bold'>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonField;

