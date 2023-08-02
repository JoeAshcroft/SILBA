
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MapScreen from '../screens/MapScreen';
import HomeScreen from '../screens/HomeScreen';
import MarketplaceScreen from '../screens/MarketplaceScreen';
import ProfileScreen from '../screens/ProfileScreen';



//bottom tab 

const Tab = createBottomTabNavigator()

const BottomNav = () => {

    return (
    <Tab.Navigator
    screenOptions={({route, navigation}) => ({
      tabBarIcon: ({color, focused, size}) => {
        let iconName;
        if (route.name === "Home") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Map") {
          iconName = focused ? "map" : "map-outline";
        } else if (route.name === "Marketplace") {
          iconName = focused ? "basket" : "basket-outline"
        }

        return <Ionicons name ={iconName} size={size} color={color}/>
      },
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "gray",
    })}>
  
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Marketplace" component={MarketplaceScreen}/>
    </Tab.Navigator>

  )
}


// drawer 

const Drawer = createDrawerNavigator()

const DrawerNav = () => {
return (
  <Drawer.Navigator>
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
)
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomNav /> 
    </NavigationContainer>
  )
}