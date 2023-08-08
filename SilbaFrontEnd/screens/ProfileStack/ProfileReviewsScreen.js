import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import ReviewCard from "../../components/ReviewCard.jsx"
import reviewData from "../../data/reviews.json";

export default ProfileReviewsScreen = () => {
  const route = useRoute();
  const { user } = route.params

  const reviews = reviewData.reviews.filter((review)=> {
    return review.username === user.username
  })

  return (
    <View>
      {reviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </View>
  );
};
