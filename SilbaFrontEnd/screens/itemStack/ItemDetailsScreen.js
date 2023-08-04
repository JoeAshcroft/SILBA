import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import { Select } from "native-base";

export default ItemDetailsScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  const [buttonPressed, setButtonPressed] = useState(false);
  const [buttonText, setButtonText] = useState("Add to basket");

  const handlePress = () => {
    setButtonPressed(true);
    setButtonText("Added to basket");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: item.itemImage }} style={styles.image} />
      <Text style={styles.itemName}>{item.itemName}</Text>
      <Text style={styles.itemDescription}>{item.itemDescription}</Text>
      <Text style={styles.sellerInfo}>
        Sold by: {item.sellerBusinessName} / @{item.sellerUsername}
      </Text>
      <Text style={styles.deliveryInfo}>
        Available for: {item.deliveryOrCollection}
      </Text>
      {item.deliveryOrCollection === "Collection" ? (
        <Text style={styles.collectionInfo}>
          Collection will be from {item.addressForCollection}
        </Text>
      ) : null}
<Text>Quantity:</Text>
      <Select></Select>

      <View style={styles.buttonContainer}>
     
        <Button
          style={[styles.button, buttonPressed ? styles.buttonPressed : null]}
          onPress={handlePress}
          disabled={buttonPressed}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Button>

       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  sellerInfo: {
    fontSize: 14,
    marginBottom: 5,
    color: "gray",
  },
  deliveryInfo: {
    fontSize: 14,
    marginBottom: 5,
  },
  collectionInfo: {
    fontSize: 14,
    marginBottom: 10,
    width: 300,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    borderRadius: 30,
    width: 200,
    alignItems: "center",
    backgroundColor: "black",
  },
  buttonPressed: {
    backgroundColor: "grey", // Set the color you want when the button is pressed
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});