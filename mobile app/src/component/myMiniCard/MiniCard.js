import { Image, Modal, Text, TouchableOpacity, View, ScrollView } from "react-native";
import createStyles from "./MiniCardStyle";
import DropShadow from "react-native-drop-shadow";
import { useState } from "react";

function MiniCard(props) {

    const styles = createStyles();

    const {plantName, plantImage = [""], description} = props;

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container} >
            <DropShadow style={styles.shadow} >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible)
                    }} >
                    <View style={styles.modalContainer} >
                        <View style={styles.modalTop} >
                            <DropShadow style={styles.shadow} >
                                <Image
                                    style={styles.modalImg}
                                    source={plantImage} />
                            </DropShadow>
                            <View style={styles.transparent} >
                                <TouchableOpacity 
                                    style={styles.buttonView}
                                    onPress={() => setModalVisible(false)} >
                                    <Image source={require("../../assests/images/back.png")} />
                                </TouchableOpacity>
                                <View 
                                    style={styles.buttonView} >
                                    <Image source={require("../../assests/images/fillStar.png")} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.textContainer} >
                            <DropShadow style={styles.shadow} >
                                <View style={styles.nameViev} >
                                    <View style={styles.nameTextView} >
                                        <Text style={styles.nameText} >
                                            {plantName}
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
                    </View>
                </Modal>
                <TouchableOpacity 
                    onPress={() => setModalVisible(true)}
                    style={styles.card} >
                    <View style={styles.imageView} >
                        <Image 
                            source={plantImage}
                            style={styles.image} />
                    </View>
                    <View style={styles.textView} >
                        <Text style={styles.text} >
                            {plantName}
                        </Text> 
                    </View>
                    <View style={styles.iconView} >
                        <Image 
                            source={require("../../assests/images/fillStar.png")}/>
                    </View>
                </TouchableOpacity>
            </DropShadow>
        </View>
    )
}

export default MiniCard;