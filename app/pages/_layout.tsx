import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="lance" options={{ title: "Lance Joseph Lines" }} />
      <Stack.Screen name="rodnie" options={{ title: "Rodnie A. Caracena" }} />
      <Stack.Screen name="aaron" options={{ title: "Aaron (Adams) Pinote" }} />
      <Stack.Screen name="adrianne" options={{ title: "Adrianne Villarta" }} />
      <Stack.Screen
        name="raphael"
        options={{ title: "Raphael H. Bellosillo" }}
      />
    </Stack>
  );
}
