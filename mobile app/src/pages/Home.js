import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MyCard from "../component/myCard/MyCard";
import MySearch from "../component/mySearch/MySearch";
import MyHeader from "../component/myHeader/MyHeader";
import SecondHeader from "../component/secondHeader/SecondHeader";

function Home() {
    return (
        <SafeAreaView style={styles.container} >

            <MyHeader />

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