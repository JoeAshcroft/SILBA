import { Text, SafeAreaView, StyleSheet } from "react-native";
import { Avatar, Center } from "native-base";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.topTitle}>
      <Center>
        <Avatar
          bg="green.500"
          size="2xl"
          source={{
            uri: "https://images.unsplash.com/photo-1633957897986-70e83293f3ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=693&q=80",
          }}
        ></Avatar>
      </Center>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  titleContainer: {
    paddingHorizontal: 10,
    marginTop: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  topTitle: {
    fontSize: 20,
    fontWeight: "regular",
    textAlign: "center",
    margin: 10,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
