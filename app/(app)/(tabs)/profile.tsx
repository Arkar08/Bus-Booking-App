import useAuth from '@/store/useAuth';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';


const profile = require('../../../assets/images/boy.jpg')


const ProfileScreen = () => {


  const router =  useRouter();
  const {logout} = useAuth();

  const logoutScreen = () => {
    logout()
    router.push('/auth/login')
  }

  const editProfile = () => {
    router.push('/account')
  }

  const changePassword = () => {
    router.push('/changePassword')
  }

  const orderList = () => {
    router.push('/orderList')
  }

  return (
    <View className='flex-1'>
      <View className='mx-auto mt-8'>
          <View className='w-[120px] h-[120px] rounded-full mx-auto mt-4 bg-black'>
            <Image source={profile} className='w-full h-full rounded-full object-cover'/>
          </View>
          <View className='mt-4'>
            <View className='flex-row justify-center items-center gap-3'>
              <Text className='text-center text-xl font-semibold'>Arkar</Text>
              <Pressable onPress={editProfile}>
                <Feather name="edit" size={22} color="blue" />
              </Pressable>
            </View>
            <Text className='text-center text-xl pt-1'>arkar@gmail.com</Text>
          </View>
      </View>
      <View className='mt-4'>
        <Pressable className='w-[96%] mx-auto p-4 h-[60px] rounded-md flex-row gap-4 mt-4' onPress={changePassword}>
          <MaterialIcons name="password" size={24} color="black" />
          <Text style={{fontSize:16,fontWeight:'bold'}} className='text-center'>Change Password</Text>
        </Pressable>
        <Pressable className='w-[96%] mx-auto p-4 h-[60px] rounded-md flex-row gap-6 mt-4' onPress={orderList}>
          <FontAwesome5 name="file-invoice-dollar" size={24} color="black" />
          <Text style={{fontSize:16,fontWeight:'bold'}} className='text-center'>Order Lists</Text>
        </Pressable>
         <Pressable className='w-[96%] mx-auto p-4 h-[60px] rounded-md flex-row gap-4 mt-4' onPress={logoutScreen}>
          <MaterialIcons name="logout" size={24} color="black" />
          <Text style={{fontSize:16,fontWeight:'bold'}} className='text-center'>Logout</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ProfileScreen;
