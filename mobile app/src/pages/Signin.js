import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native";
import MyHeader from "../component/myHeader/MyHeader";
import Welcome from "../component/myWelcome/Welcome";
import MyTextinput from "../component/myTextInput/MyTextinput";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function Signin({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (

        <KeyboardAwareScrollView enableOnAndroid={true}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={styles.container}>
                <MyHeader />
                <Welcome text={"WELCOME!"} />
                <View>
                    <Image style={styles.imageplant} source={require("../assests/images/plantBackground.png")} />
                </View>
                <MyTextinput value={email} setValue={setEmail} placeholder={"Enter your nickname or email"} />
                <View style={styles.viewrow}>
                    <View style={styles.passwordContainer}>
                        <MyTextinput value={password} setValue={setPassword} placeholder={"Enter your password"} style={{ marginTop: hp(2.5) }} />
                        <TouchableOpacity style={styles.eyeButton}>
                            <Image source={require("../assests/images/eye.png")} style={styles.eyeimage} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.viewtext}>
                    <Text style={styles.signintext}>Sign in</Text>
                </TouchableOpacity>
                <View style={styles.viewrows}>
                    <Text style={styles.textaccount}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
                        <Text style={styles.signuptext}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        </KeyboardAwareScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",

    },
    imageplant: {
        marginTop: hp(1.75),
        height: hp(46),
    },
    passorwordmyinput: {
        height: hp(5),
        width: wp(62),
        backgroundColor: "#E0EDCB",
        position: "absolute",
        borderRadius: hp(5),
        textAlign: "center",
    },
    eyeimage: {
        width: wp(4),
        height: hp(2),
    },
    viewrow: {
        flexDirection: "row",
        alignItems: "center"
    },
    viewrows: {
        flexDirection: "row",
        marginTop: hp(1),
        gap: wp(1)
    },
    passwordContainer: {
        position: "relative"
    },
    eyeButton: {
        position: "absolute",
        right: wp(4),
        top: hp(4),
        zIndex: 1, // Ensures the eye button is above the text input
    },
    viewtext: {
        marginTop: hp(1.5)
    },
    signintext: {
        color: "background: rgba(18, 80, 173, 0.69);",
        fontWeight:"bold",
        fontSize: hp(3)
    },
    signuptext: {
        color: "background: rgba(18, 80, 173, 0.69);",
        fontWeight: "bold"
    },
    textaccount: {
        fontWeight: "bold",
        color:"background: rgba(77, 95, 121, 0.63);"
    }
});

export default Signin;
