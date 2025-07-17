import CityCards from '@/components/CityCards';
import InputField from '@/components/InputField';
import React from 'react';
import { View } from 'react-native';

const ChooseDesitination = () => {
  return (
    <View>
      <View className='border-b-[0.5px] mt-2 pb-4 pt-2 rounded-md border-b-gray-400'>
        <View className='w-[96%] mx-auto'>
          <InputField placeholder="Search Destination Location"/>
        </View>
      </View>
      <View className='w-[96%] mx-auto mt-4'>
        <CityCards />
        <CityCards />
        <CityCards />
      </View>
    </View>
  )
}

export default ChooseDesitination;
