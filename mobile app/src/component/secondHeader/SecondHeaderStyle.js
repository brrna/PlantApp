import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles() {
    return StyleSheet.create({
        container: {
            backgroundColor: "white",
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
        }
    })
}