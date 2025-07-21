import { Stack } from 'expo-router'
import React from 'react'

const layout = () => {
  return (
    <Stack screenOptions={{
         headerStyle: {
                backgroundColor: "#4169E1",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
    }}>
        <Stack.Screen name='index'options={{
              title: "Bus-Booking-App",
            }}/>
            <Stack.Screen name='[id]' options={{title:"Choice Seats"}}/>
    </Stack>
  )
}

export default layout
