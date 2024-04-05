import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { SearchBar } from "react-native-screens";

export default function createStyles() {
    return StyleSheet.create({
        container: {
            backgroundColor: "white",
            width: wp(100),
            height: hp(10),
            alignItems: "center",
            justifyContent: "center"
        },
        search: {
            backgroundColor: "white",
            width: wp(65),
            height: hp(4),
            borderRadius: 7,
            flexDirection: "row",
            borderColor: "gray",
            borderWidth: 1
        },
        iconView: {
            backgroundColor: "yellow",
            height: hp(4),
            width: wp(6),
            marginLeft: wp(1)
        },
        icon: {
            color: "gray",
        },
        input: {
            backgroundColor: "white",
            height: hp(3),
            width: wp(57),
            marginRight: wp(1)
        }
    })
}