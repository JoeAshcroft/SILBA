
// import { BottomNav } from "./nav bars/BottomNav";
// import React from "react";
// import { SideNav } from "./nav bars/TopNav";
// import { View } from "react-native";


// export default function App() {
//   return ( <>
 
//     <BottomNav />
//         </>
//   );
// }

import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { Text, View } from "react-native";
import { BottomNav } from "./nav bars/BottomNav";
import { TopNav } from "./nav bars/TopNav";


export default function App() {
  return (
    <NativeBaseProvider>
   {/* <TopNav />  */}
  <BottomNav/> 
    </NativeBaseProvider>
  );
}