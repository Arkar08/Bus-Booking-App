import CityCards from '@/components/CityCards';
import InputField from '@/components/InputField';
import React from 'react';
import { View } from 'react-native';

const ChooseSourceLocation = () => {
  return (
    <View>
      <View className='border-b-[0.5px] mt-2 pb-4 pt-2 rounded-md border-b-gray-400'>
        <View className='w-[100%] px-3'>
          <InputField placeholder="Search Soucre Location"/>
        </View>
      </View>
      <View className='w-[100%] mt-4 px-3'>
        <CityCards />
        <CityCards />
        <CityCards />
      </View>
    </View>
  )
}

export default ChooseSourceLocation;
