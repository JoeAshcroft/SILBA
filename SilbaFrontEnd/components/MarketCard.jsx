import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Pressable } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import {useState, useEffect} from "react";
import {getMarketplaceItems} from "../api/api"
import { ActivityIndicator } from "react-native-paper";


export default MarketCard = () => {
  const [marketplaceItems, setMarketplaceItems] = useState([])
  const [loading, setLoading] = useState(false)

  const { navigate } = useNavigation()

  useEffect(() => {
    setLoading(true)
    getMarketplaceItems()
    .then(({item}) => {
      setMarketplaceItems(item)
      setLoading(false)
    })
    .catch((err) => {
      setLoading(true)
    })
  }, [])



  return (
<View>
    {loading ? (<View><ActivityIndicator/></View>) : (<View style={styles.container}>
    {marketplaceItems.map((item, index) => {
      return (
        <Pressable key={item.itemId} 
        onPress={() => {
    navigate("ItemDetailsScreen", {item})
  }} >
        <View style={styles.card} key={index}>
        
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: item.image }} />
          </View>
          <View style={styles.itemNameContainer}>
          <Text style={styles.itemName}>{item.itemname}</Text>
          
        </View>
          <View style={styles.nameDescriptionContainer}>
          <Text style={styles.businessName}>{item.sellerBusinessName}</Text>
          <Text style={styles.description}>{item.itemDescription}</Text>
         </View>
          
          <View style={styles.priceRatingContainer}>
          <Text style={styles.itemPrice}>£{item.itemPrice}</Text>
          <Text style={styles.itemRating}>{item.itemRating}/5</Text>
          </View>

         
        </View>

        </Pressable>
      );
    })}
  </View>) 
  }

    
</View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    height: 300,
    backgroundColor: "#fff",
    margin: "2%",
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
    padding: 3,
  },
  imageContainer: {
    height: 160,
    width: 160,
    paddingBottom: 10,
    paddingTop: 3,
  },
  image: {
    flex: 1,
    width: 160,
    resizeMode: "cover",
    borderRadius: 10,
  },
  businessName: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: 5,
    color: 'gray',
  
  },
  description: {
    fontSize: 12,
 
  },
  itemNameContainer: {
    height: 42,
    width: 160,
  },
  itemName: {
    fontSize: 17, 
  
  },
  nameDescriptionContainer: {
  width: 160,  
  height: 70,
  },

  itemPrice: {
  paddingRight: 80,
  fontStyle: "normal",
  color: "grey"
  },
  itemRating: {
    fontStyle: "normal",
    color: "grey"
  },
  priceRatingContainer: {
    width: 160,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-evenly",
  }

});
