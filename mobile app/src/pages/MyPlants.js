import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MySecondHeader from "../component/myBackHeader/MySecondHeader";
import MySearch from "../component/mySearch/MySearch";
import WhiteButton from "../component/whiteButton/WhiteButton";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import PlantsCard from "../component/myPlantsCard/PlantsCard";

function MyPlants({ navigation }) {
    const [data, setData] = useState([]);
    
    const {userInfo} = useContext(AuthContext);

    useEffect(() => {
        
        axios.get(`https://leaflove.com.tr/mobil/plants`,
        {
            headers: { Authorization: `Bearer ${userInfo.token}`},
            params: { user_id: userInfo.user.Id }
        }
        )
            .then((response) => {
                console.log("response data",response.data)
                setData(response.data);
               
            })
            .catch((error) => {
                console.error("API isteği sırasında bir hata oluştu:", error);
            });
    }, [])
    console.log("datam",data)

    const renderPlants = ({item}) => {
        console.log("item",item)
        return(
            <PlantsCard
                plantImage={{uri: item.Image}}
                plantName={item.Name}
                plantUserId={item.PlantUserId}
                Item={item}
            />
        )
    }

    const keyPlants = (item) => {
        return item.id ? item.id.toString() : Math.random().toString();
    }

    return (
        <SafeAreaView style={styles.container}>

            <MySecondHeader
                headerText={"My Plants"}
                onPress={() => navigation.navigate('ProfileScreen')} />

            <MySearch onPress={() => navigation.navigate('ProfileScreen')} />

            <View style={styles.buttonView} >

                <WhiteButton 
                    buttonText={"Favourites"}
                    onPress={() => navigation.navigate('Favorites')} />

                <WhiteButton buttonText={"My Plants"} />

            </View>
            <View style={styles.cardView} >
            <FlatList
                    data={data}
                    renderItem={renderPlants}
                    keyExtractor={keyPlants} />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    buttonView: {
        backgroundColor: "white",
        height: hp(5),
        width: wp(100),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: wp(9),
        paddingRight: wp(9)
    },
    cardView: {
        backgroundColor: "white",
        width: wp(100),
        height: hp(64)
    }
})

export default MyPlants;