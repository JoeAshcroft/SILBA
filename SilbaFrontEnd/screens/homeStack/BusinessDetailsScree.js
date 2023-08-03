import React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayoutEffect } from 'react';


export default function BusinessDetailsScreen() {
  const route = useRoute();
  const { business } = route.params;
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
        headerTitle: "Details"
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.businessName}>{business.business_name}</Text>
        <View style={styles.imageContainer}>
          <Image source={{ uri: business.images[0] }} style={styles.image} />
        </View>
        
        <Text style={styles.address}>{business.address}</Text>
        <Text style={styles.longDescription}>{business.long_description}</Text>
       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
 
  },
  businessName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },

  longDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  address: {
    fontSize: 14,
    marginBottom: 10,
    color: 'gray',
  },
});