import { View } from "react-native";
import {reviews} from "../data/reviews";
import ReviewCard from "./ReviewCard";

export default ReviewsList = ({business}) => {
  const filteredReviews = reviews.filter((review) => {
    return review.business_id === business.business_id;
  });
// console.log(reviews)
//   console.log(filteredReviews)

  return (
    <View>
      {filteredReviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </View>
  );
};
