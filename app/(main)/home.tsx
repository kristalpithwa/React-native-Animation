import { removeToken } from "@/utils/auth";
import { Link, useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  const data = [
    { id: "1", title: "Animation One", href: "/(main)/animationOne" },
    { id: "2", title: "Animation Two", href: "/(main)/animationTwo" },
  ];

  const renderList = ({ item }) => {
    return (
      <Link href={item.href} style={styles.link}>
        <Text style={styles.text}>
          {item.id}.{item.title}
        </Text>
      </Link>
    );
  };

  const handleLogout = async () => {
    await removeToken();
    router.replace("/(auth)/login");
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderList}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 25, marginLeft: 20 }}
      />
      <Text
        onPress={handleLogout}
        style={{ marginBottom: 100, textAlign: "center" }}
      >
        Logout
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  link: {
    width: 250,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "pink",
  },
  text: {
    color: "black",
    fontSize: 18,
  },
});
