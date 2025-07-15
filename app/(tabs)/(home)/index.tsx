import ButtonField from '@/components/ButtonField'
import SelectField from '@/components/SelectField'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {

  const router = useRouter()

  const handlePress = () => {
    router.push('/carShow')
  }

  return (
    <SafeAreaView>
      <View className='flex flex-row gap-2'>
         <View  className='w-[47%] mx-auto mt-2'>
          <Text className='p-2 text-2xl font-bold'>From</Text>
          <SelectField/>
         </View>
        <View className='w-[47%] mx-auto mt-2'>
          <Text className='p-2 text-2xl font-bold'>To</Text>
          <SelectField/>
        </View>
      </View>
      <View className='flex flex-row gap-2 mt-4'>
        <View className='w-[47%] mx-auto mt-2'>
          <Text className='p-2 text-xl font-bold text-nowrap'>Nationally(နိုင်ငံသား)</Text>
          <SelectField/>
        </View>
        <View className='w-[47%] mx-auto mt-2'>
          <Text className='p-2 text-xl font-bold text-nowrap'>Travellers(လူဦး‌ရေ)</Text>
          <SelectField/>
        </View>
      </View>
      <View className='w-[90%] mx-auto mt-8'>
        <ButtonField click={handlePress} text="Search"/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
