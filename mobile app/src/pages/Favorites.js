import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

function Favorites({navigation}){
    return(
        <SafeAreaView
            style={{flex: 1, backgroundColor: "green"}}>

                <TouchableOpacity
                    style={{height: 50, width: 50, backgroundColor: "red"}}
                    onPress={() =>navigation.navigate('ProfileScreen')}>
                        <Text>X</Text>
                </TouchableOpacity>

                <Text>favoriler</Text>

        </SafeAreaView>
    )
}

export default Favorites;