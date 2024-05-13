import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles() {
    return StyleSheet.create({
        container: {
            backgroundColor: "rgba(255, 255, 255, 0)",
            width: wp(100),
            height: hp(6),
            alignItems: "center",

        },
        shadow: {
            shadowColor: "gray",
            shadowOffset: {
                width: 0,
                height: 8,
            },
            shadowOpacity: 0.5,
            shadowRadius: 1
        },
        search: {
            backgroundColor: "white",
            width: wp(65),
            height: hp(3),
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "white",
            borderWidth: 1,
            elevation: 5
        },
        iconView: {
            backgroundColor: "white",
            height: hp(3),
            width: wp(6),
            justifyContent: "center",
            alignItems: "center"
        },
        icon: {
            color: "gray",
        },
        input: {
            height: hp(5),
            width: wp(53),
            padding: 10,
            alignItems: "center",
            color: "rgba(0, 0, 0, 0.56)",
            fontWeight: "bold"
        },
        modalContainer: {
            height: hp(100),
            width: wp(100),
            backgroundColor: "white",
            alignItems: "center"
        },
        modalView: {
            backgroundColor: "rgba(240, 238, 238, 1)",
            justifyContent: "center",
            alignItems: "center",
            height: hp(26),
            width: wp(60),
            borderRadius: 8,
            borderColor: "rgba(225, 56, 56, 1)",
            borderWidth: 1,
            marginTop: hp(20)
        },
        modalText: {
            color: "rgba(0, 0, 0, 0.47)",
            fontSize: 25,
            fontWeight: "bold",
            width: wp(50),
            height: hp(12)
        }
    })
}