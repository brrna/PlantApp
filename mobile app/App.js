import { SafeAreaView, Text } from "react-native";

function App() {
  return(
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "lightgreen",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>

        <Text>
          HELLO!
          THIS IS PLANT APP
        </Text>

    </SafeAreaView>
  )
}

export default App;