import ButtonField from "@/components/ButtonField";
import InputField from "@/components/InputField";
import { LoginTypeProps } from "@/utils/constant";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = require('../../assets/images/loginImage.png')

const Login = () => {

    const dimension = Dimensions.get('window').height;
    const [loginUser,setLoginUser] = useState<LoginTypeProps>(
       {
            email:"",
            password:""
       }
    )

    const PasswordChange = (text:string) => {
        setLoginUser((prev)=>({
            ...prev,password:text
        }))
    }

    const EmailChange = (text:string) => {
        setLoginUser((prev)=>({
            ...prev,email:text
        }))
    }

    const loginSubmit = () => {
        console.log(loginUser)
    }

  return (
    <SafeAreaView className="bg-white" style={{height:dimension}}>
      <View className="w-[300px] h-[180px] mx-auto mt-4">
        <Image source={images} className="w-[80%] h-[80%] mx-auto object-contain"/>
      </View>
      <View className="p-4 mt-4">
        <Text className="text-center text-3xl text-[var(--primary)] uppercase font-semibold">
          Login here
        </Text>

        <View className="mt-4">
          <Text className="mb-2 text-[var(--primary)]">Email<Text className="text-red-600 pl-2">*</Text></Text>
          <InputField placeholder="Enter Email" keyboardType="email-address" value={loginUser.email} onChangeText={EmailChange}/>
        </View>

        <View className="mt-4">
          <Text className="mb-2 text-[var(--primary)]">Password<Text className="text-red-600 pl-2">*</Text></Text>
          <InputField secureTextEntry placeholder="Enter Password" value={loginUser.password} onChangeText={PasswordChange}/>
        </View>

        <View className="mt-4">
          <ButtonField text="Login" padding={10} click={loginSubmit}/>
        </View>
        <View className="mt-4">
          <Text className="text-center text-xl">Don&apos;t have an account? <Link href={'/auth/register'} className="text-blue-600 underline underline-offset-2">Register</Link></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
