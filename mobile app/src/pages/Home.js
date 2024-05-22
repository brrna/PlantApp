import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import MyCard from "../component/myCard/MyCard";
import MySearch from "../component/mySearch/MySearch";
import MyHeader from "../component/myHeader/MyHeader";
import axios from "axios";
import { BASE_URL } from "@env"
import { AuthContext } from "../context/AuthContext";

function Home() {

    const [data, setData] = useState([]);

    const { userInfo } = useContext(AuthContext);

    const renderRoses = ({ item }) => {
        return (
            <MyCard
                img={{uri : item.Image}}
                name={item.Name} />
        )
    }

    const keyRoses = (item) => {
        return item.id ? item.id.toString() : Math.random().toString();
    }

    useEffect(() => {
        console.log(userInfo)
        axios.get(`https://leaflove.com.tr/mobil/rose`,
        {
            headers: { Authorization: `Bearer ${userInfo.token}` }
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
        <SafeAreaView style={styles.container} >

            <MyHeader headerText={"LeafLove"} />

            <MySearch />

            <FlatList
                data={data}
                renderItem={renderRoses}
                keyExtractor={keyRoses}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    }
})

export default Home;