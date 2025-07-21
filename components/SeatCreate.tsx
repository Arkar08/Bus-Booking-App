import useSearch from "@/store/useSearch";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SeatCreate = () => {

  const {searchList,seatClick} = useSearch();

  return (
    <View className="flex-row justify-between items-center bg-white rounded-md border-[0.2px] h-[60px] border-gray-400 mt-4">
      <TouchableOpacity className="border-r-[0.2px] h-[100%] border-gray-400 w-[20%] p-[10px] flex justify-center items-center disabled:opacity-80" disabled={searchList.seat === 1} onPress={()=>seatClick('decrese')}>
        <Ionicons name="remove" size={24} color={searchList.seat === 1 ? 'gray':'black'}  />
      </TouchableOpacity>
      <View className=" w-[60%] p-[13px] h-[100%] flex justify-center items-center">
        <Text className="font-semibold" style={{ fontSize: 15 }}>
          {searchList.seat} - Seat
        </Text>
      </View>
      <TouchableOpacity className="border-l-[0.2px] h-[100%] border-gray-400 w-[20%] p-[10px] flex justify-center items-center disabled:opacity-80" onPress={()=> seatClick('increase')} disabled={searchList.seat === 4}>
        <Ionicons name="add" size={24} color={searchList.seat === 4 ? 'gray':'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default SeatCreate;
