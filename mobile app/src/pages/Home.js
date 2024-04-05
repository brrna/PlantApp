import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MyCard from "../component/myCard/MyCard";
import MySearch from "../component/mySearch/MySearch";

function Home() {
    return (
        <SafeAreaView style={styles.container} >

            <MySearch />

            <MyCard />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    }
})

export default Home;