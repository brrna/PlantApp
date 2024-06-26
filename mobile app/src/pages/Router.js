import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Home from "./Home";
import Camera from "./Cameras";
import Profile from "./Profile";
import Icon from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorites from "./Favourites";
import myPlants from "./MyPlants";
import Signin from "./Signin";
import Signup from "./Signup";
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import SplashScreen from "./SplashScreen";

function Router() {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();
    const [currentUser, setCurrentUser] = useState(""); //giriş çıkış denemesi için

    const { userInfo, splashLoading } = useContext(AuthContext);

    const ProfileStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="ProfileScreen" component={Profile} />
                <Stack.Screen name="Favorites" component={Favorites} />
                <Stack.Screen name="MyPlants" component={myPlants} />
            </Stack.Navigator>
        )
    }

    const HomeTabs = () => {
        const navigation = useNavigation();
        return (
            <Tab.Navigator

                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: hp(0),
                        left: hp(0),
                        right: hp(0),
                        elevation: 0,
                        backgroundColor: '#D4EBD2',
                        height: hp(6.5),
                    }
                }}

            >
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name={focused ? 'home-outline' : 'home'} size={hp(3.75)} color="#2C6817" />
                        )

                    }} />
                <Tab.Screen name="Camera" component={Camera}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.whiteview}>
                                <View style={styles.greenview}>
                                    <Icon name={focused ? 'camera-outline' : 'camera'} size={hp(3.75)} color="#2C6817" />
                                </View>
                            </View>
                        )
                    }} />
                <Tab.Screen name="ProfileStack" component={ProfileStack}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name={focused ? 'person-circle-outline' : 'person-circle'} size={hp(4)} color="#2C6817" />
                        )

                    }}
                />
            </Tab.Navigator >

        )
    }

    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}>

            {splashLoading ?
                (
                    <Stack.Screen name={"SplashScreen"} component={SplashScreen} />
                ) :

                userInfo.token ? (
                    <Stack.Screen name={"HomeTabs"} component={HomeTabs} />
                ) : (
                    <>
                        <Stack.Screen name={"Signin"} component={Signin} />

                        <Stack.Screen name={"Signup"} component={Signup} />

                    </>
                )


            }





        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({
    whiteview: {
        borderRadius: 999,
        width: wp(16.5),
        height: hp(8),
        backgroundColor: "white",
        marginBottom: 40


    },
    greenview: {
        width: wp(14),
        height: hp(7),
        borderRadius: 9999,
        backgroundColor: "#D4EBD2",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"

    }

})

export default Router;