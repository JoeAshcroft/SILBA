import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { items } from "../data/userBasket.json";
import BasketItemCard from '../components/BasketItemCard';
import { Button } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckoutScreen from './CheckoutScreen';


// Create the nested stack for the Checkout screen within BasketScreen
const BasketStack = createNativeStackNavigator();

export default BasketScreen = () => {
  
  return (
    <BasketStack.Navigator>
      <BasketStack.Screen
        name="BasketMain"
        component={BasketMainScreen}
        options={{ headerShown: false }}
      />
      <BasketStack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
    </BasketStack.Navigator>
  );
};

const BasketMainScreen = () => {
  const sellerItemsMap = groupItemsBySeller(items);
  const navigation = useNavigation();
  const handleCheckout = (items, totalCost) => {
    navigation.navigate('Checkout', {items, totalCost});
  };

  return (
    <SafeAreaView style={styles.basketContainer}>
      <ScrollView>
        {Object.entries(sellerItemsMap).map(([seller, { items, totalCost }]) => (
          <View key={seller}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Sold by {seller}</Text>
              <Text style={styles.DorC}>Purchase method: {items[0].deliveryOrCollection}</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {items.map((item) => (
                <BasketItemCard key={item.itemId} item={item} />
              ))}
            </ScrollView>
            <Text style={styles.totalCost}>Total £{totalCost.toFixed(2)}</Text>
            <Button style={styles.button} onPress={()=>{handleCheckout(items, totalCost)}}>Checkout</Button>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const groupItemsBySeller = (items) => {
  const sellerItemsMap = {};
  items.forEach((item) => {
    const { sellerBusinessName } = item;
    if (!sellerItemsMap[sellerBusinessName]) {
      sellerItemsMap[sellerBusinessName] = {
        items: [{ ...item, quantity: 1 }], 
        totalCost: item.itemPrice,
      };
    } else {
      const existingItem = sellerItemsMap[sellerBusinessName].items.find(
        (i) => i.itemId === item.itemId
      );

      if (existingItem) {
     
        existingItem.quantity += 1;
        sellerItemsMap[sellerBusinessName].totalCost += item.itemPrice;
      } else {
    
        sellerItemsMap[sellerBusinessName].items.push({ ...item, quantity: 1 });
        sellerItemsMap[sellerBusinessName].totalCost += item.itemPrice;
      }
    }
  });
  return sellerItemsMap;
};

const styles = StyleSheet.create({
  basketContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  titleContainer: {
    paddingHorizontal: 10,
    marginTop: 0,
    textAlign: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center"
  },
  DorC: {
    fontSize: 14,
    color: 'gray',
    textAlign: "center"
  },
  totalCost: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    width: 200,
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom: 20,
  }
});
