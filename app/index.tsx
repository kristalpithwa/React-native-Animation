import { useRouter } from "expo-router";
import { FC, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { getToken } from "../utils/auth";

const Index: FC = () => {
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = await getToken();
    router.replace(token ? "/(main)/home" : "/(auth)/login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Index;
