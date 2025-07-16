 
import ButtonField from '@/components/ButtonField'
import DepartureDate from '@/components/DepartureDate'
import FromToPosition from '@/components/FromToPosition'
import LocalCheckBox from '@/components/LocalCheckBox'
import SeatCreate from '@/components/SeatCreate'
import { useRouter } from 'expo-router'
import React from 'react'
import { Dimensions, View } from 'react-native'

const dimension = Dimensions.get('window').height;

const HomeScreen = () => {

  const router = useRouter();


  const handlePress = () => {
    router.push('/carShow')
  }

  const fromSourceClick = () => {
    router.push('/chooseSourceLocation')
  }

  const toDestinationClick = () => {
    router.push('/chooseDesitination')
  }


  return (
    <View className='p-4 bg-gray-200' style={{height:dimension}}>
      <FromToPosition toDestinationClick={toDestinationClick} fromSourceClick={fromSourceClick}/>
      <DepartureDate />
      <SeatCreate />
      <LocalCheckBox />
      <View className='w-[100%] mx-auto mt-8'>
        <ButtonField click={handlePress} text="Search Now" padding={15}/>
      </View>
    </View>
  )
}

export default HomeScreen
