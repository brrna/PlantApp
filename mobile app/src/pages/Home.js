import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import MyCard from "../component/myCard/MyCard";
import MySearch from "../component/mySearch/MySearch";
import MyHeader from "../component/myHeader/MyHeader";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Home() {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])

    const { userInfo } = useContext(AuthContext);

    const renderRoses = ({ item }) => {
        return (
            <MyCard
                img={{ uri: item.Image }}
                name={item.Name}
                description={item.Description}
                id={item.Id} />
        )
    }

    const keyRoses = (item) => {
        return item.id ? item.id.toString() : Math.random().toString();
    }

    useEffect(() => {
        const fetchRoses = axios.get(`https://leaflove.com.tr/mobil/general-plants`, 
        {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        });

        const fetchGeneralPlants = axios.get(`https://leaflove.com.tr/mobil/rose`, 
        {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        });

        Promise.all([fetchRoses, fetchGeneralPlants])
            .then(([rosesResponse, generalPlantsResponse]) => {
                const combinedData = [
                    ...rosesResponse.data,
                    ...generalPlantsResponse.data
                ];
                setData(combinedData);
                setFilteredData(combinedData);
            })
            .catch((error) => {
                console.error("API isteği sırasında bir hata oluştu:", error);
            });
    }, []);

    const handleSearch = (searchText) => {
        const lowerCaseSearchText = searchText.toLowerCase();
        const filteredList = data.filter(item => 
            item.Name.toLowerCase().includes(lowerCaseSearchText)
        );
        setFilteredData(filteredList)
    };

    return (
        <SafeAreaView style={styles.container} >

            <MyHeader headerText={"LeafLove"} />

            <MySearch onSearch={handleSearch} />

            <FlatList
                data={filteredData}
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