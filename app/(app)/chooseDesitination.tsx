import DestinationCard from '@/components/DestinationCard';
import InputField from '@/components/InputField';
import React from 'react';
import { View } from 'react-native';

const ChooseDesitination = () => {
  return (
    <View>
      <View className='border-b-[0.5px] mt-2 pb-4 pt-2 rounded-md border-b-gray-400'>
        <View className='w-[100%] px-3'>
          <InputField placeholder="Search Destination Location"/>
        </View>
      </View>
      <View className='w-[100%] px-3 mt-4'>
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </View>
    </View>
  )
}

export default ChooseDesitination;
