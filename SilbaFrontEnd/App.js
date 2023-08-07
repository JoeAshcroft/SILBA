import React from "react";
import "react-native-gesture-handler"
import { NativeBaseProvider} from "native-base";
import Navigation from "./nav/Navigation";
import { PaperProvider } from "react-native-paper";



export default function App() {
  return (
    <PaperProvider>
    <NativeBaseProvider>
    <Navigation/> 
    
    </NativeBaseProvider>
    </PaperProvider>
  );
}