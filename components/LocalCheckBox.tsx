import useSearch from '@/store/useSearch';
import { Checkbox } from 'expo-checkbox';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const LocalCheckBox = () => {

  const {isForeignChecked,isLocalChecked,localClick,foreignClick} = useSearch()

  return (
    <View className='flex-row  items-center bg-white rounded-md border-[0.2px] h-[60px] border-gray-400 mt-4'>
        <Pressable className='w-[50%] flex justify-center items-center flex-row border-r-[0.5px] border-gray-400 h-[100%]  gap-2' onPress={localClick}>
          <Checkbox value={isLocalChecked} style={{borderRadius:12,borderWidth:2,borderColor:'#4169E1',width:24,height:24}} color={isLocalChecked? '#4169E1' : undefined} onValueChange={localClick}/>
          <Text className='text-xl'>Local</Text>
        </Pressable>
        <Pressable className='w-[50%] flex justify-center items-center flex-row h-[100%] gap-2' onPress={foreignClick}>
          <Checkbox value={isForeignChecked} style={{borderRadius:12,borderWidth:2,borderColor:'gray',width:24,height:24}} color={isForeignChecked? '#4169E1' : undefined} onValueChange={foreignClick}/>
          <Text className='text-xl'>Foreigner</Text>
        </Pressable>
      </View>
  )
}

export default LocalCheckBox;
