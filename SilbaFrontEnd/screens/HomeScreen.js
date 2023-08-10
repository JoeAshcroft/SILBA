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
  const [restaurants, setRestaurants] = useState(
    businesses.filter((item) => item.category === "restaurant")
  );
  const [shops, setShops] = useState(
    businesses.filter((item) => item.category === "shop")
  );
  const [experiences, setExperiences] = useState(
    businesses.filter((item) => item.category === "experience")
  );

  useEffect(() => {
    setLoading(true);
    getBusinesses()
      .then(({ business }) => {
        setBusinesses(business);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchFilterFunction = (search) => {
    setSearchQuery(search);
    filterBusinesses(search);
  };

  const filterBusinesses = (search) => {
    const filterByAddress = (item) =>
      item.address.toLowerCase().includes(search.toLowerCase());

    const filteredRestaurants = businesses.filter(
      (item) => item.category === "restaurant" && filterByAddress(item)
    );
    setRestaurants(filteredRestaurants);

    const filteredShops = businesses.filter(
      (item) => item.category === "shop" && filterByAddress(item)
    );
    setShops(filteredShops);

    const filteredExperiences = businesses.filter(
      (item) => item.category === "experience" && filterByAddress(item)
    );
    setExperiences(filteredExperiences);
  };

  // const restaurants = businesses.filter((business) => {
  //   return business.category === "restaurant";
  // });

  // const shops = businesses.filter((business) => {
  //   return business.category === "shop";
  // });

  // const experiences = businesses.filter((business) => {
  //   return business.category === "experience";
  // });

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
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="6"
                  color="gray.400"
                  as={<FontAwesome5 name="map-marker-alt" color="black" />}
                  value={searchQuery}
                  onChangeText={searchFilterFunction}
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
