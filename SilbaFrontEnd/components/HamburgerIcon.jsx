import React from 'react';
import { Image } from 'react-native';

const HamburgerIcon = () => {
  return (
    <Image
      source={require('../assets/hamburgerIcon.png')}
      style={{ width: 30, height: 30 }} // 
      resizeMode="contain" 
    />
  );
};

export default HamburgerIcon;