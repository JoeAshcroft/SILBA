import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const CheckoutScreen = () => {
  const route = useRoute();
  const { items, totalCost } = route.params;
  const [isCardNumberSecure, setCardNumberSecure] = useState(true);
  const [isExpiryDateSecure, setExpiryDateSecure] = useState(true);
  const [isCvcSecure, setCvcSecure] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.total}>Your Order</Text>
        <View style={styles.itemsContainer}>
          {items.map((item) => (
            <View key={item.itemId} style={styles.item}>
              <Text style={styles.itemName}>1x {item.itemName}</Text>
              <Text style={styles.itemPrice}>£{item.itemPrice.toFixed(2)}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.receivedBy}>
          Received by: {items[0].deliveryOrCollection}
        </Text>
        {items[0].deliveryOrCollection === "Collection" ? (
          <Text style={styles.collectionText}>
            Please collect from: {items[0].sellerBusinessName},{" "}
            {items[0].addressForCollection} within 24 hours
          </Text>
        ) : null}
        <Text style={styles.total}>Total: £{totalCost.toFixed(2)}</Text>

        <View style={styles.paymentDetailsContainer}>
          <Text style={styles.paymentDetails}>Payment Details</Text>
          <TextInput
            mode="outlined"
            label="Full Name"
            placeholder="Type something"
          />
          

<TextInput
  mode="outlined"
  label="Card number"
  placeholder="Type something"
  secureTextEntry={isCardNumberSecure}
  right={
    <TextInput.Icon
      icon={isCardNumberSecure ? "eye-off-outline" : "eye-outline"}
      onPress={() => setCardNumberSecure(!isCardNumberSecure)}
    />
  }
/>

<TextInput
  mode="outlined"
  label="Expiry date"
  placeholder="Type something"
  secureTextEntry={isExpiryDateSecure}
  right={
    <TextInput.Icon
      icon={isExpiryDateSecure ? "eye-off-outline" : "eye-outline"}
      onPress={() => setExpiryDateSecure(!isExpiryDateSecure)}
    />
  }
/>

<TextInput
  mode="outlined"
  label="CVC"
  placeholder="Type something"
  secureTextEntry={isCvcSecure}
  right={
    <TextInput.Icon
    icon={isCvcSecure ? "eye-off-outline" : "eye-outline"}
      onPress={() => setCvcSecure(!isCvcSecure)}
    />
  }
/>

          <Text style={styles.paymentDetails}>
            Billing Address (same as card)
          </Text>
          <TextInput
            mode="outlined"
            label="First line of address"
            placeholder="Type something"
          />
          <TextInput
            mode="outlined"
            label="Second line of address"
            placeholder="Type something"
          />
          <TextInput
            mode="outlined"
            label="Country"
            placeholder="Type something"
          />
          <TextInput
            mode="outlined"
            label="Postcode"
            placeholder="Type something"
          />
        </View>

        {items[0].deliveryOrCollection === "Delivery" ? (
          <View>
            <Text style={styles.paymentDetails}>Delivery Address</Text>

            <TextInput
              mode="outlined"
              label="Full Name"
              placeholder="Type something"
            />

            <TextInput
              mode="outlined"
              label="First line of address"
              placeholder="Type something"
            />

            <TextInput
              mode="outlined"
              label="Second line of address"
              placeholder="Type something"
            />

            <TextInput
              mode="outlined"
              label="Country"
              placeholder="Type something"
            />

            <TextInput
              mode="outlined"
              label="Postcode"
              placeholder="Type something"
            />
          </View>
        ) : null}


        <Button style={styles.button} icon="lock" mode="contained" onPress={() => console.log('Pressed')}>
    Pay Securely 
  </Button>


      </ScrollView>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  itemsContainer: {
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  receivedBy: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  collectionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  paymentDetails: {
    fontSize: 15,
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    marginBottom: 15,
  }
});

export default CheckoutScreen;