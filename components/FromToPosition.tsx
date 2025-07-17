import { FromToPositionProps } from '@/utils/constant'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const FromToPosition = ({fromSourceClick,toDestinationClick}:FromToPositionProps) => {
  return (
    <View className='flex flex-row mt-2 items-center justify-center h-[80px]'>
         <Pressable  className='w-[50%] mt-2 border-[0.2px] rounded-tl-md rounded-bl-md h-[100%]  border-gray-400 bg-white justify-center items-center' onPress={fromSourceClick}>
          <Text className='p-2 text-xl font-bold text-center text-gray-500'>From</Text>
          <Ionicons name="caret-down" size={24} color="#4169E1" />
         </Pressable>
        <Pressable className='w-[50%] mt-2 border-[0.2px] rounded-tr-md rounded-br-md h-[100%] border-gray-400 bg-white justify-center items-center' onPress={toDestinationClick}>
          <Text className='p-2 text-xl font-bold text-center text-gray-500'>To</Text>
          <Ionicons name="caret-down" size={24} color="#4169E1" />
        </Pressable>
      </View>
  )
}

export default FromToPosition;
