import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="main"
        options={{
          title: "Home",
        }}
      />

      <Stack.Screen
        name="animationOne"
        options={{
          title: "Animation One",
        }}
      />

      <Stack.Screen
        name="animationTwo"
        options={{
          title: "Animation Two",
        }}
      />
    </Stack>
  );
}
