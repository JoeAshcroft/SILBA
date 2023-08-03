import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default ReviewsCard = ({ review }) => {
  return (
    <View style={styles.reviewsContainer}>
      <Text style={styles.reviewUsername}>{review.username}</Text>
      <Text style={styles.review}>{review.review}</Text>

      <View style={styles.voteContainer}>
        
        <TouchableOpacity>
          <Ionicons style={styles.thumbButton} name="thumbs-up" size="20%"></Ionicons>
        </TouchableOpacity>
        <Text style={styles.reviewVotes}> {review.review_votes}</Text>
        <TouchableOpacity>
          <Ionicons style={styles.thumbButton} name="thumbs-down" size="20%"></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewsContainer: {
    fontSize: 18,
    paddingBottom: 5,
    textAlign: "center",
    borderColor: "black",
    borderTopWidth: 1,
  },
  reviewUsername: {
    fontSize: 16,
    padding: 5,
    textAlign: "center",
  },
  review: {
    fontSize: 13,
    paddingTop: 2,
    textAlign: "center",
    paddingBottom: 4,
  },
  voteContainer: {

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center the items horizontally
    padding: 7,
  },
  thumbButton: {
   paddingLeft: 14,
   paddingRight: 12,
  },
  reviewVotes: {
    fontSize: 15,
  }

});
