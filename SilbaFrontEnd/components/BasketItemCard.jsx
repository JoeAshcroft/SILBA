import { Icon } from "native-base";
import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { IconButton } from "react-native-paper";

export default function BasketItemCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.itemImage }} />
      </View>

      <Text style={styles.itemName}>{item.itemName}</Text>

      <View style={styles.priceAndBin}>
        <IconButton
          icon="minus"
          size={20}
          style={styles.bin}
          onPress={() => console.log("delete")}
        />
        <Text style={styles.itemQuantity}>{item.quantity}</Text>

        <IconButton
          icon="plus"
          size={20}
          style={styles.bin}
          onPress={() => console.log("add more")}
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
