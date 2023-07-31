import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';

import MapScreen from '../screens/HomeScreen';
import HomeScreen from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator()

export const BottomNav = () => {
    return (<NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} 
    options={{
            tabBarIcon: () => (
              <Ionicons name='home' size={32} color='black' />
            ),
          }} />
    <Tab.Screen name="Map" component={MapScreen} 
      options={{
            tabBarIcon: () => (
              <Ionicons name='map' size={32} color='black' />
            ),
          }}
    />
    <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name='person' size={32} color='black' />
            ),
          }}
        />
    </Tab.Navigator>
  </NavigationContainer>)
}
