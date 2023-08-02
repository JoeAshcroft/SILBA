import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native';


const BusinessCard = ({ business }) => {
  const { navigate } = useNavigation()

    return (
      <Pressable onPress={() => {
        navigate("BusinessDetailsScreen", {business})
      }} >
      <View style={styles.card}>
        <Image source={{ uri: business.images[0] }} style={styles.image} />
        <Text style={styles.businessName}>{business.business_name}</Text>
        <Text style={styles.description}>{business.description}</Text>
      </View>
      </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      width: Dimensions.get('window').width - 40,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 0,
      elevation: 5,
      alignItems: 'center',
      padding: 10,
    },
    image: {
      width: Dimensions.get('window').width - 60,
      height: 200,
      borderRadius: 0,
      marginBottom: 10,
    },
    businessName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
    },
  });
  
  export default BusinessCard;