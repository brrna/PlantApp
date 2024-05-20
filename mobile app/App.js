import { SafeAreaView, Text } from "react-native";
import Router from "./src/pages/Router";
import { NavigationContainer } from "@react-navigation/native";
import Start from "./src/pages/Start";
import React, { useEffect, useState } from 'react';
import { AuthProvider } from "./src/context/AuthContext";

function App() {
  const [splash, setSplash] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSplash(false);
  //   }, 5000)
  // })

  return (
    <AuthProvider>
      <NavigationContainer>
        {splash ? <Start setSplash={setSplash} /> : <Router />}
      </NavigationContainer>
    </AuthProvider>

  )
}

export default App;