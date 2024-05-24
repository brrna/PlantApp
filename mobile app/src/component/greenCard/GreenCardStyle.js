import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles() {
    return StyleSheet.create({
        container:{
            backgroundColor: "white",
            width: wp(100),
            height: hp(30),
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
        frame: {
            backgroundColor: "rgba(233, 245, 234, 1)",
            width: wp(86),
            height: hp(25),
            borderRadius: 15
        },
        headerView:{
            backgroundColor: "rgba(233, 245, 234, 1)",
            width: wp(86),
            height: hp(5),
            justifyContent: "center",
            borderRadius: 15
        },
        headerText: {
            color: "rgba(0, 0, 0, 1)",
            fontWeight: "400",
            fontSize: 15,
            marginLeft: wp(5)
        },
        descriptionView: {
            height: hp(20),
            width: wp(85),
            borderRadius: 15,
            alignItems: "center"
        },
        descriptionText: {
            color: "black",
            fontSize: 14
        }
    })
}