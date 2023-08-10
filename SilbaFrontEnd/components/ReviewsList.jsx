import { View } from "react-native";
import ReviewCard from "./ReviewCard";
import { getReviewsByBusinessId } from "../api/api";
import { useEffect, useState } from "react";

export default ReviewsList = ({ business }) => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    getReviewsByBusinessId(business._id)
      .then((res) => {
        setReviewData(res.reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      {reviewData.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </View>
  );
};
