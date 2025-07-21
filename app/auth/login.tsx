import ButtonField from "@/components/ButtonField";
import InputField from "@/components/InputField";
import useAuth from "@/store/useAuth";
import { Link } from "expo-router";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Login = () => {

    const dimension = Dimensions.get('window').height;
    const {users,login,loginChange} = useAuth();


    const loginSubmit = () => {
        login()
    }

  return (
    <SafeAreaView style={{height:dimension}} className="flex-1 justify-center">
      <View className="p-4 mt-4">
        <Text className="text-center text-3xl text-[var(--primary)] uppercase font-semibold">
          Login here
        </Text>

        <View className="mt-8">
          <Text className="mb-2 text-[var(--primary)]">Email<Text className="text-red-600 pl-2">*</Text></Text>
          <InputField placeholder="Enter Email" keyboardType="email-address" value={users.email} onChangeText={(text:string)=> loginChange(text,'email')}/>
        </View>

        <View className="mt-8">
          <Text className="mb-2 text-[var(--primary)]">Password<Text className="text-red-600 pl-2">*</Text></Text>
          <InputField secureTextEntry placeholder="Enter Password" value={users.password} onChangeText={(text:string)=> loginChange(text,'password')}/>
        </View>

        <View className="mt-12">
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
