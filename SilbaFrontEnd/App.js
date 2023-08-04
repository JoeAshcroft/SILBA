import React from "react";
import "react-native-gesture-handler"
import { NativeBaseProvider} from "native-base";
import Navigation from "./nav/Navigation";



export default function App() {
  return (
    <NativeBaseProvider>
    <Navigation/> 
    
    </NativeBaseProvider>
  );
}