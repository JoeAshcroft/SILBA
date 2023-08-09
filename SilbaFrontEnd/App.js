import React from "react";
import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import Navigation from "./nav/Navigation";
import { PaperProvider } from "react-native-paper";
import { AuthProvider } from "../SilbaFrontEnd/Utils/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </PaperProvider>
    </AuthProvider>
  );
}
