import { Menu, Box } from 'native-base';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const TopNav = () => {
  return <Box w="90%" position="relative">
      <Menu w="190" 
        trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
             <Ionicons name='menu' size={32} color='black' />
            </Pressable>;
    }}>
        <Menu.Item>Restaurants</Menu.Item>
        <Menu.Item>Shops</Menu.Item>
        <Menu.Item>Experiences</Menu.Item>
        <Menu.Item>Marketplace</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>Contact Us</Menu.Item>
        <Menu.Item>Blog</Menu.Item>
      </Menu>
    </Box>;
}
