import { Link } from "expo-router";
import { Text, View, FlatList, StyleSheet } from "react-native";

export default function Index() {
  const data = [
    { id: "1", title: "Animation One", href: "/animationOne" },
    { id: "2", title: "Animation Two", href: "/animationTwo" },
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

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderList}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 25, marginLeft: 20 }}
      />
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
