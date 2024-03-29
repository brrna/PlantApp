import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles() {
    return StyleSheet.create({
        frameFirst: {
            backgroundColor: "#333E32",
            height: hp(25),
            width: wp(92),
            borderRadius: 15,
            marginLeft: wp(2)
        },
        frameSecond: {
            backgroundColor: "#6D946C",
            height: hp(23),
            width: wp(91),
            borderRadius: 15,
            marginLeft: wp(3),
            padding: wp(2),
        },
        container: {
            backgroundColor: "white",
            height: hp(20),
            width: wp(86),
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            padding: wp(2)
        },
        image : {
            backgroundColor: "white",
            height: hp(20),
            width: wp(48),
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15
        },
        text: {
            backgroundColor: "#C4EDD0",
            height: hp(20),
            width: wp(34),
            borderRadius: 15,
            marginLeft: wp(4)
        }
    })
}