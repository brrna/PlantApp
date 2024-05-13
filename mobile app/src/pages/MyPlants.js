import { SafeAreaView, StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MySecondHeader from "../component/myBackHeader/MySecondHeader";
import MySearch from "../component/mySearch/MySearch";
import WhiteButton from "../component/whiteButton/WhiteButton";


function MyPlants({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <MySecondHeader
                headerText={"My Plants"}
                onPress={() => navigation.navigate('ProfileScreen')} />

            <MySearch onPress={() => navigation.navigate('ProfileScreen')} />

            <View style={styles.buttonView} >

                <WhiteButton 
                    buttonText={"Favourites"}
                    onPress={() => navigation.navigate('Favorites')} />

                <WhiteButton buttonText={"My Plants"} />

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    buttonView: {
        backgroundColor: "white",
        height: hp(5),
        width: wp(100),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: wp(9),
        paddingRight: wp(9)
    }
})

export default MyPlants;