import ButtonField from '@/components/ButtonField'
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
      <Text>HomeScreen</Text>
      <View className='w-[90%] mx-auto mt-2'>
        <ButtonField click={handlePress} text="Search"/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
