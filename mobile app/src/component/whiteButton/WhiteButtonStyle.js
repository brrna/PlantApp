import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles() {
    return StyleSheet.create({
        button: {
            backgroundColor: "white",
            width: wp(36),
            height: hp(4),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5
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
        text: {
            color: "rgba(0, 0, 0, 0.5)",
            fontWeight: "900",
            fontStyle: "italic",
            fontSize: 18
        }
    })
}