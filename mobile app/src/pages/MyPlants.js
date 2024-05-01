import { SafeAreaView, TouchableOpacity, Text } from "react-native";

function MyPlants({navigation}) {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
            <TouchableOpacity
                    style={{height: 50, width: 50, backgroundColor: "red"}}
                    onPress={() =>navigation.navigate('ProfileScreen')}>
                        <Text>X</Text>
                </TouchableOpacity>

                <Text>bitkilerim</Text>
        </SafeAreaView>
    )
}
export default MyPlants;