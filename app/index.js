import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

export default function Page() {

  const users = [
    {
      username: 'shawnlts6',
      name: 'shawn'
    },
    {
      username: 'username2',
      name: 'user2'
    },
    {
      username: 'username3',
      name: 'user3'
    },
  ]

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>

        {users.map((user) => (
          <Link
            key={user.username}
            style={styles.subtitle} 
            href={{pathname: `/${user.username}`}}
          >
            open {user.name} profile
          </Link>
        ))}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
