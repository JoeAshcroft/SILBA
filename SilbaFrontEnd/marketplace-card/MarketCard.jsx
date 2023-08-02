import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";

// test data
// const market = [
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
//   {
//     itemName: "Sweet & Tangy BBQ Sauce",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2020/05/bbq-sauce-01-600x900.jpg",
//     businessName: "Smokin' Grillers",
//     description:
//       "Homemade BBQ sauce with a perfect balance of sweet and tangy.",
//     price: 7.99,
//     rating: 4.6,
//   },
// ];

const Card = () => ({});

export default function MarketCard() {
  return (
    <View style={styles.container}>
      {market.map((item, index) => {
        return (
          <View style={styles.card} key={index}>
            <Text>{item.itemName}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.image }} />
            </View>
            <Text style={styles.businessName}>{item.businessName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.businessName}>£{item.price}</Text>
            <Text style={styles.businessName}>Rating: {item.rating}</Text>
          </View>
        );
      })}
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
    width: "46%",
    backgroundColor: "#fff",
    margin: "2%",
    borderRadius: 0,
    elevation: 5,
    alignItems: "center",
    padding: 10,
  },
  imageContainer: {
    height: 200,
    width: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    borderRadius: 0,
  },
  businessName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});
