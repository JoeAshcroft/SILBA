import { Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { Avatar, Center, View, Heading, VStack } from "native-base";

const userData = [
  {
    fullName: "Joe Bloggs",
    username: "foodlover123",
    email: "joebloggs@fakemail.com",
    avatar_url:
      "https://images.unsplash.com/photo-1633957897986-70e83293f3ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=693&q=80",
    user_id: 1,
  },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <Center>
        {userData.map((user) => {
          return (
            <View key={user.user_id}>
              <Center>
                <Heading size="2xl">{user.username}</Heading>
                <Avatar
                  bg="green.500"
                  size="2xl"
                  source={{ uri: user.avatar_url }}
                ></Avatar>

                <Text style={styles.profileText}>{user.fullName}</Text>
                <Text style={styles.profileText}>{user.email}</Text>
              </Center>
            </View>
          );
        })}
      </Center>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileText: {
    fontSize: 30,
  },
});
