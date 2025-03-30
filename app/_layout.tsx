import { Button, View } from "react-native";
import { Stack, useNavigation } from "expo-router";

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="animationOne"
        options={{
          title: "Animation One",
          headerLeft: () => (
            <View style={{ marginRight: 10 }}>
              <Button title="Back" onPress={() => navigation.goBack()} />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="animationTwo"
        options={{
          title: "Animation Two",
          headerLeft: () => (
            <View style={{ marginRight: 10 }}>
              <Button title="Back" onPress={() => navigation.goBack()} />
            </View>
          ),
        }}
      />
    </Stack>
  );
}
