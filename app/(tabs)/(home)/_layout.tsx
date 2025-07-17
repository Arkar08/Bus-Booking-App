import { Stack } from "expo-router";
import React from "react";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4169E1",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Bus-Booking-App",
        }}
      />
      <Stack.Screen
        name="carShow"
        options={{
          title: "Bus-Booking-App",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="seatChoice"
        options={{
          title: "Choice Seats",
          headerBackVisible: false,
        }}
      />
       <Stack.Screen
        name="chooseSourceLocation"
        options={{
          title: "Choose Source Location",
        }}
      />
      <Stack.Screen
        name="chooseDesitination"
        options={{
          title: "Choose Destination Location",
        }}
      />
      <Stack.Screen name="orderPage" options={{title: "Orders",headerBackVisible: false,headerTitleAlign:'center'}}/>
    </Stack>
  );
};

export default HomeLayout;
