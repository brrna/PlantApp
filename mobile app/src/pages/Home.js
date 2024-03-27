import React from "react";
import { SafeAreaView, Text, StyleSheet, View, ImageBackground } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

function Home() {
    return (
        <SafeAreaView style={styles.container} >
           <ImageBackground
                source={require("../assests/images/plantBackground.png")}
                style={styles.background}
                resizeMode="center">
                    <View style={styles.header} >
                <Text style={styles.headerText} >LeafLove</Text>
            </View>
            </ImageBackground> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    background: {
        backgroundColor: "lightred",
        width: wp(100),
        height: hp(100)
    },
    header: {
        width: wp(100),
        height: hp(13),
        backgroundColor: "yellow"
    },
    headerText: {
        fontSize: hp(4),
        fontWeight: "bold",
        color: "gray"
    }
})

export default Home;