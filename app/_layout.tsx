import "expo-dev-client";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

function NavLayout() {
  return (
    <>
      <Stack>
        <Stack.Protected guard={true}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
            }}
          />
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
            }}
          />
          <Stack.Screen
            name="carShow"
            options={{
              title: "Bus-Booking-App",
              headerStyle: {
                backgroundColor: "#4169E1",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="seatChoice"
            options={{
              title: "Choice Seats",
              headerStyle: {
                backgroundColor: "#4169E1",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
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
            }}
          />
        </Stack.Protected>
        <Stack.Protected guard={false}>
          <Stack.Screen name="auth/login" options={{ headerShown: false }} />
          <Stack.Screen name="auth/register" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
      <StatusBar style="light" />
    </>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <NavLayout />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
