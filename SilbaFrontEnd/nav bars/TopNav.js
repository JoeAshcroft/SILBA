import { Menu, Box, Icon } from 'native-base';
import { Pressable, Text } from 'react-native';


export const TopNav = () => {
  return <Box w="90%" alignItems="center">
      <Menu w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
             <Icon type="MaterialIcons" name="menu" size={30} color="black" />
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