import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const SeatCreate = () => {
  return (
    <View className="flex-row justify-between items-center bg-white rounded-md border-[0.5px] h-[60px] border-gray-400 mt-4">
      <Pressable className="border-r-[0.5px] h-[100%] border-gray-400 w-[20%] p-[10px] flex justify-center items-center">
        <Ionicons name="remove" size={24} color="black" />
      </Pressable>
      <View className=" w-[60%] p-[13px] h-[100%] flex justify-center items-center">
        <Text className="font-semibold" style={{ fontSize: 15 }}>
          1 - Seat
        </Text>
      </View>
      <Pressable className="border-l-[0.5px] h-[100%] border-gray-400 w-[20%] p-[10px] flex justify-center items-center">
        <Ionicons name="add" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default SeatCreate;
