import { Image, SafeAreaView, StyleSheet, View, Text, Pressable, TouchableOpacity, TextInput } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MyHeader from "../component/myHeader/MyHeader";
import DropShadow from "react-native-drop-shadow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Profile({ navigation }) {

    useEffect(()=>{
            getFavorites()
    },[])

    useEffect(() => {
        
        axios.get(`https://leaflove.com.tr/mobil/plants`,
        {
            headers: { Authorization: `Bearer ${userInfo.token}`},
            params: { user_id: userInfo.user.Id }
        }
        )
            .then((response) => {
                setPlantsData(response.data.length);
               
            })
            .catch((error) => {
                console.error("API isteği sırasında bir hata oluştu:", error);
            });
    }, [])

    
    const { userInfo, logout } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [plantsData,setPlantsData]=useState([]);

    const getFavorites=()=>{   // useefcet yerine fokssiyonu yazdık
        axios.get(`https://leaflove.com.tr/mobil/favorites`,
        {
            headers: { Authorization: `Bearer ${userInfo.token}`},
            params: { user_id: userInfo.user.Id }
        }
        )
            .then((response) => {
                setData(response.data.length);
            })
            .catch((error) => {
                console.error("API isteği sırasında bir hata oluştu:", error);
            });
        
    
        }


    return (
        <SafeAreaView style={styles.container} >
            {/* <TouchableOpacity style={{padding:20,backgroundColor:"red"}} ></TouchableOpacity> */}
            <View
                style={styles.top}>
                <MyHeader headerText={"LeafLove"} />
                <TouchableOpacity
                    onPress={logout}
                    style={styles.logoutbutton}>

                    <Image source={require("../assests/images/Vector.png")} style={styles.logoutimage} />

                </TouchableOpacity>

                <View style={styles.imageView}>
                    <Image
                        source={require("../assests/images/user.png")}
                        resizeMode="center"
                        style={styles.image} />

                    <Text
                        style={styles.userText}>
                       Hello {userInfo.user.NickName}
                    </Text>
                </View>

                <View style={styles.textContainer}>
                    <View
                        style={styles.textView}>
                        <Image
                            source={require("../assests/images/leafIcon.png")} />

                        <Text style={styles.textStyle}>{plantsData}</Text>

                        <Text style={styles.textStyle}>My Plants</Text>
                    </View>

                    <View
                        style={styles.textView}>
                        <Image source={(require("../assests/images/starIcon.png"))} />

                        <View style={styles.text} >
                            <Text style={styles.textStyle}>{data}</Text>

                            <Text style={styles.textStyle}>Favorite</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View
                style={styles.bottom}>
                <View style={styles.mailContainer} >
                    <DropShadow style={styles.shadow} >
                        <View style={styles.mailView}>
                            <View style={styles.mailTop}>
                                <Image source={require("../assests/images/mail.png")}
                                    style={{ marginLeft: wp(2) }} />

                                <Text style={{ marginLeft: wp(6), color: "rgba(0, 0, 0, 0.56)" }}>Email</Text>
                            </View>
                            <View style={styles.inputView} >
                                <Text style={styles.emailtext}>{userInfo.user.Email}</Text>
                            </View>
                        </View>
                    </DropShadow>

                    <DropShadow style={styles.shadow}>
                        <View style={styles.mailView}>
                            <View style={styles.mailTop}>
                                <Image source={require("../assests/images/user2.png")}
                                    style={{ marginLeft: wp(2) }} />

                                <Text style={{ marginLeft: wp(6), color: "rgba(0, 0, 0, 0.56)" }}>Nickname</Text>
                            </View>
                            <View style={styles.inputView} >
                                <Text style={styles.nicktext}>{userInfo.user.NickName}</Text>
                            </View>
                        </View>
                    </DropShadow>

                </View>
                <View style={styles.plants} >
                    <View style={styles.buttonView} >
                        <Pressable
                            style={styles.button}
                            onPress={() => navigation.navigate('Favorites')}>
                            <View style={styles.iconView} >
                                <View style={styles.buttonIcon} >
                                    <Image
                                        source={require("../assests/images/star2.png")}
                                        style={{ resizeMode: "contain" }} />
                                </View>
                            </View>
                            <View style={styles.buttonName}>
                                <Text style={styles.buttonText}>Favourites</Text>
                            </View>
                        </Pressable>
                    </View>

                    <View style={styles.buttonView} >
                        <Pressable
                            style={styles.button}
                            onPress={() => navigation.navigate('MyPlants')}>
                            <View style={styles.iconView} >
                                <View style={styles.buttonIcon} >
                                    <Image
                                        source={require("../assests/images/leaf2.png")} />
                                </View>
                            </View>
                            <View style={styles.buttonName}>
                                <Text style={styles.buttonText}>My Plants</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    top: {
        backgroundColor: "rgba(194, 233, 198, 0.3)",
        height: hp(49),
        width: wp(100),
        borderBottomRightRadius: wp(25),
        borderBottomLeftRadius: wp(25),
        justifyContent: "space-between",
        alignItems: "center",
    },
    imageView: {
        height: hp(17),
        width: wp(38),
        backgroundColor: "rgba(194, 233, 198, 0.0)",
        justifyContent: "space-around",
        alignItems: "center"
    },
    image: {
        width: wp(28),
        height: hp(14),
        borderRadius: 1000
    },
    textContainer: {
        height: hp(9),
        width: wp(55),
        backgroundColor: "rgba(194, 233, 198, 0.0)",
        marginRight: wp(15),
        marginBottom: hp(1)
    },
    userText: {
        color: "rgba(0, 0, 0, 0.7)",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: hp(2.1),
    },
    textView: {
        height: hp(4),
        width: wp(35),
        backgroundColor: "rgba(194, 233, 198, 0.0)",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textStyle: {
        fontSize: 14,
        fontWeight: "400",
        color: "rgba(0, 0, 0, 0.59)"
    },
    text: {
        backgroundColor: "rgba(194, 233, 198, 0.0)",
        flexDirection: "row",
        width: wp(27),
        justifyContent: "space-around"
    },
    bottom: {
        backgroundColor: "white",
        height: hp(42),
        width: wp(100),
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    mailContainer: {
        backgroundColor: "white",
        height: hp(18),
        width: wp(85),
        justifyContent: "space-between"
    },
    shadow: {
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    mailView: {
        backgroundColor: "white",
        width: wp(85),
        height: hp(7)
    },
    mailTop: {
        backgroundColor: "white",
        height: hp(3),
        width: wp(85),
        flexDirection: "row",
        alignItems: "center",
    },
    inputView: {
        backgroundColor: "white",
        height: hp(4),
        width: wp(85),
        justifyContent:"center",
        alignItems:"center"
    },
    plants: {
        backgroundColor: "white",
        height: hp(18),
        width: wp(70),
        marginRight: wp(9)
    },
    buttonView: {
        backgroundColor: "white",
        height: hp(9),
        width: wp(71),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    iconView: {
        backgroundColor: "white",
        height: hp(8),
        width: wp(16),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1000
    },
    buttonIcon: {
        backgroundColor: "rgba(188, 243, 210, 1)",
        borderColor: "rgba(87, 172, 96, 1)",
        borderWidth: 2,
        height: hp(6),
        width: wp(12),
        borderRadius: 1000,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "rgba(188, 243, 210, 1)",
        borderEndColor: "rgba(87, 172, 96, 1)",
        borderBlockColor: "rgba(87, 172, 96, 1)",
        borderStartColor: "white",
        borderWidth: 2,
        height: hp(6),
        width: wp(75),
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    buttonName: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        width: wp(75),
        height: hp(5),
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "rgba(0, 0, 0, 0.6)",
        fontWeight: "400",
        fontSize: 16,
        marginRight: wp(29)
    },
    logoutbutton: {
        position: "absolute",
        top: hp(4.9),
        right: wp(3)

    },
    logoutimage: {
        width: wp(8.1),
        height: hp(3.1)

    },
    emailtext:{
        marginRight:wp(31),
        color:"rgba(0, 0, 0, 1)"

    },
    nicktext:{
        marginRight:wp(50),
        color:"rgba(0, 0, 0, 1)",
        

    }
})

export default Profile;