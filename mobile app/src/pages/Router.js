import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native";
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

    const StartStack =()=>{
        return(
            <Stack.Navigator>
                <Stack.Screen name="Start" component={Start} />
            </Stack.Navigator>
        )
    }

    return(
            <Tab.Navigator
                screenOptions={({ route }) => 
                ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Camera') {
                            iconName = focused ? 'camera' : 'camera-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        
                        }
                        else if (route.name === 'Start') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                    tabBarShowLabel:false,
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "blue",
                    tabBarStyle: {
                        backgroundColor: "white",
                        height: hp(9),
                    },
                    tabBarLabelStyle: {
                        fontSize: hp(4),
                    },
                    tabBarIconStyle: {
                        marginBottom: route.name === "Camera" ? hp(5) : 0, // Kamera için alt boşluk
                        borderRadius: route.name === "Camera" ? 999 : 0, // Sadece Camera için yuvarlak köşe ekleyin
                        borderColor: "black", // Kenar rengi,
                        backgroundColor:"red",
                        //borderWidth: route.name === "Camera" ? 1 : 0, // Kamera için kenar kalınlığı
                    }
                })
            }>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Camera" component={Camera} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
    )
}

export default Router;