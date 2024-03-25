import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import React from "react";

function Start() {
    return (
        <SafeAreaView style={styles.safecontainer}>
            <View style={styles.firstview}>
                <Text>This is start</Text>
            </View>
            <View style={styles.secondview}>
                <View style={{justifyContent:"flex-start",alignItems:"flex-start",marginLeft:hp(3)}}>
                    <Text>Scan your</Text>
                    <Text>plant and find</Text>
                    <Text>out what it is.</Text>
                </View>
                <View style={{}}>
                    <Text>Scan your</Text>
                    <Text>plant and find</Text>
                    <Text>out what it is.</Text>
                </View>




            </View>
        </SafeAreaView>
    )
}

export default Start;

const styles = StyleSheet.create({
    safecontainer: {
        flex: 1
    },
    firstview: {
        flex: 1,
        backgroundColor: "red"

    },
    secondview: {
        flex: 1,
        backgroundColor: "blue"

    }

})

