import { Button, Text, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function AnimationOne() {
  const width = useSharedValue(100);

  const onPressIncreased = () => {
    width.value = withSpring(width.value + 50);
  };

  const onPressDiscased = () => {
    width.value = withSpring(width.value - 50);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.View
        style={{
          width: width,
          height: 100,
          marginBottom: 20,
          backgroundColor: "violet",
        }}
      />
      <Button onPress={() => onPressIncreased()} title="Increased Width" />
      <Button onPress={() => onPressDiscased()} title="Discased Width" />
    </View>
  );
}
