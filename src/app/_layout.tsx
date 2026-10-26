import AppProvider from "@/provider/app.provider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <AppProvider>

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        {/* <Stack.Screen name="(tabs)" /> */}
        <Stack.Screen name="(drawer)" />
        {/* <Stack.Screen name="index" /> */}
      </Stack>
      <StatusBar style="dark" />
    </AppProvider>
  );
}
