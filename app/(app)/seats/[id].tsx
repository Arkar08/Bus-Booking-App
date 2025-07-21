import ButtonField from "@/components/ButtonField";
import SeatItem from "@/components/SeatItem";
import { Seats } from "@/utils/dummy";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const dimension = Dimensions.get("window").height;
const maxHeight = dimension - 370;

const SeatChoiceScreen = () => {
  const router = useRouter();
  const {id} = useLocalSearchParams()
  console.log(id)

  const continueClick = () => {
    console.log("hello");
    router.push("/orderPage");
  };

  return (
    <View>
      <View className="flex-row justify-between items-center px-4 h-[100px] bg-gray-100 border-b-[1px] border-b-gray-300 rounded-md">
        <View>
          <Text className="text-2xl font-bold">Yangon ={">"} Mandalay</Text>
          <Text className="pt-1 text-gray-400">
            Local Traveller, 1 Ticket(s)
          </Text>
          <Text className="pt-1">
            Car Number :{" "}
            <Text className="font-semibold text-gray-400">0004</Text>
          </Text>
        </View>
        <View>
          <Text className="text-xl font-semibold text-green-400">MMK 40000</Text>
          <Text className="font-semibold pt-2">
            2 Seats x 20000
          </Text>
        </View>
      </View>
      <View className="border-[0.2px] mt-2 pb-4 pt-2 border-gray-400 bg-gray-100">
        <View className="w-[96%] mx-auto mt-2">
          <Text className="text-gray-400 pl-4">Driver</Text>
        </View>
      </View>
      <View className="mt-4 px-3" style={{ height: maxHeight }}>
        <FlatList
          data={Seats}
          numColumns={4}
          renderItem={SeatItem}
          keyExtractor={(index) => index}
          contentContainerStyle={{ gap: 8 }}
          columnWrapperStyle={{ gap: 6, justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View className="mt-4 px-4 h-[80px] justify-between items-center border-t-[0.2px] gap-4 border-t-gray-400  rounded-md flex-row">
        <View>
          <View className="flex-row gap-4 pl-2">
            <Text className="font-semibold text-xl">1 ,</Text>
            <Text className="font-semibold text-xl">2 ,</Text>
            <Text className="font-semibold text-xl">35 ,</Text>
            <Text className="font-semibold text-xl">40 ,</Text>
          </View>
        </View>
        <View className="w-[50%] h-[50px] ">
          <ButtonField text="Continue" padding={7} click={continueClick} />
        </View>
      </View>
    </View>
  );
};

export default SeatChoiceScreen;
