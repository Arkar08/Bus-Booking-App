import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import '../global.css';

function NavLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
      </Stack>
      <StatusBar style="light"/>
    </>
  )
}


export default function RootLayout(){
  return(
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <NavLayout />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}