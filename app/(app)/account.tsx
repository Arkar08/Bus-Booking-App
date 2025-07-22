import ButtonField from '@/components/ButtonField';
import InputField from '@/components/InputField';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

const profile = require('../../assets/images/boy.jpg')

const AccountScreen = () => {
  return (
    <View className='px-4 mt-8'>
      <View className='w-[120px] h-[120px] rounded-full mx-auto mt-4 bg-black relative'>
        <Image source={profile} className='w-full h-full rounded-full object-cover'/>
        <Pressable className='absolute top-[70%] right-0 z-100'>
          <MaterialIcons name="camera-enhance" size={32} color="black" />
        </Pressable>
      </View>
      <View className='mt-4'>
        <Text className='pb-4 text-semibold'>Name</Text>
        <InputField placeholder="Enter Name"/>
      </View>
      <View  className='mt-4'>
        <Text className='pb-4 text-semibold'>Email</Text>
        <InputField placeholder="Enter Email" keyboardType={'email-address'}/>
      </View>
      <View  className='mt-4'>
        <Text className='pb-4 text-semibold'>Phone</Text>
        <InputField placeholder="Enter Phone Number" keyboardType={'numeric'}/>
      </View>
      <View className='mt-8'>
        <ButtonField text='Save' padding={8} background={true}/>
      </View>
    </View>
  )
}

export default AccountScreen