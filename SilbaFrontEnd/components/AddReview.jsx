import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import { Button, Stack, Alert } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { newDate } from "../utils/utils";
import { postReviews } from "../api/api"

export default AddReview = ({businessID}) => {
    const [error, setError] = useState(false)

    const handleReviewPost = ({username, reviewBody, businessID}) => {
        const reviewData = { review: reviewBody, business: businessID, user: username }
        postReviews(reviewData)
        .then((res)=>{
            setError(false)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
            setError(true)
        })
    }

  return (
    <View style={styles.container}>
        
      <Formik
        initialValues={{
          username: "johndoe",
          reviewBody: "",
          userID: "64d39ab4ab5abbdd3d9fcead",
          businessID: businessID,
        }}
        onSubmit={(reviewObj) => handleReviewPost(reviewObj)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Stack w="100%" space={4} alignItems="center">
            {error ? <Alert w="100%" title={"error"} status={"error"}>There was an error posting your comment!</Alert> : null}
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
              endIcon={<Ionicons name="send-outline" size={24} color="black" />}
            >
              <Text color={"black"}>Submit</Text>
            </Button>
          </Stack>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    width: "100%",
  },
  textInput: {
    backgroundColor: "#EDEDED", // Grey background
    borderRadius: 100,
    height: 40,
    width: "80%",
    // flex: 1, // Take up available space
    paddingHorizontal: 20, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10, // Add some spacing between TextInput and Button
  },
});
