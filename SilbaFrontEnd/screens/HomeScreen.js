import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from "react-native";
import BusinessCard from "../components/BusinessCard";
import { Input, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { getBusinesses } from "../api/api";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";

const HomeScreen = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [shops, setShops] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setLoading(true);
    getBusinesses()
      .then(({ business }) => {
        setBusinesses(business);
        setLoading(false);
        setSearchQuery("manchester");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchFilterFunction = (search) => {
    console.log(search);
    setSearchQuery(search);
    filterBusinesses(search);
  };

  const filterBusinesses = (search) => {
    const filterByAddress = (business) =>
      business.address.toLowerCase().includes(search.toLowerCase());

    const filteredRestaurants = businesses.filter(
      (business) =>
        business.category === "restaurant" && filterByAddress(business)
    );
    setRestaurants(filteredRestaurants);

    const filteredShops = businesses.filter(
      (business) => business.category === "shop" && filterByAddress(business)
    );
    setShops(filteredShops);

    const filteredExperiences = businesses.filter(
      (business) =>
        business.category === "experience" && filterByAddress(business)
    );
    setExperiences(filteredExperiences);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.inputContainer}>
            <Text style={styles.topTitle}>Featured Businesses Near You</Text>
            <Input
              variant="rounded"
              w="80%"
              textAlign="left"
              marginBottom={4}
              fontSize={14}
              value={searchQuery}
              onChangeText={searchFilterFunction}
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="6"
                  as={<FontAwesome5 name="map-marker-alt" color="black" />}
                  color="gray.400"
                />
              }
              placeholder="enter your location"
            />
          </View>
          {renderScrollableList(restaurants, "Restaurants")}
          {renderScrollableList(shops, "Shops")}
          {renderScrollableList(experiences, "Experiences")}
        </ScrollView>
      )}
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
        <BusinessCard key={business._id} business={business} />
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
    fontWeight: "normal",
    textAlign: "center",
    margin: 10,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
