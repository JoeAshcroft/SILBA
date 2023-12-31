import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import { IconButton, Snackbar } from "react-native-paper";
import { patchBasket, postToBasket } from "../../api/api";
import { useBasket } from "../../context/basketContext";
import { useAuth } from "../../Utils/AuthContext";

export default ItemDetailsScreen = () => {
  const route = useRoute();
  const { item } = route.params;
  const { user } = useAuth();

  let userId = null;

  if (user !== null) {
    userId = user.data._id;
  }

  const [buttonPressed, setButtonPressed] = useState(false);
  const [buttonText, setButtonText] = useState("Add to basket");
  const [quantity, setQuantity] = useState(1);
  const [itemAdded, setItemAdded] = useState(false);
  const [error, setError] = useState(false);
  const { basket, updateBasket } = useBasket();
  const [loggedOut, setLoggedOut] = useState(false);

  const handlePress = () => {
    if (userId === null) {
      setLoggedOut(true);
    } else {
      setButtonPressed(true);
      setButtonText("Added to basket");

      const body = { itemId: item._id };

      postToBasket(userId, body)
        .then((res) => {
          setItemAdded(true);
        })
        .catch((err) => {
          setError(true);
          console.log(err)
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: item.itemImage }} style={styles.image} />
      <Text style={styles.itemName}>{item.itemName}</Text>
      <Text style={styles.itemDescription}>{item.itemDescription}</Text>
      <Text style={styles.rating}>Rating: {item.itemRating}/5</Text>

      <Text style={styles.sellerInfo}>
        Sold by: {item.sellerBusinessName} / @{item.sellerUsername}
      </Text>
      <Text style={styles.deliveryInfo}>
        Available for: {item.deliveryOrCollection}
      </Text>
      {item.deliveryOrCollection === "Collection" && (
        <Text style={styles.collectionInfo}>
          Collection will be from {item.addressForCollection}
        </Text>
      )}
      <Text style={styles.price}>£{item.itemPrice}</Text>
   

      <View style={styles.buttonContainer}>
        <Button
          style={[styles.button, buttonPressed ? styles.buttonPressed : null]}
          onPress={handlePress}
          disabled={buttonPressed}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Button>


        <Snackbar visible={error} onDismiss={() => setError(false)}>
          There was an error adding item to basket. Please try again.
        </Snackbar>

        <Snackbar visible={loggedOut} onDismiss={() => setLoggedOut(false)}>
          Please log in.
        </Snackbar>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 15,
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 10,
    marginBottom: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    marginBottom: 5,
    color: "gray",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
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
    marginBottom: 5,
    width: 300,
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  button: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0,
    width: 200,
    height: 40,
    backgroundColor: "#d8d8d8",
  
  },
  buttonPressed: {
    backgroundColor: "white",
  },
  buttonText: {},
  quantitySelectContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  quantityButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
