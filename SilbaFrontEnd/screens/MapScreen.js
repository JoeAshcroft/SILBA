import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  Platform,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { useNavigation } from '@react-navigation/native';
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { IconButton } from "native-base";
import { getBusinesses } from "../api/api";

export default function MapScreen() {
  const [businesses, setBusinesses] = useState([]);
  const [location, setLocation] = useState({
    latitude: 53.483959,
    longitude: -2.244644,
  });

  const { navigate } = useNavigation()

  useEffect(() => {
    getBusinesses().then((res) => {
      const businessArr = res.business.map((business) => {
        if (business.category === "restaurant") {
          business.pinColor = "red";
        } else if (business.category === "shop") {
          business.pinColor = "blue";
        } else if (business.category === "experience") {
          business.pinColor = "green";
        }
        return business;
      });
      setBusinesses(businessArr);
    });
  }, []);

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
        toolbarEnabled={false}
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
        {businesses.map((business) => (
          <Marker
            key={business.business_id}
            coordinate={{
              latitude: business.location.coordinates[0],
              longitude: business.location.coordinates[1],
            }}
            title={business.business_name}
            pinColor={business.pinColor}
          >
            <Callout onPress={() => {
                  navigate("BusinessDetailsScreen", { business });
                }}>
                <View style={styles.card}>
                  {Platform.OS === "ios" ? (
                    <Image
                      source={{ uri: business.images[0] }}
                      style={styles.image}
                    />
                  ) : (
                    <Text style={styles.textAndroid}>
                      <Image
                        source={{ uri: business.images[0] }}
                        style={styles.imageAndroid}
                      />
                    </Text>
                  )}
                  <Text style={styles.businessName}>
                    {business.business_name}
                  </Text>
                  <Text style={styles.description}>{business.description}</Text>
                </View>
            </Callout>
          </Marker>
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
  card: {
    width: Dimensions.get("window").width - 40,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 0,
    elevation: 5,
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: Dimensions.get("window").width - 60,
    height: 200,
    borderRadius: 0,
    marginBottom: 10,
  },
  businessName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
  textAndroid: {
    height: 300,
    flex: 1,
    marginTop: -100,
    width: 330,
  },
  imageAndroid: {
    width: Dimensions.get("window").width - 60,
    height: 200,
    borderRadius: 0,
    marginBottom: 10,
  },
});
