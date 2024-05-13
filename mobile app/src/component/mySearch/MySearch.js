import { Modal, TextInput, View, Text } from "react-native";
import createStyles from "./MySearchStyle";
import DropShadow from "react-native-drop-shadow";
import Icon from "react-native-vector-icons/Ionicons"
import { useState } from "react";
import MyHeader from "../myHeader/MyHeader";
import MySecondHeader from "../myBackHeader/MySecondHeader";
//import plants_data 

function MySearch({onPress}) {

    const styles = createStyles();

    const [modalVisible, setModalVisible] = useState(true);
    const [plants, setPlants] = useState("plants_data");

    /*const handleSearch = text => {

        setPlants(text);

        const filteredList = plants_data.filter( plant => {
            const searchedText = text.toLowerCase();
            const currentTitle = plant.title.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;
        });
        setPlants(filteredList);
        setModalVisible(filteredList.length === 0);
    };*/

    return (
        <View style={styles.container} >

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }} >

                <View style={styles.modalContainer} >
                    <MySecondHeader onPress={onPress} />
                    <View style={styles.modalView} >
                        <Text style={styles.modalText} >
                            No result found called "search for your plants"
                        </Text>
                    </View>
                </View>

            </Modal>

            <DropShadow
                style={styles.shadow}>

                <View style={styles.search} >
                    <View style={styles.iconView} >
                        <Icon name="search-sharp" size={20} />
                    </View>

                    <TextInput
                        style={styles.input}
                        onChangeText={setPlants}
                        value={plants}
                        placeholder="Ara..." />
                </View>

            </DropShadow>

        </View>
    )
}

export default MySearch;