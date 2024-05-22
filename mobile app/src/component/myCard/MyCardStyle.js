import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles() {
    return StyleSheet.create({
        background: {
            backgroundColor: "white",
            width: wp(100),
            height: hp(26)
        },
        frameFirst: {
            backgroundColor: "#333E32",
            height: hp(24),
            width: wp(92),
            borderRadius: 15,
            marginLeft: wp(2)
        },
        frameSecond: {
            backgroundColor: "#6D946C",
            height: hp(22.5),
            width: wp(91),
            borderRadius: 15,
            marginLeft: wp(3),
            padding: wp(2),
        },
        container: {
            backgroundColor: "white",
            height: hp(20),
            width: wp(84),
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginLeft: wp(1)
        },
        imageView : {
            backgroundColor: "white",
            height: hp(20),
            width: wp(48),
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            justifyContent: "center",
            marginLeft: wp(1)
        },
        image: {
            height: hp(20),
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15
        },
        textView: {
            backgroundColor: "rgba(196, 237, 208, 1)",
            height: hp(20),
            width: wp(38),
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center"
        },
        text:{
            color: "rgba(46, 137, 132, 1)",
            fontWeight: "800",
            fontSize: 21
        }
    })
}