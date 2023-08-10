import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { Button, Stack, Alert } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { postReviews } from "../api/api";
import ReviewCard from "./ReviewCard";

export default AddReview = ({ businessID }) => {
  const [status, setStatus] = useState(false);
  const [optimistic, setOptimistic] = useState(false);
  const [optimisticData, setOptimisticData] = useState({});
  const userID = "64d39ab4ab5abbdd3d9fcead";

  const handleReviewPost = ({ username, reviewBody, businessID }) => {
    const reviewData = {
      review: reviewBody,
      businessId: businessID,
      username: username,
      userId: userID,
      review_votes: 0,
    };
    setOptimisticData(reviewData);
    setOptimistic(true);
    postReviews(reviewData)
      .then((res) => {
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
      });
  };

  return (
    <View style={styles.container}>
      {status === "error" ? (
        <Alert w="100%" title={"error"} status={"error"}>
          There was an error posting your review!
        </Alert>
      ) : status === "success" ? (
        <Alert w="100%" title={"success"} status={"success"}>
          Your review was posted successfully!
        </Alert>
      ) : null}
      {optimistic ? (
        <ReviewCard review={optimisticData} />
      ) : (
        <Formik
          initialValues={{
            username: "johndoe",
            reviewBody: "",
            businessID: businessID,
          }}
          onSubmit={(reviewObj) => handleReviewPost(reviewObj)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Stack w="100%" space={4} alignItems="center">
              <TextInput
                mode="outlined"
                placeholder="Leave a review"
                multiline
                numberOfLines={5}
                style={styles.textInput}
                underlineColorAndroid="transparent"
                selectionColor="#000"
                onChangeText={handleChange("reviewBody")}
                onBlur={handleBlur("reviewBody")}
                value={values.reviewBody}
              />
              <Button
                title="Submit"
                onPress={handleSubmit}
                bgColor={"coolGray.300"}
                p={"1"}
                endIcon={
                  <Ionicons name="send-outline" size={24} color="black" />
                }
              >
                <Text color={"black"}>Submit</Text>
              </Button>
            </Stack>
          )}
        </Formik>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
    width: "100%",
  },
  textInput: {
    backgroundColor: "#EDEDED",
    borderRadius: 100,
    height: 40,
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
  },
});
