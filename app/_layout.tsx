import 'expo-dev-client';
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import '../global.css';

function NavLayout() {
  return (
    <>
      <Stack>
        <Stack.Protected guard={true}>
          <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
        </Stack.Protected>
        <Stack.Protected guard={false}>
          <Stack.Screen name='auth/login' options={{headerShown:false}}/>
          <Stack.Screen name='auth/register' options={{headerShown:false}}/>
        </Stack.Protected>
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