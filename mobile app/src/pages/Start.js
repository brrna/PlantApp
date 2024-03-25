import { SafeAreaView, StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Start({ setSplash }) {

    // const handlePress = () => {
    //     setSplash(false); // Handle pressi onpresin içine de koyup
    // };


    return (
        <SafeAreaView style={styles.safecontainer}>
            <View style={styles.firstview}>
                <Image style={styles.leapimage} source={require("../images/pngFirstPage.png")} />
                <View style={styles.welcomeinsadeview}>
                    <View style={styles.welcomeview}>
                        <Text style={styles.welcometext}>WELCOME !</Text>
                    </View>
                </View>


            </View>
            <View style={styles.secondview}>
                <View style={{ justifyContent: "flex-start", alignItems: "flex-start", marginLeft: hp(4) }}>
                    <Text style={styles.texts}>Scan your</Text>
                    <Text style={styles.texts}>plant and find</Text>
                    <Text style={styles.texts}>out what it is.</Text>
                </View>
                <View style={{ justifyContent: "flex-start", alignItems: "flex-start", marginLeft: hp(4), marginTop: hp(3) }}>

                    <Text style={styles.texts}>A perfect app</Text>
                    <Text style={styles.texts}>for plant</Text>
                    <Text style={styles.texts}>lovers.</Text>
                </View>
                <View >
                    <TouchableOpacity  onPress={() => setSplash(false)} style={styles.toucahableopacityget}>
                        <Text style={styles.tocuhabletext}>Get Started</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:"center",alignItems:"center",marginTop:hp(2)}}>
                        <Text>By tapping next, you are agreeing to LeafLove </Text>
                        <Text>Terms of Use &  Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Start;

const styles = StyleSheet.create({
    safecontainer: {
        flex: 1,
        backgroundColor: "#D4EAF1"
    },
    firstview: {
        flex: 1,
        backgroundColor: "#D4EAF1"

    },
    secondview: {
        flex: 1,

    },
    leapimage: {
        width: wp(35),
        height: hp(35),
        marginLeft: wp(24)
    },
    welcomeview: {
        width: wp(58),
        height: hp(8),
        backgroundColor: "#A2DFA4",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -hp(1),
        marginLeft: -wp(2)

    },
    welcomeinsadeview: {
        width: wp(59),
        height: hp(8),
        backgroundColor: "black",
        marginLeft: wp(38),
        marginTop: hp(2),


    },
    welcometext: {
        color: "#000000",
        fontSize: hp(3.5),
        fontWeight: "bold"

    },
    texts: {
        fontSize: hp(2.75),
        color: "#555F80"
    },
    toucahableopacityget: {
        width: wp(80), 
        backgroundColor: "red",
         height: hp(6), alignSelf: "center", 
         borderRadius: hp(5), 
         justifyContent: "center", 
         alignItems: "center",
         marginTop:hp(5),
         backgroundColor:"#26ECA5"

    },
    tocuhabletext:{
        color:"white",
        fontSize:hp(2.5)
    }

})

