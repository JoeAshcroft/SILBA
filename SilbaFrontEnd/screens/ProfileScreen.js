import React from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileOrdersScreen from "./ProfileStack/ProfileOrdersScreen";
import ProfileDetailsScreen from "./ProfileStack/ProfileDetailsScreen";
import ProfileReviewsScreen from "./ProfileStack/ProfileReviewsScreen";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../Utils/AuthContext";

const ProfileStack = createNativeStackNavigator();
export default ProfileScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileMainScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="ProfileDetailsScreen"
        component={ProfileDetailsScreen}
        options={{ presentation: "modal", headerShown: false }}
      />

      <ProfileStack.Screen
        name="ProfileOrdersScreen"
        component={ProfileOrdersScreen}
        options={{ presentation: "modal", headerShown: false }}
      />

      <ProfileStack.Screen
        name="ProfileReviewsScreen"
        component={ProfileReviewsScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

const ProfileMainScreen = () => {
  const navigation = useNavigation();
  const { user, setUser } = useAuth();

 
  if (user !== null) {
    const { data } = user; 
  }
 

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <SafeAreaView style={styles.container}>

    {user === null ? 
    
      <Text style={styles.loginMessage}>Please Log In</Text>
 : ( <><View style={styles.profilePage}>
        <Avatar.Image
          size={80}
          source={{ uri: data.avatarUrl }}
          style={styles.avatar}
        />
        <Text style={styles.fullName}>{data.fullName}</Text>
        <Text style={styles.username}>@{data.username}</Text>
        <Text style={styles.email}>{data.email}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          icon="account"
          mode="contained"
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          onPress={() => navigation.navigate("ProfileDetailsScreen")}
        >
          My details
        </Button>
        <Button
          icon="receipt"
          mode="contained"
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          onPress={() => navigation.navigate("ProfileOrdersScreen")}
        >
          My orders
        </Button>
        <Button
          icon="star"
          mode="contained"
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          onPress={() =>
            navigation.navigate("ProfileReviewsScreen", { user: data })
          }
        >
          My reviews
        </Button>
      </View>

      <View style={styles.logoutContainer}>
        <Button
          icon="door"
          style={styles.logoutButton}
          contentStyle={styles.logoutButtonContent}
          labelStyle={styles.logoutButtonText}
          onPress={handleLogout}
        >
          Log out
        </Button>
      </View> </>) }

      
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
  logoutContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  logoutButton: {},
  logoutButtonContent: {
    width: "100%",
  },
  logoutButtonText: {
    color: "black",
  },
  loginMessage: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#555", 
  },
});
