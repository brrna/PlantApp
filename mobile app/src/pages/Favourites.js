import { SafeAreaView, View, StyleSheet} from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MySecondHeader from "../component/myBackHeader/MySecondHeader";
import MySearch from "../component/mySearch/MySearch";
import WhiteButton from "../component/whiteButton/WhiteButton";
import MiniCard from "../component/myMiniCard/MiniCard";

function Favorites({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <MySecondHeader
                headerText={"Favourites"}
                onPress={() => navigation.navigate('ProfileScreen')} />

            <MySearch onPress={() => navigation.navigate('ProfileScreen')} />

            <View style={styles.buttonView} >

                <WhiteButton 
                    buttonText={"Favourites"} />

                <WhiteButton 
                    buttonText={"My Plants"}
                    onPress={() => navigation.navigate('MyPlants')} />

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

export default Favorites;