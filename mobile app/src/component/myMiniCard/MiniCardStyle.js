import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles() {
    return StyleSheet.create({
        container: {
            backgroundColor: "white",
            width: wp(100),
            height: hp(16.3),
            justifyContent: "center",
            alignItems: "center"
        },
        shadow: {
            shadowColor: "gray",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.5,
            shadowRadius: 1
        },
        card: {
            backgroundColor: "white",
            height: hp(11),
            width: wp(82),
            borderRadius: 5,
            flexDirection: "row"
        },
        imageView: {
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            height: hp(11),
            width: wp(23),
            borderRadius: 1000
        },
        image: {
            height: hp(7),
            width: wp(14),
            borderRadius: 1000
        },
        textView: {
            backgroundColor: "white",
            height: hp(11),
            width: wp(43),
            justifyContent: "center"
        },
        text: {
            color:"black",
            fontStyle: "italic",
            fontWeight: "500",
            fontSize: 18,
            marginLeft: wp(2)
        },
        iconView: {
            backgroundColor: "white",
            height: hp(11),
            width: wp(15),
            justifyContent: "center",
            alignItems: "center"
        },
        icon: {}
    })
}