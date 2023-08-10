import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { getOrdersByUserId } from "../../api/api";
import { useAuth } from "../../Utils/AuthContext";

export default ProfileOrdersScreen = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    console.log(user.data._id);
    getOrdersByUserId(user.data._id)
      .then((res) => {
        console.log(res);
        setOrders(res.order); // Set the orders array from the API response
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Image style={styles.itemImage} source={{ uri: item.itemImage }} />
      <Text style={styles.itemName}>{item.itemName}</Text>
      <Text style={styles.itemPrice}>£{item.itemPrice}</Text>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
    orderItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    itemImage: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginRight: 16,
    },
    itemInfo: {
      flex: 1,
    },
    itemName: {
      fontSize: 10,
      fontWeight: "bold",
      marginBottom: 4,
    },
    itemPrice: {
      fontSize: 10,
      marginBottom: 2,
    },
    itemQuantity: {
      fontSize: 10,
      color: "#666",
      marginTop: 2,
    },
  });