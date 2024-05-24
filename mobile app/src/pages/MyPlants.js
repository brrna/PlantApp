import { SafeAreaView, StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MySecondHeader from "../component/myBackHeader/MySecondHeader";
import MySearch from "../component/mySearch/MySearch";
import WhiteButton from "../component/whiteButton/WhiteButton";
import PlantsCard from "../component/myPlantsCard/PlantsCard";


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
            <View style={styles.cardView} >
                
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
    },
    cardView: {
        backgroundColor: "white",
        width: wp(100),
        height: hp(64)
    }
})

export default MyPlants;