import { ButtonProps } from '@/utils/constant';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonField = ({click,text,padding,disabled}:ButtonProps) => {
  return (
    <TouchableOpacity className='bg-[var(--primary)] rounded-md hover:opacity-40 h-[45px] flex justify-center items-center disabled:bg-gray-400' onPress={click} style={{padding:padding}} disabled={disabled}>
        <Text className='text-xl text-center text-white font-bold'>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonField;

