import { View } from "react-native";
import ReviewCard from "../../components/ReviewCard.jsx";
import { useAuth } from "../../Utils/AuthContext";
import { getReviews } from "../../api/api.js";
import { useEffect, useState } from "react";

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
  console.log(userReviews);
  return (
    <View>
      {userReviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </View>
  );
};
