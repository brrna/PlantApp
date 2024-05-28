import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MyHeader from "../component/myHeader/MyHeader";
import Welcome from "../component/myWelcome/Welcome";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MyTextinput from "../component/myTextInput/MyTextinput";
import { useContext, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";

function Signup({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const {register,isLoading,userMessage}= useContext(AuthContext);

    const togglePasswordVisibility = () => {
        setSecureTextEntry(prev => !prev);
    };

    return (

        <KeyboardAwareScrollView enableOnAndroid={true}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={styles.container}>
                <Spinner visible={isLoading}/>
                <MyHeader />
                <Welcome text={"Welcome back!"} />
                <View style={styles.textviewstyle}>
                    <Text style={styles.textstyle}> Explore the wonders of nature</Text>
                    <Text style={styles.textstyle}> through our botanical gateway.</Text>
                </View>
                <Image style={styles.imagestyle} source={require("../assests/images/plantBackground.png")} />
                <View style={styles.textinpucontainer}>
                    <MyTextinput value={nickname} setValue={setNickname} placeholder={"Enter your nickname"} />
                    <MyTextinput value={email} setValue={setEmail} placeholder={"Enter your email"} style={{ marginTop: hp(2) }} />
                    <View style={styles.eyetextinput}>
                        <MyTextinput value={password} setValue={setPassword} placeholder={"Enter your password"} secureTextEntry={secureTextEntry} />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Image style={styles.eyeimage} source={require("../assests/images/eye.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.eyetextinput}>
                        <MyTextinput value={confirmpassword} setValue={setConfirmpassword} placeholder={"Confirm your password"} secureTextEntry={secureTextEntry} />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Image style={styles.eyeimage} source={require("../assests/images/eye.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signuptextview}>
                        <TouchableOpacity onPress={()=> register(email,nickname,password)}>
                            <Text style={styles.signuptext}> Sign up </Text>
                        </TouchableOpacity>
                        <View style={styles.viewrows}>
                            <Text style={styles.textaccount}>Already have an account?</Text>
                            <TouchableOpacity onPress={()=> navigation.navigate("Signin")}>
                                <Text style={styles.siginblue} >Sign In</Text>
                            </TouchableOpacity>
                            

                        </View>
                        {
                           userMessage?
                           (
                            <Text style={styles.usermmesage}> {userMessage}</Text>
                           ):null
                        }
                    </View>

                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    textviewstyle: {
        alignSelf: "flex-start",
        marginLeft: hp(1),
        marginTop: hp(1)
    },
    textstyle: {
        fontSize: hp(2),
        color: "rgba(0, 0, 0, 0.63)",
        textShadowColor: 'rgba(0, 0, 0, 0.20)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        fontWeight:"bold"

    },
    imagestyle: {
        height: hp(48),
        width: wp(100),
        resizeMode: "cover",
    },
    textinpucontainer: {
        position: "absolute",
        justifyContent: "center",
        marginTop: hp(58),

    },
    eyetextinput: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        marginTop: hp(2)
    },
    eyeimage: {
        position: "absolute",
        right: wp(2),
        width: wp(4),
        height: hp(2),
        bottom: -7
    },
    signuptextview: {
        alignItems: "center",
        marginTop: hp(2)
    },
    signuptext: {
        color: "background: rgba(18, 80, 173, 0.69)",
        fontWeight: "bold",
        fontSize: hp(3)
    },
    viewrows: {
        flexDirection: "row",
        marginTop: hp(1),
        gap: wp(1)
    },
    textaccount: {
        fontWeight: "bold",
        color:"background: rgba(77, 95, 121, 0.63)"
    },
    siginblue: {
        color: "background: rgba(18, 80, 173, 0.63);",
        fontWeight: "bold"
    },
    usermmesage:{
        color: "red",
        marginTop:hp(1)
    }
})
export default Signup;