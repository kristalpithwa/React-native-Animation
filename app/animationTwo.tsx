import { Button, Text, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function animationTwo() {
  const width = useSharedValue(100);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    ></View>
  );
}
