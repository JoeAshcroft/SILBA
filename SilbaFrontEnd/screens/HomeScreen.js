import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView } from 'react-native';
import BusinessCard from '../components/BusinessCard';
import data from '../data/businesses.json'
import { Center, Input } from 'native-base';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    
      <ScrollView>
      

     <View style={styles.inputContainer}>
     <Text style={styles.topTitle}>Featured Businesses Near You</Text>
      <Input variant="rounded" w="80%" 
        placeholder="enter your location"
        textAlign="center"
        marginBottom={4}

        onChangeText={(text) => {
         
        }}
      />
    </View>
        {renderScrollableList(data.restaurants, 'Restaurants')}
        {renderScrollableList(data.shops, 'Shops')}
        {renderScrollableList(data.experiences, 'Experiences')}
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
    fontWeight: 'bold',
  },
  topTitle: {
    fontSize: 20,
    fontWeight: 'regular',
    textAlign: 'center',
    margin: 10,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',


  },
 
});
export default HomeScreen;