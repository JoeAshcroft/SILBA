import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from "react-native";
import BusinessCard from "../components/BusinessCard";
import { Input, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { getBusinesses } from "../api/api";
import { ActivityIndicator } from "react-native-paper";

const HomeScreen = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);

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

  useEffect(() => {
    filterBusinesses(searchQuery);
  }, [searchQuery, businesses]); // Include 'businesses' as a dependency here

  const filterBusinesses = (search) => {
    const filterByAddress = (business) =>
      business.address.toLowerCase().includes(search.toLowerCase());

    const filtered = businesses.filter((business) => filterByAddress(business));

    setFilteredBusinesses(filtered);
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
              onChangeText={setSearchQuery}
              placeholder="enter your location"
            />
          </View>
          {renderScrollableList(
            filteredBusinesses,
            "Restaurants",
            "restaurant"
          )}
          {renderScrollableList(filteredBusinesses, "Shops", "shop")}
          {renderScrollableList(
            filteredBusinesses,
            "Experiences",
            "experience"
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const renderScrollableList = (businessList, title, category) => {
  const filteredList = businessList.filter(
    (business) => business.category === category
  );

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filteredList.map((business) => (
          <BusinessCard key={business._id} business={business} />
        ))}
      </ScrollView>
    </View>
  );
};

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
