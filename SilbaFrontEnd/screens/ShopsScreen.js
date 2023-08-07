import React from "react";
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from "react-native";
import BusinessCard from "../components/BusinessCard";
import data from "../data/businesses.json";
import { Input } from "native-base";
import { useState } from "react";

export default function ShopsScreen() {
  const shops = data.shops;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredShops, setFilteredShops] = useState(shops);

  const searchFilterFunction = (search) => {
    setSearchQuery(search);
    const filteredShops = shops.filter((item) =>
      item.address.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredShops(filteredShops);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.topTitle}>Shops Near You</Text>
          <Input
            variant="rounded"
            w="80%"
            placeholder="enter your location"
            textAlign="center"
            marginBottom={4}
            onChangeText={searchFilterFunction}
            value={searchQuery}
          />
        </View>
        {renderScrollableList(filteredShops, "Shops")}
      </ScrollView>
    </SafeAreaView>
  );
}

const renderScrollableList = (businessList, title) => (
  <View>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <ScrollView vertical showsVerticalScrollIndicator={false}>
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
