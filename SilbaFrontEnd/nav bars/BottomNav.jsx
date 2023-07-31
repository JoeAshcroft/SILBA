import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import RestaurantsScreen from '../screens/RestaurantsScreen';
import MapScreen from '../screens/HomeScreen';
import ExperiencesScreen from '../screens/ExperiencesScreen';
import ShopScreen from '../screens/ShopsScreen';
import MarketplaceScreen from '../screens/MartketplaceScreen';

const Tab = createBottomTabNavigator()

export const BottomNav = () => {
    return (<NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
    <Tab.Screen name="Shops" component={ShopScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Experiences" component={ExperiencesScreen} />
    <Tab.Screen name="Marketplace" component={MarketplaceScreen} />
    </Tab.Navigator>
  </NavigationContainer>)
}
