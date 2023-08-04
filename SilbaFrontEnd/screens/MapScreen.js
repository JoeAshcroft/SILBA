import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React from "react";
import data from "../data/businesses.json";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {data.restaurants.map((marker)=>(
          <Marker
          key={marker.business_id}
          coordinate={marker.location}
          title={marker.business_name}
          pinColor={'red'}
        />
        ))}
        {data.experiences.map((marker)=>(
          <Marker
          key={marker.business_id}
          coordinate={marker.location}
          title={marker.business_name}
          pinColor={'green'}
        />
        ))}
        {data.shops.map((marker)=>(
          <Marker
          key={marker.business_id}
          coordinate={marker.location}
          title={marker.business_name}
          pinColor={'blue'}
        />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
