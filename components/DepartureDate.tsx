import useSearch from '@/store/useSearch'
import Ionicons from '@expo/vector-icons/Ionicons'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const DepartureDate = () => {

    const {departureTime,dateChange,searchList,showDate,errorList} = useSearch();


  return (
    <View className={`h-[60px] mt-4 rounded-md bg-white flex justify-center ${errorList.errorDate ? " border-[2px] border-red-500" : " border-[0.2px] border-gray-400"}`}>
        {
          showDate && (
            <DateTimePicker mode='date' minimumDate={new Date()}  value={searchList.date} is24Hour locale="en-US" onChange={dateChange}/>
          )
        }
        {
          !showDate && (
          <Pressable onPress={departureTime} className='relative'>
            <Ionicons name='calendar' size={24} color='#4169E1' className='absolute left-8'/>
            <Text className='text-xl font-semibold text-gray-500 text-center'>{searchList.date.toDateString() === new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), 0, 0, 0, 0)).toDateString() ? 'Departure Date': moment(searchList.date).format("MMM Do YY") }</Text>
          </Pressable>
          )
        }
      </View>
  )
}

export default DepartureDate;

