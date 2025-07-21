import useAuth from "@/store/useAuth";
import "expo-dev-client";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

function NavLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Stack screenOptions={{
        headerShown:false
      }}>
       
          <Stack.Protected guard={isLoggedIn}>
           <Stack.Screen name="(app)" options={{headerShown:false}}/>
          </Stack.Protected>
        
          <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="auth" options={{headerShown:false}}/>
          </Stack.Protected>
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavLayout />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
