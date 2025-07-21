import useSearch from "@/store/useSearch";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

const CityCards = () => {

  const {sourceClick} = useSearch();
  const router = useRouter();
  
  const dataClick = (text:string) => {
    sourceClick(text)
    router.push('/(tabs)')
  }

  return (
    <Pressable className="border-[0.5px] p-3 mt-2 rounded-md flex-row justify-between items-center" onPress={()=>dataClick('Yangon')}>
      <Text style={{ fontSize: 16 }}>Yangon</Text>
      <Ionicons name="arrow-forward-outline" size={24} color="black" />
    </Pressable>
  );
};

export default CityCards;
