import React from "react";
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from "react-native";
import BusinessCard from "../components/BusinessCard";
import {businesses} from "../data/businesses.json";
import { Input, Icon } from "native-base";
import { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { useEffect } from "react";

export default function ShopsScreen() {
  const [shops, setShops] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredShops, setFilteredShops] = useState([]);


  useEffect(() => {
    const shopsData = businesses.filter(
      (item) => item.category === "shops"
    );

    setShops(shopsData);
  setFilteredShops(shopsData);}, [])

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
            m="2"
            ml="3"
            size="6"
            color="gray.400"
            as={<FontAwesome5 name="map-marker-alt" color="black" />}
            marginBottom={4}
            onChangeText={searchFilterFunction}
            value={searchQuery}
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="gray.400"
                as={<FontAwesome5 name="map-marker-alt" color="black" />}
              />
            }
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
