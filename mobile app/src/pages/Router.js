import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Home from "./Home";
import Camera from "./Camera";
import Profile from "./Profile";
import Icon from "react-native-vector-icons/Ionicons";
import Start from "./Start";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Router() {


    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    const CustomTabBarButton = ({ children, onPress }) => (
        <TouchableOpacity
            style={{
                top: -20

            }}>

        </TouchableOpacity>
    )

    const StartStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Start" component={Start} />
            </Stack.Navigator>
        )
    }

    return (
        <Tab.Navigator

            screenOptions={{
                headerShown:false,
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
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name={focused ? 'person-circle-outline' : 'person-circle'} size={hp(4)} color="#2C6817" />
                    )

                }}
            />
        </Tab.Navigator>
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
    greenview:{
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