import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SeatItem = ({item}:any) => {

    const seatClick = (id:string) => {
        console.log(id)
    }

  return (
    <TouchableOpacity className='w-[80px] h-[50px] border-2 justify-center items-center rounded-md' onPress={()=>seatClick(item)}>
      <Text className='text-xl'>{item}</Text>
    </TouchableOpacity>
  )
}

export default SeatItem;
