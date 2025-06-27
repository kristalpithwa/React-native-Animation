import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function animationTwo() {
  const translateX = useSharedValue<number>(0);

  const onPressMoveRight = () => {
    translateX.value = withSpring(translateX.value + 100);
  };

  const onPressMoveLeft = () => {
    translateX.value = withSpring(translateX.value - 100);
  };

  // Animated Style

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  // Style

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      height: 120,
      width: 120,
      backgroundColor: "#b58df1",
      borderRadius: 20,
      marginVertical: 50,
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={onPressMoveRight} title="Move Right" />
      <Button onPress={onPressMoveLeft} title="Move Left" />
    </View>
  );
}
