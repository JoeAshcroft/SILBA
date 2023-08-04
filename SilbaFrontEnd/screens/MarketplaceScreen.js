import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import MarketCard from '../components/MarketCard'


export default function MarketplaceScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={styles.marketTitle}>all items</Text>
      <MarketCard />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
marketTitle: {
  textAlign: "center",
  fontSize: 20,
  padding: 5,
}
})