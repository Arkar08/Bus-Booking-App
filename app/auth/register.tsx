/* eslint-disable react-hooks/rules-of-hooks */
import ButtonField from "@/components/ButtonField";
import InputField from "@/components/InputField";
import useAuth from "@/store/useAuth";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const register = () => {
 
    const dimension = Dimensions.get('window').height;
    const {registerUsers,registerChange,register} = useAuth();
    const [secureEye,setSecureEye] = useState(true)

    
    const eyeClick = () => {
      setSecureEye(!secureEye)
    }


    const registerSubmit = () => {
        register()
    }

  return (
    <SafeAreaView style={{height:dimension}}>
        <View className="p-4 mt-12">
            <Text className="text-center text-3xl text-[var(--primary)] uppercase font-semibold">
                Create Account
            </Text>

            <View className="mt-4">
                <Text className="mb-2 text-[var(--primary)]">Name<Text className="text-red-600 pl-2">*</Text></Text>
                <InputField placeholder="Enter Name" value={registerUsers.name} onChangeText={(text:string) => registerChange(text,'name')}/>
            </View>

            <View className="mt-4">
                <Text className="mb-2 text-[var(--primary)]">Email<Text className="text-red-600 pl-2">*</Text></Text>
                <InputField placeholder="Enter Email" keyboardType="email-address" value={registerUsers.email} onChangeText={(text:string) => registerChange(text,'email')}/>
            </View>

            <View className="mt-4">
                <Text className="mb-2 text-[var(--primary)]">PhoneNumber<Text className="text-red-600 pl-2">*</Text></Text>
                <InputField placeholder="09*********" keyboardType="numeric" value={registerUsers.phone} onChangeText={(text:string) => registerChange(text,'phone')}/>
            </View>

            <View className="mt-4 relative">
                <Text className="mb-2 text-[var(--primary)]">Password<Text className="text-red-600 pl-2">*</Text></Text>
                <InputField secureTextEntry={secureEye} placeholder="Enter Password" value={registerUsers.password} onChangeText={(text:string) => registerChange(text,'password')}/>
                <Pressable  className='absolute right-[8%] top-[50%]' onPress={eyeClick}>
                    {
                    secureEye ? (<Ionicons name="eye-off-outline" size={24} color="black"/>) : (<Ionicons name="eye-outline" size={24} color="black"/>)
                    }
                </Pressable>
            </View>

            <View className="mt-8">
                <ButtonField text="Register" padding={10} click={registerSubmit}/>
            </View>
            <View className="mt-4">
                <Text className="text-center text-xl">Already have an account? <Link href={'/auth/login'} className="text-blue-600 underline underline-offset-2">Login</Link></Text>
            </View>
        </View>
    </SafeAreaView>
  );
}

export default register;
