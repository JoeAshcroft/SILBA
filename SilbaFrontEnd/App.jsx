import React from "react";
import "react-native-gesture-handler"
import { NativeBaseProvider} from "native-base";

import Navigation, { BottomNav } from "./nav bars/BottomNav";



export default function App() {
  return (
    <NativeBaseProvider>
    <Navigation/> 
    </NativeBaseProvider>
  );
}