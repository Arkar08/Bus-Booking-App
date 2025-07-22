import useSeat from '@/store/useSeat'
import Ionicons from '@expo/vector-icons/Ionicons'
// eslint-disable-next-line import/no-named-as-default
import Checkbox from 'expo-checkbox'
import React from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import ButtonField from './ButtonField'
import ModalBox from './ModalBox'

const SeatModal = () => {

    const {closeModal} = useSeat();

    const saveBtn = () => {
        closeModal()
    }

  return (
    <ModalBox>
        <View className="flex-row justify-end p-4">
          <Pressable onPress={closeModal}>
            <Ionicons name="close" size={24} color={"black"} />
          </Pressable>
        </View>
        <View>
          <Text className="text-center text-2xl font-bold">
            Show Traveller Info
          </Text>
        </View>
        <View className="px-6 mt-8">
          <View className="flex-row justify-center gap-4  items-center h-[60px]">
            <View className="border-[0.5px] w-[46%] h-full rounded-md flex justify-center items-center">
              <Text className="text-center text-xl font-semibold">Yangon</Text>
            </View>
            <Text className="font-semibold text-xl">{"=>"}</Text>
            <View className="border-[0.5px] w-[46%] h-full rounded-md flex justify-center items-center">
              <Text className="text-center text-xl font-semibold">
                Mandalay
              </Text>
            </View>
          </View>
        </View>
        <View className="h-[60px] mt-4 rounded-md bg-white flex justify-center border-[0.5px] px-6 w-[96%] mx-auto">
          <Pressable className="relative">
            <Ionicons
              name="calendar"
              size={24}
              color="#4169E1"
              className="absolute left-8"
            />
            <Text className="text-xl font-semibold text-gray-500 text-center">
              Departure Date
            </Text>
          </Pressable>
        </View>
        <View className="flex-row justify-between items-center bg-white rounded-md border-[0.5px] w-[96%] mx-auto h-[60px] border-gray-400 mt-4">
          <TouchableOpacity className="border-r-[0.2px] h-[100%] border-gray-400 w-[20%] p-[10px] flex justify-center items-center disabled:opacity-80">
            <Ionicons name="remove" size={24} />
          </TouchableOpacity>
          <View className=" w-[60%] p-[13px] h-[100%] flex justify-center items-center">
            <Text className="font-semibold" style={{ fontSize: 15 }}>
              1 - Seat
            </Text>
          </View>
          <TouchableOpacity className="border-l-[0.2px] h-[100%] border-gray-400 w-[20%] p-[10px] flex justify-center items-center disabled:opacity-80">
            <Ionicons name="add" size={24} />
          </TouchableOpacity>
        </View>
        <View className="flex-row  w-[96%] mx-auto items-center bg-white rounded-md h-[60px]  mt-4  border-[0.5px] border-gray-400">
          <Pressable className="w-[50%] flex justify-center items-center flex-row border-r-[0.5px] border-gray-400 h-[100%]  gap-2">
            <Checkbox
              style={{
                borderRadius: 12,
                borderWidth: 2,
                borderColor: "#4169E1",
                width: 24,
                height: 24,
              }}
            />
            <Text className="text-xl">Local</Text>
          </Pressable>
          <Pressable className="w-[50%] flex justify-center items-center flex-row h-[100%] gap-2">
            <Checkbox
              style={{
                borderRadius: 12,
                borderWidth: 2,
                borderColor: "gray",
                width: 24,
                height: 24,
              }}
            />
            <Text className="text-xl">Foreigner</Text>
          </Pressable>
        </View>
        <View className='w-[96%] mt-8 mx-auto'>
            <ButtonField text='Save' padding={8} background={true} click={saveBtn}/>
        </View>
      </ModalBox>
  )
}

export default SeatModal
