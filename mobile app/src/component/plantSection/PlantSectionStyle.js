import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(){
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "white"
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
        imageView:{
            backgroundColor: "white",
            width: wp(100),
            height: hp(26)
        },
        image: {
            height: hp(25),
            width: wp(100)
        },
        headerView:{
            backgroundColor: "rgba(255, 255, 255, 1)",
            width: wp(100),
            height: hp(14),
            justifyContent: "center",
            alignItems: "center"
        },
        header: {
            backgroundColor: "white",
            height: hp(10),
            width: wp(70),
            flexDirection: "column",
            justifyContent: "center"
            
        },
        top:{
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            width: wp(70)
        },
        topText: {
            fontStyle: "italic",
            color: " rgba(0, 0, 0, 0.7)",
            fontWeight: "400",
            fontSize: 15,
            marginLeft: wp(3),
            marginTop: wp(3)
        },
        icon:{
            marginTop: wp(2),
            marginLeft: wp(1)
        },
        under: {
            backgroundColor: "white",
            height: hp(6),
            justifyContent: "center",
        },
        underText: {
            color: "rgba(0, 0, 0, 1)",
            fontWeight: "400",
            fontSize: 15,
            marginLeft: wp(3)
        },
        line: {
            height:hp(8),
            width: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        informationView:{
            backgroundColor: "white",
            width: wp(100),
            height: hp(35),
            justifyContent: "center",
            alignItems: "center"
        },
        frame: {
            backgroundColor: "rgba(117, 167, 119, 1)",
            width: wp(66),
            height: hp(30),
            justifyContent: "center",
            alignItems: "center",
            marginRight: wp(5),
            borderRadius: 8
        },
        innerHeader: {
            backgroundColor: "white",
            width: wp(66),
            height: hp(8),
            justifyContent: "center",
            borderRadius: 8
        },
        text: {
            color: "rgba(0, 0, 0, 0.30)",
            fontWeight: "900",
            fontSize: 22,
            fontStyle: "italic",
            marginLeft: wp(8)
        },
        inner: {
            backgroundColor: "white",
            width: wp(66),
            height: hp(30),
            marginBottom: wp(8),
            marginLeft: wp(8),
            borderRadius: 8
        },
        detailView: {
            backgroundColor: "white",
            height: hp(20),
            width: wp(61),
            marginLeft: wp(4)
        },
        detailText: {
            color: "rgba(0, 0, 0, 1)",
            fontWeight: "400",
            fontSize: 15
        },
        cardsView:{
            backgroundColor: "white",
            width: wp(100),
            height: ("%100")
        }
    })
}