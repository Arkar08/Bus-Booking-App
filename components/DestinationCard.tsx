import useSearch from "@/store/useSearch";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

const DestinationCard = () => {

  const {destinaionClick} = useSearch();
  const router = useRouter();
  
  const dataClick = (text:string) => {
    destinaionClick(text)
    router.push('/(tabs)/(home)')
  }

  return (
    <Pressable className="border-[0.5px] p-3 mt-2 rounded-md flex-row justify-between items-center" onPress={()=>dataClick('Mandalay')}>
      <Text style={{ fontSize: 16 }}>Yangon</Text>
      <Ionicons name="arrow-forward-outline" size={24} color="black" />
    </Pressable>
  );
};

export default DestinationCard;
