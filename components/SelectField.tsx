import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const SelectField = () => {
  const [active,setActive] = useState(false)

  const selectClick = () => {
    setActive(!active)
  }

  return (
    <View className='relative'>
      <Pressable className='flex-row justify-between items-center p-3 border-[1px] rounded-md'onPress={selectClick}>
        <Text className='text-xl'>SelectField</Text>
        {
          active ? <Ionicons name="caret-up" size={24} color="black" />:<Ionicons name="caret-down" size={24} color="black" />
        }
      </Pressable>
      {
        active && (
          <ScrollView showsVerticalScrollIndicator={false} className='border-[1px] mt-1 rounded-md h-[160px] absolute w-[100%] top-[50px] bg-gray-300  z-50'>
            <Pressable className='p-2 h-[50px] border-b-[1px] border-solid rounded-md'>
              <Text className='ml-2 text-xl'>hello</Text>
            </Pressable>
            <Pressable className='p-2  h-[50px]  border-b-[1px] border-solid rounded-md'>
              <Text className='ml-2 text-xl'>hello</Text>
            </Pressable>
            <Pressable className='p-2  h-[50px]  border-b-[1px] border-solid rounded-md'>
              <Text className='ml-2 text-xl'>hello</Text>
            </Pressable>
            <Pressable className='p-2  h-[50px]  border-b-[1px] border-solid rounded-md'>
              <Text className='ml-2 text-xl'>hello</Text>
            </Pressable>
            <Pressable className='p-2  h-[50px]  border-b-[1px] border-solid rounded-md'>
              <Text className='ml-2 text-xl'>yet</Text>
            </Pressable>
          </ScrollView>
        )
      }
    </View>
  )
}

export default SelectField