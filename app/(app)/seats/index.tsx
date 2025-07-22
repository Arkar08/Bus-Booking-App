import CarCard from '@/components/CarCard';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const windowHeight = Dimensions.get('window').height;
const mainHeight = windowHeight - 230;

const CarShowScreen = () => {
  return (
    <View>
      <View className='flex-row justify-between items-center px-4 h-[80px] bg-gray-100 border-b-[1px] border-b-gray-300 rounded-md'>
        <View>
          <Text className='text-2xl font-bold'>Yangon ={'>'} Mandalay</Text>
          <Text className='pt-2 text-gray-400'>Local Traveller, 1 Ticket(s)</Text>
        </View>
        <View className='px-4'>
          <Feather name="edit" size={24} color="blue" />
        </View>
      </View>
      <ScrollView className='mt-2 w-[100%] px-3 mx-auto' style={{height:mainHeight}} showsVerticalScrollIndicator={false}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </ScrollView>
    </View>
  )
}

export default CarShowScreen;
