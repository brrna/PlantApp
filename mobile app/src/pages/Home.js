import React from "react";
import { SafeAreaView, Text, StyleSheet, View, ImageBackground, Image } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MyCard from "../component/myCard/MyCard";

function Home() {
    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.header} >
                <Text style={styles.headerText} >LeafLove</Text>
            </View>

            <MyCard/> 

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
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