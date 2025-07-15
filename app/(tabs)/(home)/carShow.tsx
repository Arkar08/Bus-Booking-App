import ButtonField from '@/components/ButtonField'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CarShowScreen = () => {

    const router = useRouter()

    const handleClick = () => {
        router.push('/seatChoice')
    }
  return (
    <SafeAreaView>
      <Text>CarShowScreen</Text>
      <ButtonField click={handleClick} text="Choose Seat"/>
    </SafeAreaView>
  )
}

export default CarShowScreen
