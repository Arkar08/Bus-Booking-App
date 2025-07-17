/* eslint-disable react-hooks/rules-of-hooks */
import ButtonField from "@/components/ButtonField";
import InputField from "@/components/InputField";
import { RegisterTypeProps } from "@/utils/constant";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const register = () => {
 
    const dimension = Dimensions.get('window').height;
    const [registerUser,setRegisterUser] = useState<RegisterTypeProps>(
       {
            name:"",
            email:"",
            phone:"",
            password:""
       }
    )

    const nameChange = (text:string) => {
        setRegisterUser((prev)=>({
            ...prev,name:text
        }))
    }

    const PasswordChange = (text:string) => {
        setRegisterUser((prev)=>({
            ...prev,password:text
        }))
    }

    const phoneChange = (text:string) => {
        setRegisterUser((prev)=>({
            ...prev,phone:text
        }))
    }

    const EmailChange = (text:string) => {
        setRegisterUser((prev)=>({
            ...prev,email:text
        }))
    }

    const loginSubmit = () => {
        console.log(registerUser)
    }

  return (
    <SafeAreaView style={{height:dimension}}>
        <View className="p-4 mt-12">
            <Text className="text-center text-3xl text-[var(--primary)] uppercase font-semibold">
                Create Account
            </Text>

            <View className="mt-4">
                <Text className="mb-2 text-[var(--primary)]">Name<Text className="text-red-600 pl-2">*</Text></Text>
                <InputField placeholder="Enter Name" value={registerUser.name} onChangeText={nameChange}/>
            </View>

            <View className="mt-4">
                <Text className="mb-2 text-[var(--primary)]">Email<Text className="text-red-600 pl-2">*</Text></Text>
                <InputField placeholder="Enter Email" keyboardType="email-address" value={registerUser.email} onChangeText={EmailChange}/>
            </View>

            <View className="mt-4">
                <Text className="mb-2 text-[var(--primary)]">PhoneNumber<Text className="text-red-600 pl-2">*</Text></Text>
                <InputField placeholder="09*********" keyboardType="numeric" value={registerUser.phone} onChangeText={phoneChange}/>
            </View>

            <View className="mt-4">
                <Text className="mb-2 text-[var(--primary)]">Password<Text className="text-red-600 pl-2">*</Text></Text>
                <InputField secureTextEntry placeholder="Enter Password" value={registerUser.password} onChangeText={PasswordChange}/>
            </View>

            <View className="mt-8">
                <ButtonField text="Register" padding={10} click={loginSubmit}/>
            </View>
            <View className="mt-4">
                <Text className="text-center text-xl">Already have an account? <Link href={'/auth/login'} className="text-blue-600 underline underline-offset-2">Login</Link></Text>
            </View>
        </View>
    </SafeAreaView>
  );
}

export default register;
