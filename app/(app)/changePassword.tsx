import ButtonField from '@/components/ButtonField';
import InputField from '@/components/InputField';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const ChangePasswordScreen = () => {

  const [changePasswordEye,setChangePasswordEye] = useState({
    oldShow:true,
    newShow:true,
    confirmShow:true
  })

  const changePasswordEyeClick = (text:string) => {
    if(text === 'oldShow'){
      setChangePasswordEye((prev) => (
        {
          ...prev,oldShow:!prev.oldShow
        }
      ))
    }else if(text === 'newShow') {
      setChangePasswordEye((prev) => (
        {
          ...prev,newShow:!prev.newShow
        }
      ))
    }else {
      setChangePasswordEye((prev) => (
        {
          ...prev,confirmShow:!prev.confirmShow
        }
      ))
    }
  }


  return (
    <View className='px-4 mt-8'>
      <View className='relative'>
        <Text className='pb-4 text-semibold'>Old Password <Text className='text-red-600'>*</Text></Text>
        <InputField placeholder="Enter Old Password" secureTextEntry={changePasswordEye.oldShow}/>
        <Pressable  className='absolute right-[8%] top-[50%]' onPress={() => changePasswordEyeClick('oldShow')}>
          {
            changePasswordEye.oldShow ? (<Ionicons name="eye-off-outline" size={24} color="black"/>) : (<Ionicons name="eye-outline" size={24} color="black"/>)
          }
        </Pressable>
      </View>
      <View className='mt-4 relative'>
        <Text className='pb-4 text-semibold'>New Password <Text className='text-red-600'>*</Text></Text>
        <InputField placeholder="Enter Old Password" secureTextEntry={changePasswordEye.newShow}/>
         <Pressable  className='absolute right-[8%] top-[50%]' onPress={() => changePasswordEyeClick('newShow')}>
          {
            changePasswordEye.newShow ? (<Ionicons name="eye-off-outline" size={24} color="black"/>) : (<Ionicons name="eye-outline" size={24} color="black"/>)
          }
        </Pressable>
      </View>
      <View className='mt-4 relative'>
        <Text className='pb-4 text-semibold'>Confirm Password <Text className='text-red-600'>*</Text></Text>
        <InputField placeholder="Enter Old Password" secureTextEntry={changePasswordEye.confirmShow}/>
          <Pressable  className='absolute right-[8%] top-[50%]' onPress={() => changePasswordEyeClick('confirmShow')}>
          {
            changePasswordEye.confirmShow ? (<Ionicons name="eye-off-outline" size={24} color="black"/>) : (<Ionicons name="eye-outline" size={24} color="black"/>)
          }
        </Pressable>
      </View>
      <View className='mt-8'>
        <ButtonField text='Change Password' padding={8} background={true}/>
      </View>
    </View>
  )
}

export default ChangePasswordScreen;
