import { Modal, TextInput, View, Text } from "react-native";
import createStyles from "./MySearchStyle";
import DropShadow from "react-native-drop-shadow";
import Icon from "react-native-vector-icons/Ionicons"
import { useState } from "react";
import MySecondHeader from "../myBackHeader/MySecondHeader";

function MySearch(props) {

    const styles = createStyles();
    
    const {onSearch} = props;

    const [modalVisible, setModalVisible] = useState(false);

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
                    <MySecondHeader onPress={() => setModalVisible(false)} />
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
                        onChangeText={onSearch} />
                </View>

            </DropShadow>

        </View>
    )
}

export default MySearch;