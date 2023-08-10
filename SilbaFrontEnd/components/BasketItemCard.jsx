import React, { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { IconButton, ActivityIndicator } from "react-native-paper";
import { patchBasket } from "../api/api"; 

export default function BasketItemCard({ item, onDelete, userId, deleteLoading }) {
  const [addQuantity, setAddQuantity] = useState(0);

  const handleIncrement = () => {
    if (item.quantity + addQuantity < item.stockCount) {
      setAddQuantity((prevQuantity) => prevQuantity + 1);

      const newQuantity = item.quantity + 1
   
      const body = {
        itemId: item._id,
        quantity: newQuantity.toString(),
      };
  
      patchBasket(userId, body)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  const handleDecrement = () => {
    if (item.quantity + addQuantity > 1) {
      setAddQuantity((prevQuantity) => prevQuantity - 1);
      
      const newQuantity = item.quantity - 1; // Calculate the new quantity
      const body = {
        itemId: item._id,
        quantity: newQuantity.toString(),
      };
  
      patchBasket(userId, body)
        .then((res) => console.log(item.quantity))
        .catch((err) => console.log(err));
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.itemImage }} />
      </View>

      <Text style={styles.itemName}>{item.itemName}</Text>

      <View style={styles.priceAndBin}>
        {item.quantity === 1 ? (
          deleteLoading ? (
            <ActivityIndicator animating={true} color={"black"} />
          ) : (
            <IconButton
              icon="trash-can"
              size={15}
              onPress={onDelete}
            />
          )
        ) : (
          <IconButton
            icon="minus"
            size={20}
            style={styles.bin}
            onPress={handleDecrement}
            disabled={item.quantity === 1} 
          />
        )}

        <Text style={styles.itemQuantity}>
          {item.quantity + addQuantity}
        </Text>

        <IconButton
          icon="plus"
          size={20}
          style={styles.bin}
          onPress={handleIncrement}
        />
      </View>
      <Text style={styles.itemPrice}>£{item.itemPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 280,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
    padding: 3,
  },
  imageContainer: {
    height: 200,
    width: 200,
    paddingTop: 5,
  },
  image: {
    flex: 1,
    width: 200,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 12,
    fontWeight: "bold",
    marginVertical: 1,
  },
  itemPrice: {
    fontSize: 16,
  },
  priceAndBin: {
    flexDirection: "row",
    alignItems: "center",
  },
  bin: {
    padding: 0,
    margin: 0,
  },
});
