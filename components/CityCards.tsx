import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

const CityCards = () => {
  return (
    <View className="border-[0.5px] p-3 mt-2 rounded-md flex-row justify-between items-center">
      <Text style={{ fontSize: 16 }}>Yangon</Text>
      <Ionicons name="arrow-forward-outline" size={24} color="black" />
    </View>
  );
};

export default CityCards;
