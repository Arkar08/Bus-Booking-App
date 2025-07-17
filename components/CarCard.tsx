import { useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import ButtonField from './ButtonField'

const CarCard = () => {

  const router = useRouter()

  const chooseSeatPage = () => {
    router.push('/seatChoice')
  }
  return (
    <View className='border-[0.2px] mt-2 border-gray-400 h-[250px] rounded-md bg-white px-2'>
      <View className='h-[75%] px-2 flex-row justify-between items-center'>
        <View className='w-[60%]'>
          <Text className='font-semibold pt-2'>001</Text>
          <Text className='font-semibold pt-2'>Testings</Text>
          <Text className='pt-2'>Driver Name - <Text className='font-semibold'>Aung Aung</Text></Text>
          <Text className='pt-2'>Departure_time - <Text className='font-semibold'>24/Jun/2025 3:00AM</Text></Text>
          <Text className='pt-2'>Arrival_time - <Text className='font-semibold'>24/Jun/2025 3:00AM</Text></Text>
        </View>
        <View>
          <Text>MMK <Text className='text-green-500 font-semibold'>16000 Ks</Text></Text>
        </View>
      </View>
      <View className='h-[20%] border-t-[0.5px] px-2'>
        <View className='flex-row gap-2 justify-between items-center mt-4'>
            <ButtonField text='About Cars' padding={6}/>
            <ButtonField text='Choose Seat' click={chooseSeatPage} padding={6}/>
        </View>
      </View>
    </View>
  )
}

export default CarCard;
