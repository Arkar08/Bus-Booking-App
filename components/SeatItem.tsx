import useSeat from '@/store/useSeat';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SeatItem = ({item}:any) => {

  const items = item.item;
  const {seatClick} = useSeat();

  return (
    <TouchableOpacity className={`w-[80px] h-[50px] border-[0.5px] justify-center items-center rounded-md ${items.is_booked ? 'bg-gray-400' :'bg-white'}`} onPress={()=>seatClick(items.seat_number)} disabled={items.is_booked}>
      <Text className='text-xl'>{items.seat_number}</Text>
    </TouchableOpacity>
  )
}

export default SeatItem;
