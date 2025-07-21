import useSearch from '@/store/useSearch';
import { Checkbox } from 'expo-checkbox';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const LocalCheckBox = () => {

  const {searchList,choiceNationally,errorList} = useSearch()

  return (
    <View className={`flex-row  items-center bg-white rounded-md h-[60px]  mt-4 ${errorList.errorNationality ? "border-[2px] border-red-500":" border-[0.2px] border-gray-400"}`}>
        <Pressable className='w-[50%] flex justify-center items-center flex-row border-r-[0.5px] border-gray-400 h-[100%]  gap-2' onPress={()=>choiceNationally('Local')}>
          <Checkbox value={searchList.nationality === 'Local'} style={{borderRadius:12,borderWidth:2,borderColor:'#4169E1',width:24,height:24}} color={searchList.nationality === 'Local'? '#4169E1' : undefined} onValueChange={()=>choiceNationally('Local')}/>
          <Text className='text-xl'>Local</Text>
        </Pressable>
        <Pressable className='w-[50%] flex justify-center items-center flex-row h-[100%] gap-2' onPress={()=>choiceNationally('Foreign')}>
          <Checkbox value={searchList.nationality === 'Foreign'} style={{borderRadius:12,borderWidth:2,borderColor:'gray',width:24,height:24}} color={searchList.nationality === 'Foreign'? '#4169E1' : undefined} onValueChange={()=>choiceNationally('Foreign')}/>
          <Text className='text-xl'>Foreigner</Text>
        </Pressable>
      </View>
  )
}

export default LocalCheckBox;
