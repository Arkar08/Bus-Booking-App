import React from 'react'
import { Text, View } from 'react-native'

const HistoryCard = () => {
  return (
    <View className='border-[0.5px] w-[96%] px-4 mx-auto rounded-md mt-4 p-2 flex-row justify-between items-center'> 
        <View>
            <Text className='text-xl font-semibold text-center'>Yangon   {'=>'}  <Text>Mandalay</Text></Text>
            <Text className='font-semibold pt-2' style={{fontSize:15}}>Aung Aung</Text>
            <Text className='pt-2 text-gray-500'>27 July 2025</Text>
        </View>
        <View>
            <Text>MMK <Text className='text-green-500 font-semibold text-xl'>16000 Ks</Text></Text>
        </View>
    </View>
  )
}

export default HistoryCard
