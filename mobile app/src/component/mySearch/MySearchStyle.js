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
            marginLeft: wp(1),
            justifyContent: "center",
            alignItems: "center"
        },
        icon: {
            color: "gray",
        },
        input: {
            backgroundColor: "white",
            height: hp(3),
            width: wp(57),
            marginRight: wp(1),
            color: "black",
            fontWeight: "normal",
            fontSize: 15,
        }
    })
}