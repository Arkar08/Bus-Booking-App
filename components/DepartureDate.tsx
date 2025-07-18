import useSearch from '@/store/useSearch'
import Ionicons from '@expo/vector-icons/Ionicons'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const DepartureDate = () => {

    const {departureTime,dateChange,dateData} = useSearch();

  return (
    <View className='h-[60px] border-[0.2px] border-gray-400 mt-4 rounded-md bg-white flex justify-center'>
        {
          dateData.showDate && (
            <DateTimePicker mode='date' minimumDate={new Date()}  value={dateData.date} is24Hour locale="en-US" onChange={dateChange}/>
          )
        }
        {
          !dateData.showDate && (
          <Pressable onPress={departureTime} className='relative'>
            <Ionicons name='calendar' size={24} color='#4169E1' className='absolute left-8'/>
            <Text className='text-xl font-semibold text-gray-500 text-center'>{dateData.textDate === '' ? 'Departure Date': moment(dateData.textDate).format("MMM Do YY") }</Text>
          </Pressable>
          )
        }
      </View>
  )
}

export default DepartureDate;

