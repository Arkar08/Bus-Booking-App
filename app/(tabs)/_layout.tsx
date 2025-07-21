import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { Dimensions, Text, View } from "react-native";

const Tabslayout = () => {
  const { width } = Dimensions.get("window");
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 34,
          left: 16,
          right: 16,
          height: 72,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
        },
        headerStyle: {
          backgroundColor: "#4169E1",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Bus-Booking-App",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                paddingTop: 15,
                alignItems: "center",
                width: width / 5,
              }}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={focused ? "#4169E1" : "gray"}
                size={24}
              />
              <Text
                style={{
                  marginTop: 4,
                  fontSize: 12,
                  color: focused ? "#4169E1" : "gray",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "Booking History",
          headerTitleAlign:'center',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                paddingTop: 15,
                alignItems: "center",
                width: width / 5,
              }}
            >
              <Ionicons
                name={focused ? "browsers" : "browsers-outline"}
                size={24}
                color={focused ? "#4169E1" : "gray"}
              />
              <Text
                style={{
                  marginTop: 4,
                  fontSize: 12,
                  color: focused ? "#4169E1" : "gray",
                }}
              >
                History
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitleAlign:'center',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                paddingTop: 15,
                alignItems: "center",
                width: width / 5,
              }}
            >
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? "#4169E1" : "gray"}
              />
              <Text
                style={{
                  marginTop: 4,
                  fontSize: 12,
                  color: focused ? "#4169E1" : "gray",
                }}
              >
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default Tabslayout;
