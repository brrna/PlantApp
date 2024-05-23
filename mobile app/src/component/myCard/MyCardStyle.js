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
        },
        modalContainer:{
            backgroundColor: "white",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center"
        },
        modalImg: {
            height: hp(35),
            width: wp(100),
            borderBottomRightRadius: 45.92,
            borderBottomLeftRadius: 45.92
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
        textContainer: {
            backgroundColor: "white",
            height: hp(58),
            width: wp(100),
            alignItems: "center",
            justifyContent: "space-around"
        },
        nameViev: {
            backgroundColor: "white",
            height: hp(7),
            width: wp(94),
            flexDirection: "row",
            borderRadius: 14,
            justifyContent: "flex-start",
            alignItems: "flex-start"
        },
        nameTextView: {
            backgroundColor: "white",
            height: hp(6),
            width: wp(35),
            marginLeft: wp(5),
            justifyContent: "center"
        },
        nameText: {
            color: "rgba(0, 0, 0, 0.64)",
            fontWeight: "900",
            fontSize: 24,
            fontStyle: "italic",
            fontFamily: "Inter"
        },
        leafView: {
            backgroundColor: "white",
            height: hp(6),
            width: wp(5),
            justifyContent: "center",
            alignItems: "center"
        },
        descriptionFrameView: {
            backgroundColor: "rgba(47, 74, 45, 1)",
            height: hp(40),
            width: wp(80),
            borderRadius: 3.48
        },
        descriptionView: {
            backgroundColor: "white",
            height: hp(40),
            width: wp(80),
            marginLeft: wp(5),
            marginTop: wp(-5),
            borderRadius: 6.09,
            justifyContent: "center",
            alignItems: "flex-end"
        },

        descriptionHeader: {
            backgroundColor: "white",
            width: wp(80),
            height: hp(8),
            justifyContent: "center",
            borderRadius: 6.09
        },
        plantsDetail: {
            color: "rgba(0, 0, 0, 0.51)",
            fontWeight: "900",
            marginLeft: wp(5),
            fontSize: 20,
            fontStyle: "italic"
        },
        descriptionTextView: {
            backgroundColor: "white",
            height: hp(32),
            width: wp(75),
            borderRadius: 6.09,
        },
        descriptionText: {
            color: "rgba(0, 0, 0, 1)",
            fontWeight: "400",
            fontSize: 14
        }
    })
}