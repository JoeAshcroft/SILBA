import React from "react";
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from "react-native";
import BusinessCard from "../components/BusinessCard";
import data from "../data/businesses.json";
import { Input } from "native-base";
import { useState } from "react";

const HomeScreen = () => {
  const restaurants = data.restaurants;
  const shops = data.shops;
  const experiences = data.experiences;

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [filteredShops, setFilteredShops] = useState(shops);
  const [filteredExperiences, setFilteredExperiences] = useState(experiences);

  const searchFilterFunction = (search) => {
    setSearchQuery(search);

    const filteredRestaurants = restaurants.filter((item) =>
      item.address.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);

    const filteredShops = shops.filter((item) =>
      item.address.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredShops(filteredShops);

    const filteredExperiences = experiences.filter((item) =>
      item.address.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredExperiences(filteredExperiences);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.topTitle}>Featured Businesses Near You</Text>
          <Input
            variant="rounded"
            w="80%"
            textAlign="center"
            marginBottom={4}
            placeholder="enter your location"
            onChangeText={searchFilterFunction}
            value={searchQuery}
          />
        </View>
        {renderScrollableList(filteredRestaurants, "Restaurants")}
        {renderScrollableList(filteredShops, "Shops")}
        {renderScrollableList(filteredExperiences, "Experiences")}
      </ScrollView>
    </SafeAreaView>
  );
};

const renderScrollableList = (businessList, title) => (
  <View>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {businessList.map((business) => (
        <BusinessCard key={business.business_id} business={business} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  titleContainer: {
    paddingHorizontal: 10,
    marginTop: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  topTitle: {
    fontSize: 20,
    fontWeight: "regular",
    textAlign: "center",
    margin: 10,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HomeScreen;
