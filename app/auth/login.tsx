import ButtonField from "@/components/ButtonField";
import InputField from "@/components/InputField";
import { LoginTypeProps } from "@/utils/constant";
import React, { useState } from "react";
import { Text, View } from "react-native";



const Login = () => {
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
    <View className="p-4 justify-center flex-1">
      <Text className="text-center text-3xl text-[var(--primary)] uppercase">
        Login
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
    </View>
  );
};

export default Login;
