import { StyleSheet, View, Text, Image } from "react-native";
import { create } from "react-test-renderer";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


function Welcome({text}) {
    return (
        <View style={styles.welcomeinsadeview}>
            <View style={styles.welcomeview}>
                <Text style={styles.welcometext}> {text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeview: {
        width: wp(58),
        height: hp(8),
        backgroundColor: "#A2DFA4",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -hp(1),
        marginLeft: -wp(2)

    },
    welcometext: {
        color: "#000000",
        fontSize: hp(3.5),
        fontWeight: "bold",
        textShadowColor: 'rgba(0, 0, 0, 0.40)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,

    },
    welcomeinsadeview: {
        width: wp(59),
        height: hp(8),
        backgroundColor: "black",
        marginTop: hp(2),
        marginRight:wp(8)



    },
    
})
export default Welcome;