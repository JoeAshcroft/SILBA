import { Text, View, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { useState } from "react";
import { Avatar, Button } from "react-native-paper";
import { useAuth } from "../../Utils/AuthContext";

// const userData = [
//   {
//     fullName: "Joe Bloggs",
//     username: "foodlover123",
//     email: "joebloggs@fakemail.com",
//     avatar_url:
//       "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
//     user_id: 1,
//   },
// ];

export default ProfileDetailsScreen = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  const { user } = useAuth();
  const { data } = user;

  const updateDetails = () => {
    const updatedUserDetails = [...data];
    updatedUserDetails[0] = {
      ...updatedUserDetails,
      email: newEmail || updatedUserDetails[0].email,
    };
    setUpdateStatus("Details Successfully Updated!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profilePage}>
        <Avatar.Image
          size={80}
          source={{ uri: data.avatarUrl }}
          style={styles.avatar}
        />
        <Text style={styles.fullName}>{data.fullName}</Text>
        <Text style={styles.username}>@{data.username}</Text>
        <Text style={styles.email}>{data.email}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Update Email Address"
        value={newEmail}
        onChangeText={(text) => setNewEmail(text)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Change Password"
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />
      <Text>{updateStatus}</Text>
      <Button
        icon="account"
        mode="contained"
        style={styles.button}
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonLabel}
        onPress={updateDetails}
      >
        Update Details
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  input: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  profilePage: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 20,
  },
  fullName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: "#777",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
  },
  buttonsContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  button: {
    marginBottom: 10,
    backgroundColor: "#ccc",
    width: "60%",
  },
  buttonContent: {
    width: "100%",
  },
  buttonLabel: {
    color: "black",
  },
});
