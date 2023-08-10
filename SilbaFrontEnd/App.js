import React from "react";
import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import Navigation from "./nav/Navigation";
import { PaperProvider } from "react-native-paper";
import { AuthProvider } from "../SilbaFrontEnd/Utils/AuthContext";
import { BasketProvider } from "./context/basketContext";

export default function App() {
  return (
    <AuthProvider>
    <BasketProvider>
      <PaperProvider>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </PaperProvider>
      </BasketProvider>
    </AuthProvider>
  );
}
