import React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayoutEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";
import ReviewsList from '../../components/ReviewsList';


export default BusinessDetailsScreen = () => {
  const route = useRoute();
  const { business } = route.params;
 

  const handleOpenMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.business_name+business.address)}`;
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
            <View style={styles.directionsContainer}>
            <Ionicons name="navigate"></Ionicons> 
            <Text>get directions</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.descriptionTitle}>about the {business.category}</Text>
          <Text style={styles.longDescription}>{business.long_description}</Text>

          <View>
            <Text style={styles.reviewsTitle}>reviews</Text>
            <TouchableOpacity>
            <Text style={styles.addReview}>add review</Text>
          </TouchableOpacity>
            
            <ReviewsList business={business}/>
          </View>

          <View> 
          
          </View>
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
    width: 350,
    height: 200,
  },
  businessName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
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
    textAlign: "center"
  },
  businessContainer: {
    width: 350,
    alignItems: 'center',
  },
  directionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  directionsButton: {
    paddingBottom: 10,
  },
  directionsButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5,
  },
  reviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    textAlign: 'center'
  }, 
  addReview: {
    fontSize:15,
    
    paddingBottom: 5,
    textAlign: 'center'
  }
});
