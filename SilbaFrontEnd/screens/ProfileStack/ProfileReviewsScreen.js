import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import ReviewCard from "../../components/ReviewCard.jsx";
import { useAuth } from "../../Utils/AuthContext";
import { getReviews } from "../../api/api.js";
import { useEffect, useState } from "react";
import { Avatar } from "react-native-paper";

export default ProfileReviewsScreen = () => {
  const { user } = useAuth();
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    getReviews().then((data) => {
      const filteredReviews = data.reviews.filter((review) => {
        return review.username === user.data.username;
      });
      setUserReviews(filteredReviews);
    });
  }, [user.data.username]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profilePage}>
        <Avatar.Image
          size={80}
          source={{ uri: user.data.avatarUrl }}
          style={styles.avatar}
        />
        <Text style={styles.fullName}>{user.data.fullName}</Text>
        <Text style={styles.username}>@{user.data.username}</Text>
        <Text style={styles.email}>{user.data.email}</Text>
      </View>
      <View>
        {userReviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </View>
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
});
