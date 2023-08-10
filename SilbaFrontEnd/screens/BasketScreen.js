import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import BasketItemCard from '../components/BasketItemCard';
import { Button } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckoutScreen from './CheckoutScreen';
import { deleteFromBasket, getBasketByUserId } from '../api/api';
import { useBasket } from '../context/basketContext';
import { Snackbar } from 'react-native-paper';
import { useAuth } from '../Utils/AuthContext';

const BasketStack = createNativeStackNavigator();

export default BasketScreen = () => {
  return (
    <BasketStack.Navigator>
      <BasketStack.Screen
        name="Basket"
        component={BasketMainScreen}
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
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { user } = useAuth();
  

  let userId = null;

  if (user !== null) {
    userId = user.data._id; 
  }

  useEffect(() => {
    getBasketByUserId(userId)
      .then(({basket}) => {
        updateBasket(basket);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [basket]);

  const handleItemDelete = (itemId) => {
    console.log('Deleting item:', itemId);
  
    setDeleteLoading(true);
    deleteFromBasket(userId, { basketId: itemId })
      .then((res) => {
        const updatedBasket = basket.filter((item) => item._id !== itemId);
        updateBasket(updatedBasket);
        setDeleteLoading(false);
        setDeleted(true);
        console.log("item deleted", res)
      })
      .catch((err) => {
        console.log(err);
        setDeleteLoading(false); 
        setError(true);
      });
  };

  const navigation = useNavigation();

  const handleCheckout = (basket) => {
    navigation.navigate('Checkout', {basket});
  };

  return (
    <SafeAreaView style={styles.container}>
      {user === null ? (
        <Text style={styles.loginMessage}>Please log in</Text>
      ) : basket.length > 0 ? (
        <View style={styles.basketContent}>
          <ScrollView>
            {basket.map((item) => (
              <BasketItemCard
                key={item._id}
                item={item}
                onDelete={() => handleItemDelete(item._id)}
                deleted={deleted}
                deleteLoading={deleteLoading}
                userId={userId}
              />
            ))}
          </ScrollView>
          <Button onPress={() => handleCheckout(basket)} style={styles.checkoutButton}>
            Checkout
          </Button>
        </View>
      ) : (
        <Text style={styles.emptyBasketMessage}>Basket Empty</Text>
      )}

      <Snackbar visible={error} onDismiss={() => setError(false)}>
        There was an error deleting from the basket. Please try again.
      </Snackbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  basketContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#555",
    textAlign: "center",
  },
  emptyBasketMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  checkoutButton: {
    color: 'black',
    width: 200,
    alignSelf: 'center',
    borderRadius: 30,
    marginVertical: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0,
    width: 200,
    height: 40,
    backgroundColor: "black",
    },
});
