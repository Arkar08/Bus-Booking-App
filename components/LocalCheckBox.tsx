import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const LocalCheckBox = () => {

    const [isChecked,setIsChecked] = useState(false)

    const checkBoxCheck = () => {
        setIsChecked(!isChecked)
    }

  return (
    <View className='flex-row  items-center bg-white rounded-md border-[0.2px] h-[60px] border-gray-400 mt-4'>
        <View className='w-[50%] flex justify-center items-center flex-row border-r-[0.5px] border-gray-400 h-[100%]  gap-2'>
          <Checkbox value={isChecked} style={{borderRadius:12,borderWidth:2,borderColor:'#4169E1',width:24,height:24}} color={isChecked? '#4169E1' : undefined} onValueChange={checkBoxCheck}/>
          <Text className='text-xl'>Local</Text>
        </View>
        <View className='w-[50%] flex justify-center items-center flex-row h-[100%] gap-2'>
          <Checkbox value={isChecked} style={{borderRadius:12,borderWidth:2,borderColor:'gray',width:24,height:24}} color={isChecked? '#4169E1' : undefined} onValueChange={checkBoxCheck}/>
          <Text className='text-xl'>Foreigner</Text>
        </View>
      </View>
  )
}

export default LocalCheckBox;
