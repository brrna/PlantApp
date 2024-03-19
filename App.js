import { SafeAreaView, Text } from "react-native";

function App() {
  return(
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "lightgreen",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>

        <Text>
          HELLO, PLANT APP
        </Text>

    </SafeAreaView>
  )
}

export default App;