import { View, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import data from "../data/businesses.json";

export default function MapScreen() {
  const [location, setLocation] = useState({latitude: 53.483959, longitude: -2.244644});

  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    };
    getPermission();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Marker
            key={"user"}
            coordinate={{latitude: location.latitude,
              longitude: location.longitude}}
          >
            <Image source={require("../assets/userLocation.png")} style={{height: 35, width:35 }} />
          </Marker>
          
        {data.restaurants.map((marker) => (
          <Marker
            key={marker.business_id}
            coordinate={marker.location}
            title={marker.business_name}
            pinColor={"red"}
          />
        ))}
        {data.experiences.map((marker) => (
          <Marker
            key={marker.business_id}
            coordinate={marker.location}
            title={marker.business_name}
            pinColor={"green"}
          />
        ))}
        {data.shops.map((marker) => (
          <Marker
            key={marker.business_id}
            coordinate={marker.location}
            title={marker.business_name}
            pinColor={"blue"}
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
