/* eslint-disable import/no-named-as-default */
import ButtonField from '@/components/ButtonField'
import Ionicons from '@expo/vector-icons/Ionicons'
import DateTimePicker from '@react-native-community/datetimepicker'
import Checkbox from 'expo-checkbox'
import { useRouter } from 'expo-router'
import moment from 'moment'
import React, { useState } from 'react'
import { Dimensions, Pressable, Text, View } from 'react-native'

const dimension = Dimensions.get('window').height;

const HomeScreen = () => {

  const router = useRouter();
  const [date,setDate] = useState(new Date())
  const [showDate,setShowDate] = useState(false)
  const [isChecked,setIsChecked] = useState(false)
  const [textDate,setTextDate] = useState('')

  const handlePress = () => {
    router.push('/carShow')
  }

  const fromSourceClick = () => {
    router.push('/chooseSourceLocation')
  }

  const toDestinationClick = () => {
    router.push('/chooseDesitination')
  }

  const dateChange = ({type}:any,selectDate:any) => {
    if(type === 'set'){
      const currentDate = selectDate;
      console.log(currentDate)
      setTextDate(currentDate)
      setDate(currentDate)
      setShowDate(false)
    }else{
      departureTime()
    }
  }

  const departureTime = () => {
     setShowDate(!showDate)
  }

  const checkBoxCheck = () => {
    setIsChecked(!isChecked)
  }


  return (
    <View className='p-4 bg-gray-200' style={{height:dimension}}>
      <View className='flex flex-row mt-2 items-center justify-center h-[80px]'>
         <Pressable  className='w-[50%] mt-2 border-[0.5px] rounded-tl-md rounded-bl-md h-[100%]  border-gray-400 bg-white justify-center items-center' onPress={fromSourceClick}>
          <Text className='p-2 text-xl font-bold text-center text-gray-500'>From</Text>
          <Ionicons name="caret-down" size={24} color="#4169E1" />
         </Pressable>
        <Pressable className='w-[50%] mt-2 border-[0.5px] rounded-tr-md rounded-br-md h-[100%] border-gray-400 bg-white justify-center items-center' onPress={toDestinationClick}>
          <Text className='p-2 text-xl font-bold text-center text-gray-500'>To</Text>
          <Ionicons name="caret-down" size={24} color="#4169E1" />
        </Pressable>
      </View>
      <View className='h-[60px] border-[0.5px] border-gray-400 mt-4 rounded-md bg-white flex justify-center'>
        {
          showDate && (
            <DateTimePicker mode='date' minimumDate={new Date()}  value={date} is24Hour locale="en-US" onChange={dateChange}/>
          )
        }
        {
          !showDate && (
          <Pressable onPress={departureTime} className='relative'>
            <Ionicons name='calendar' size={24} color='#4169E1' className='absolute left-8'/>
            <Text className='text-xl font-semibold text-gray-500 text-center'>{textDate === '' ? 'Departure Date': moment(textDate).format("MMM Do YY") }</Text>
          </Pressable>
          )
        }
      </View>
      <View className='flex-row justify-between items-center bg-white rounded-md border-[0.5px] h-[60px] border-gray-400 mt-4'>
        <Pressable className='border-r-[0.5px] h-[100%] border-gray-400 w-[20%] p-[10px] flex justify-center items-center'>
          <Ionicons name='remove'size={24} color='black'/>
        </Pressable>
        <View className=' w-[60%] p-[13px] h-[100%] flex justify-center items-center'>
          <Text className='font-semibold' style={{fontSize:15}}>1 - Seat</Text>
        </View>
        <Pressable className='border-l-[0.5px] h-[100%] border-gray-400 w-[20%] p-[10px] flex justify-center items-center'>
          <Ionicons name='add' size={24} color='black'/>
        </Pressable>
      </View>
      <View className='flex-row  items-center bg-white rounded-md border-[0.5px] h-[60px] border-gray-400 mt-4'>
        <View className='w-[50%] flex justify-center items-center flex-row border-r-[0.5px] border-gray-400 h-[100%]  gap-2'>
          <Checkbox value={isChecked} style={{borderRadius:12,borderWidth:2,borderColor:'#4169E1',width:24,height:24}} color={isChecked? '#4169E1' : undefined} onValueChange={checkBoxCheck}/>
          <Text className='text-xl'>Local</Text>
        </View>
        <View className='w-[50%] flex justify-center items-center flex-row h-[100%] gap-2'>
          <Checkbox value={isChecked} style={{borderRadius:12,borderWidth:2,borderColor:'gray',width:24,height:24}} color={isChecked? '#4169E1' : undefined} onValueChange={checkBoxCheck}/>
          <Text className='text-xl'>Foreigner</Text>
        </View>
      </View>
      <View className='w-[100%] mx-auto mt-8'>
        <ButtonField click={handlePress} text="Search Now" padding={15}/>
      </View>
    </View>
  )
}

export default HomeScreen
