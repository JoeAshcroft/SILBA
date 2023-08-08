import React, { useEffect } from "react";
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from "react-native";
import BusinessCard from "../components/BusinessCard";
import { businesses } from "../data/businesses.json";
import { Input, Icon } from "native-base";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { getBusinesses } from "../api/api";
import { ActivityIndicator } from "react-native-paper";

export default function ExperiencesScreen() {
  const [experiences, setExperiences] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBusinesses()
      .then(({ business }) => {
        const restaurantsData = business.filter(
          (business) => business.category === "experience"
        );
        setExperiences(restaurantsData);
        setFilteredExperiences(restaurantsData);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, []);

  const searchFilterFunction = (search) => {
    setSearchQuery(search);
    const filteredExperiences = experiences.filter((item) =>
      item.address.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredExperiences(filteredExperiences);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.topTitle}>Experiences Near You</Text>
          <Input
            variant="rounded"
            w="80%"
            placeholder="enter your location"
            textAlign="left"
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

        {loading ? (
          <View>
            <ActivityIndicator />
          </View>
        ) : (
          <View>
            {renderScrollableList(filteredExperiences, "Experiences")}
          </View>
        )}
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
