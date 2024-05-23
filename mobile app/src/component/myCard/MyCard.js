import { Image, Text, TouchableOpacity, View, Modal, Pressable } from "react-native";
import createStyles from "./MyCardStyle";
import { useState } from "react";
import DropShadow from "react-native-drop-shadow";

function MyCard(props) {

    const styles = createStyles();

    const { img = [""], name, description } = props;

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.background} >
            <View style={styles.frameFirst} >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible)
                    }} >
                    <View style={styles.modalContainer} >
                        <Pressable
                            onPress={() => setModalVisible(false)}>
                            <Text>X</Text>
                        </Pressable>
                        <TouchableOpacity>
                            <Text>favoriler butonu</Text>
                        </TouchableOpacity>
                        <Image 
                            style={styles.modalImg}
                            source={img} />
                        <DropShadow style={styles.shadow} >
                            <View style={styles.nameViev} >
                                <Text>{name}</Text>
                            </View>
                        </DropShadow>
                        <DropShadow style={styles.shadow} >
                            <View style={styles.descriptionView} >
                                <Text>{description}</Text>
                            </View>
                        </DropShadow>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={styles.frameSecond}
                    onPress={() => setModalVisible(true)} >
                    <View style={styles.container} >
                        <View style={styles.imageView} >
                            <Image source={img} style={styles.image} />
                        </View>
                        <View style={styles.textView} >
                            <Text
                                style={styles.text}>{name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default MyCard;