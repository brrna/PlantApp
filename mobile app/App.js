import { SafeAreaView, Text } from "react-native";
import Router from "./src/pages/Router";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  return(
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App;