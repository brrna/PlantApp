import { Image, SafeAreaView, StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MyHeader from "../component/myHeader/MyHeader";

function Profile() {
    return (
        <SafeAreaView style={styles.container} >
            <View
                style={styles.top}>
                <MyHeader />

                <View style={styles.imageView}>
                    <Image
                        source={require("../assests/images/user.png")}
                        resizeMode="center"
                        style={styles.image} />

                    <Text
                        style={styles.userText}>
                        Hello User
                    </Text>
                </View>

                <View style={styles.textContainer}>
                    <Pressable
                        style={styles.textView}>
                            <Image 
                            source={require("../assests/images/leafIcon.png")} />

                            <Text style={styles.text}>54</Text>

                            <Text style={styles.text}>My Plants</Text>
                    </Pressable>

                    <Pressable
                        style={styles.textView}>
                        <Image source={(require("../assests/images/starIcon.png"))} />

                        <Text style={styles.text}>54</Text>

                        <Text style={styles.text}>Favorite</Text>
                    </Pressable>
                </View>
            </View>


            <View
                style={styles.bottom}>
                </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    top: {
        backgroundColor: "rgba(194, 233, 198, 0.3)",
        height: hp(49),
        width: wp(100),
        borderBottomRightRadius: wp(25),
        borderBottomLeftRadius: wp(25),
        justifyContent: "space-between",
        alignItems: "center",
    },
    imageView: {
        height: hp(17),
        width: wp(38),
        backgroundColor: "rgba(194, 233, 198, 0.0)",
        justifyContent: "space-around",
        alignItems: "center"
    },
    image: {
        width: wp(28),
        height: hp(14),
        borderRadius: 1000
    },
    textContainer: {
        height: hp(9),
        width: wp(55),
        backgroundColor: "rgba(194, 233, 198, 0.0)",
        marginRight: wp(15),
        marginBottom: hp(1)
    },
    userText: {
        color: "rgba(0, 0, 0, 0.7)",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 16,
    },
    textView: {
        height: hp(4),
        width: wp(35),
        backgroundColor: "rgba(194, 233, 198, 0.0)",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 14, 
        fontWeight: "400", 
        color:"rgba(0, 0, 0, 0.59)"
    },
    bottom: {
        backgroundColor: "yellow",
        height: hp(50),
        width: wp(100),
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Profile;