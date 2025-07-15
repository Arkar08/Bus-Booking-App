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
    <View className='border-[1px] h-[250px] rounded-md mt-4'>
      <View className='h-[75%] px-2 flex-row justify-between items-center'>
        <View className='w-[60%]'>
          <Text className='text-xl font-bold'>001</Text>
          <Text className='text-xl font-bold'>Testings</Text>
          <Text className='text-xl'>Driver Name - <Text className='font-bold'>Aung Aung</Text></Text>
          <Text className='text-xl'>Departure_time - <Text>24/Jun/2025 3:00AM</Text></Text>
          <Text className='text-xl'>Arrival_time - <Text>24/Jun/2025 3:00AM</Text></Text>
        </View>
        <View>
          <Text className='text-xl font-bold'>MMK <Text className='text-green-500'>16000 Ks</Text></Text>
        </View>
      </View>
      <View className='h-[25%] border-t-[1px] px-2'>
        <View className='flex-row gap-2 justify-between items-center mt-4'>
            <ButtonField text='About Cars'/>
            <ButtonField text='Choose Seat' click={chooseSeatPage}/>
        </View>
      </View>
    </View>
  )
}

export default CarCard;
