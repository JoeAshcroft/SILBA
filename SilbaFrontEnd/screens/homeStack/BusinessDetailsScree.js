import React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayoutEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";


export default function BusinessDetailsScreen() {
  const route = useRoute();
  const { business } = route.params;
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Details"
    })
  }, [])

  const handleOpenMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;
    Linking.openURL(mapsUrl).catch(err => console.error('Error opening maps:', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.businessContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.businessName}>{business.business_name}</Text>
          <View style={styles.imageContainer}>
            <Image source={{ uri: business.images[0] }} style={styles.image} />
          </View>
          <Text style={styles.address}>{business.address}</Text>
          <TouchableOpacity style={styles.directionsButton} onPress={handleOpenMaps}>
            <Ionicons name="navigate"></Ionicons>
          </TouchableOpacity>
          <Text style={styles.longDescription}>{business.long_description}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
  businessContainer: {
    width: 350,
    alignItems: 'center',
  },
  directionsButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  directionsButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
