import { Image, Text, TouchableOpacity, View, Modal, Pressable, ScrollView } from "react-native";
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
                        <DropShadow style={styles.shadow} >
                            <Image
                                style={styles.modalImg}
                                source={img} />
                        </DropShadow>
                        <View style={styles.textContainer} >
                            <DropShadow style={styles.shadow} >
                                <View style={styles.nameViev} >
                                    <View style={styles.nameTextView} >
                                        <Text style={styles.nameText} >
                                            {name}
                                        </Text>
                                    </View>
                                    <View style={styles.leafView} >
                                        <Image source={require("../../assests/images/leafIcon.png")} />
                                    </View>
                                </View>
                            </DropShadow>
                            <DropShadow style={styles.shadow} >
                                <View style={styles.descriptionFrameView} >
                                    <DropShadow style={styles.shadow} >
                                        <View style={styles.descriptionView} >
                                            <View style={styles.descriptionHeader} >
                                                <Text style={styles.plantsDetail} >Plant Details</Text>
                                            </View>
                                            <ScrollView style={styles.descriptionTextView} >
                                                <Text style={styles.descriptionText} >
                                                    {description}
                                                </Text>
                                            </ScrollView>
                                        </View>
                                    </DropShadow>
                                </View>
                            </DropShadow>
                        </View>
                        <Pressable
                            onPress={() => setModalVisible(false)}>
                            <Text>X</Text>
                        </Pressable>
                        <TouchableOpacity>
                            <Text>favoriler butonu</Text>
                        </TouchableOpacity>
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