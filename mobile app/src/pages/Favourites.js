import { SafeAreaView, View, StyleSheet, FlatList} from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MySecondHeader from "../component/myBackHeader/MySecondHeader";
import MySearch from "../component/mySearch/MySearch";
import WhiteButton from "../component/whiteButton/WhiteButton";
import { useContext, useEffect, useState } from "react";
import MiniCard from "../component/myMiniCard/MiniCard";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Favorites({ navigation }) {

    const [data, setData] = useState([]);

    const {userInfo} = useContext(AuthContext);

    const renderFavorites = ({item}) => {
        return(
            <MiniCard
                plantImage={{uri: item.Image}}
                plantName={item.Name}
                description={item.Description} />
        )
    }

    const keyFavorites = (item) => {
        return item.id ? item.id.toString() : Math.random().toString();
    }

    useEffect(() => {
        console.log(data)
        axios.get(`https://leaflove.com.tr/mobil/favorites`,
        {
            headers: { Authorization: `Bearer ${userInfo.token}`},
            params: { user_id: userInfo.user.Id }
        }
        )
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("API isteği sırasında bir hata oluştu:", error);
            });
    }, [])

    return (
        <SafeAreaView style={styles.container}>

            <MySecondHeader
                headerText={"Favourites"}
                onPress={() => navigation.navigate('ProfileScreen')} />

            <MySearch onPress={() => navigation.navigate('ProfileScreen')} />

            <View style={styles.buttonView} >

                <WhiteButton 
                    buttonText={"Favourites"} />

                <WhiteButton 
                    buttonText={"My Plants"}
                    onPress={() => navigation.navigate('MyPlants')} />

            </View>

            <View style={styles.cardView} >
                <FlatList
                    data={data}
                    renderItem={renderFavorites}
                    keyExtractor={keyFavorites} />
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

export default Favorites;