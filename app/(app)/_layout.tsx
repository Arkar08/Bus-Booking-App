import { Stack } from "expo-router";
import React from "react";

const AppLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="chooseSourceLocation"
        options={{
          title: "Choose Source Location",
          headerStyle: {
            backgroundColor: "#4169E1",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign:'center'
        }}
      />
      <Stack.Screen
        name="chooseDesitination"
        options={{
          title: "Choose Destination Location",
          headerStyle: {
            backgroundColor: "#4169E1",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign:'center'
        }}
      />
      <Stack.Screen
        name="seats"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="orderPage"
        options={{
          title: "Traveller Info",
          headerStyle: {
            backgroundColor: "#4169E1",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign:'center'
        }}
      />
      <Stack.Screen  name="orderList" options={{
        title:"Order Lists",
        headerStyle: {
            backgroundColor: "#4169E1",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign:'center'
      }}/>
      <Stack.Screen name="changePassword" options={{
        title:"Change Password",
         headerStyle: {
            backgroundColor: "#4169E1",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign:'center'
      }}/>
      <Stack.Screen  name="account" options={{
        title:"Edit Profile",
         headerStyle: {
            backgroundColor: "#4169E1",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign:'center'
      }}/>
    </Stack>
  );
};

export default AppLayout;
