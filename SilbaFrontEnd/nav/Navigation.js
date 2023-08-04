import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MapScreen from "../screens/MapScreen";
import HomeScreen from "../screens/HomeScreen";
import MarketplaceScreen from "../screens/MarketplaceScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BusinessDetailsScreen from "../screens/homeStack/BusinessDetailsScree";
import RestaurantsScreen from "../screens/RestaurantsScreen";
import ShopsScreen from "../screens/ShopsScreen";
import ExperiencesScreen from "../screens/ExperiencesScreen";
import LoginScreen from "../screens/LoginScreen";
import ItemDetailsScreen from "../screens/itemStack/ItemDetailsScreen";
import BasketScreen from "../screens/BasketScreen";

// top tabs

const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
        },
      }}
    >
      <TopTabs.Screen name="browse all" component={HomeScreen} />
      <TopTabs.Screen name="restaurants" component={RestaurantsScreen} />
      <TopTabs.Screen name="shops" component={ShopsScreen} />
      <TopTabs.Screen name="experiences" component={ExperiencesScreen} />
    </TopTabs.Navigator>
  );
}

// stack

const HomeStack = createNativeStackNavigator();

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="BottomNav"
        component={BottomNav}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="BusinessDetailsScreen"
        component={BusinessDetailsScreen}
        options={{ presentation: "modal"  , headerShown: false}}
      />
      <HomeStack.Screen
        name="ItemDetailsScreen"
        component={ItemDetailsScreen}
        options={{ presentation: "modal" , headerShown: false}}

      />
      <HomeStack.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{ presentation: "modal" , headerShown: false}}

      />

    </HomeStack.Navigator>
  );
};

// bottom tab

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Map") {
            iconName = focused ? "map" : "map-outline";
          } else if (route.name === "Marketplace") {
            iconName = focused ? "basket" : "basket-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={TopTabsGroup}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Marketplace"
        component={MarketplaceScreen}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
};

// drawer

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="silba" component={HomeStackGroup} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Basket" component={BasketScreen} />
      <Drawer.Screen name="Restaurants" component={RestaurantsScreen} />
      <Drawer.Screen name="Shops" component={ShopsScreen} />
      <Drawer.Screen name="Experiences" component={ExperiencesScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};


export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}
