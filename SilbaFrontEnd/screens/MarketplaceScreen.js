import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MarketCard from '../components/MarketCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from "react-native-paper";

export default function MarketplaceScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
        icon="basket"
          style={styles.headerButton}
          onPress={() => navigation.navigate("BasketScreen")}
        >
          <Text style={styles.headerButtonText}>Basket</Text>
        </IconButton>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <Text style={styles.marketTitle}>all items</Text>
      <MarketCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  marketTitle: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
  },
  headerButton: {
  marginRight: 10,
    paddingRight: 10,
    borderRadius: 0,
  },
  
});
