import { View, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import data from "../data/businesses.json";
import { IconButton } from "native-base";

export default function MapScreen() {
  const [location, setLocation] = useState({
    latitude: 53.483959,
    longitude: -2.244644,
  });
  const [region, setRegion] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

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

  const refreshLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);
    setRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  const returnCamera = async () => {
    this.map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        ref={(map) => {
          this.map = map;
        }}
      >
        <Marker
          key={"user"}
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        >
          <Image
            source={require("../assets/userLocation.png")}
            style={{ height: 35, width: 35 }}
          />
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
      <View style={styles.buttonContainer}>
        <IconButton
          icon={<Feather name="refresh-cw" size={24} color="black" />}
          style={styles.buttonRefresh}
          onPress={() => refreshLocation()}
        />
        <IconButton
          icon={<MaterialIcons name="my-location" size={24} color="black" />}
          style={styles.buttonLocate}
          onPress={() => returnCamera()}
        />
      </View>
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
    zIndex: -1,
  },
  buttonContainer: {
    zIndex: 2,
    flex: 1,
    flexDirection: "column",
    gap: 40,
    position: "absolute",
    bottom: 50,
    right: 20,
    justifyContent: "space-between",
  },
  buttonRefresh: {
    zIndex: 2,
    flex: 1,
    alignSelf: "center",
    borderWidth: 0.8,
    borderRadius: 25,
    borderColor: "#efefef",
    backgroundColor: "white",
    elevation: 5,
  },
  buttonLocate: {
    zIndex: 2,
    flex: 1,
    alignSelf: "center",
    borderWidth: 0.8,
    borderRadius: 25,
    borderColor: "#2181e1",
    backgroundColor: "#42bdff",
    elevation: 5,
  },
});
