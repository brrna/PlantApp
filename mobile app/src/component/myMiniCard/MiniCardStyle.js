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
        icon: {},
        modalContainer:{
            backgroundColor: "white",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center"
        },
        modalTop: {
            backgroundColor: "white",
            height: hp(35),
            width: wp(100)
        },
        transparent: {
            backgroundColor: "rgba(0, 0, 0, 0)",
            height: hp(8),
            width: wp(100),
            position: "absolute",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: wp(1)
        },
        buttonView: {
            backgroundColor: "rgba(0, 0, 0, 0)",
            height: hp(6),
            width: wp(12),
            justifyContent: "center",
            alignItems: "center"
        },
        button:{
            justifyContent: "center",
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
            justifyContent: "space-around",
            marginBottom: hp(2)
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
            width: wp(38),
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
            borderRadius: 3.48,
            marginBottom: hp(3)
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
            fontSize: 16
        }
    })
}