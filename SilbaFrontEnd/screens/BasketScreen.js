import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import BasketItemCard from '../components/BasketItemCard';
import { Button } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckoutScreen from './CheckoutScreen';
import { deleteFromBasket, getBasketByUserId } from '../api/api';
import { useEffect } from 'react';
import { useBasket } from '../context/basketContext';
import { Snackbar } from 'react-native-paper';

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
  const { basket, updateBasket } = useBasket();
  const [deleted, setDeleted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const userId = "64d39a9246d322649f3dda8c"

  useEffect(() => {
    getBasketByUserId(userId)
    .then(({basket}) => {
  
      updateBasket(basket)
      
    }).catch((err) => {

    })
  },[])

 

  const handleItemDelete = (itemId) => {
    setLoading(true)
    deleteFromBasket(userId, { basketId: itemId })
      .then(() => {
        const updatedBasket = basket.filter((item) => item._id !== itemId);
        updateBasket(updatedBasket);
        setLoading(false)
        setDeleted(true)
        
      })
      .catch((err) => {
        setLoading(false)
        setError(true)})}


  const navigation = useNavigation();

  const handleCheckout = (basket) => {
    navigation.navigate('Checkout', {basket});
  };

  return (
    <SafeAreaView style={styles.basketContainer}>
      <ScrollView>
      {basket.map((item) => (
  <BasketItemCard key={item._id}
   item={item}
   onDelete={() => handleItemDelete(item._id)} 
  deleted={deleted}
  userId={userId}
   />
       ))}
     
      </ScrollView>
      <Button onPress={() => {handleCheckout(basket)}}>Checkout</Button>

<View>

      {/* <Snackbar
        visible={deleted}
        onDismiss={() => setDeleted(false)}>
        Item deleted
      </Snackbar> */}

      <Snackbar
        visible={error}
        onDismiss={() => setError(false)}>
        There was an error deleting from basket. Please try again.
      </Snackbar>
      </View>

    </SafeAreaView>

   


  );
}



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
