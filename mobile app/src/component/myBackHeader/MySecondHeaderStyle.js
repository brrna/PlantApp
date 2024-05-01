import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles() {
    return StyleSheet.create({
        container: {
            backgroundColor: "rgba(255, 255, 255, 0)",
            width: wp(100),
            height: hp(15),
            flexDirection: "row"
        },
        viewUnder: {
            backgroundColor: "#B9F5B8",
            height: hp(15),
            width: wp(30),
            borderBottomRightRadius: 100
        },
        viewTop: {
            backgroundColor: "#B8E8C3",
            height: hp(8),
            width: wp(35),
            position: "absolute",
            marginLeft: wp(13),
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100
        },
        text: {
            color: "background: rgba(23, 31, 24, 0.75)",
            fontSize: hp(5),
            fontWeight: "900",
            position: "absolute",
            marginLeft: wp(9),
            marginTop: hp(6),
            fontStyle: "italic",
            textShadowColor: 'gray',
            textShadowOffset: { width: -1, height: 5 },
            textShadowRadius: 10
        },
        button: {
            backgroundColor: "rgba(255, 255, 255, 0)", 
            height: hp(4), 
            width: wp(7),
            position: "absolute",
            marginTop: hp(3),
            marginLeft: wp(3)
        },
        image:{
            marginLeft: wp(43)
        }
    })
}