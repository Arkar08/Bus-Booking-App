import ButtonField from "@/components/ButtonField";
import InputField from "@/components/InputField";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Text, View } from "react-native";

const dimension = Dimensions.get('window').height;

const maxHeight = dimension - 380;

const orderPage = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const submitOrder = () => {
    router.push('/(app)/(tabs)/history')
  }

  return (
    <View className="relative">
      <View className="flex-row justify-between items-center px-4 py-2 bg-gray-100 border-b-[1px] border-b-gray-300 rounded-md">
        <View>
          <Text className="text-2xl font-bold">Yangon ={">"} Mandalay</Text>
          <Text className="pt-2 text-gray-400">
            Local Traveller, 1 Ticket(s)
          </Text>
          <Text className="font-semibold pt-1">Yutong</Text>
          <Text className="pt-2">
            Car Number :{" "}
            <Text className="font-semibold text-gray-400">0004</Text>
          </Text>
          <View className="pt-2">
            <Text>Yangon Jul 18, 05:00 AM (departure)</Text>
            <Text>Mandalay Jul 18, 12:30 PM (ETA)</Text>
          </View>
          <Text className="pt-2">Seat Numbers: <Text className="font-semibold">33</Text></Text>
        </View>
        <View>
          <Text className="text-xl font-semibold text-green-400">MMK 40000</Text>
          <Text className="font-semibold pt-2">
           2 Seats x 20000
          </Text>
        </View>
      </View>
      <View style={{height:maxHeight,overflowY:'auto'}} className="px-3">
        <View className="mt-3">
          <Text className="mb-2">Traveller Name <Text className="text-red-600">*</Text></Text>
          <InputField placeholder="Enter Traveller Name"/>
        </View>
        <View className="mt-3">
          <Text className="mb-2">Phone Number <Text className="text-red-600">*</Text></Text>
          <InputField placeholder="09---------" keyboardType={'numeric'}/>
          <Text className="mt-1"> The confirmation SMS will be sent to this number.</Text>
        </View>
        <View className="mt-3 relative">
          <Text className="mb-2">Email</Text>
          <Text className="absolute right-0 top-1 text-gray-500 font-semibold">optional</Text>
          <InputField plaeholder="example@gmail.com" keyboardType={'email-address'}/>
          <Text className="mt-1"> The confirmation email will be sent to this email.</Text>
        </View>
        <View className="mt-3 relative">
          <Text className="mb-2">Special Request</Text>
          <Text className="absolute right-0 top-1 text-gray-500 font-semibold">optional</Text>
          <InputField />
        </View>
      </View>
      <View className="h-[60px] w-[100%] px-3">
        <View className="w-[100%]">
          <ButtonField text="Submit" padding={8} click={submitOrder}/>
        </View>
      </View>
    </View>
  );
};

export default orderPage;
