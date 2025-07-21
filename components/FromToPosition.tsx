import useSearch from '@/store/useSearch'
import { FromToPositionProps } from '@/utils/constant'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const FromToPosition = ({fromSourceClick,toDestinationClick}:FromToPositionProps) => {

  const {searchList,errorList} = useSearch()

  return (
    <View className='flex flex-row mt-2 items-center justify-center h-[80px]'>
         <Pressable  className={`w-[50%] mt-2 rounded-tl-md rounded-bl-md h-[100%]  bg-white justify-center items-center ${errorList.errorFrom ?'border-red-500 border-[2px]' : ' border-[0.2px] border-gray-400'}`} onPress={fromSourceClick}>
          <Text className='p-2 text-xl font-bold text-center text-gray-500'>{searchList.from === '' ? 'From':searchList.from}</Text>
          <Ionicons name="caret-down" size={24} color="#4169E1" />
         </Pressable>
        <Pressable className={`w-[50%] mt-2  rounded-tr-md rounded-br-md h-[100%]  bg-white justify-center items-center disabled:opacity-80 ${errorList.errorTo ?'border-red-500 border-[2px]' : ' border-[0.2px] border-gray-400'}`} onPress={toDestinationClick} disabled={searchList.from === ''}>
          <Text className='p-2 text-xl font-bold text-center text-gray-500'>{searchList.to === '' ? 'To':searchList.to}</Text>
          <Ionicons name="caret-down" size={24} color={searchList.from === '' ? 'gray':"#4169E1"} />
        </Pressable>
      </View>
  )
}

export default FromToPosition;
