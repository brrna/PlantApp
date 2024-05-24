import { Image, Modal, Text, TouchableOpacity, View, ScrollView } from "react-native";
import createStyles from "./MiniCardStyle";
import DropShadow from "react-native-drop-shadow";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function MiniCard(props) {

    const styles = createStyles();

    const {userInfo} = useContext(AuthContext)

    const {plantName, plantImage = [""], description} = props;

    const [modalVisible, setModalVisible] = useState(false);

    const handleFavori = () => {
            axios.post(`https://leaflove.com.tr/mobil/add-favorite`,
            {
                    "general_plants_id": 0,
                    "rose_id": 0
            },
            {
                headers: { Authorization: `Bearer ${userInfo.token}`}
            }
            )
            .then(response => {
                console.log('Favorilere eklendi', response.data)
            } )
            .catch(error => {
                console.log("favorilere eklenme hatası", error)
            })
        }
    

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
                                <TouchableOpacity 
                                    style={styles.buttonView} 
                                    onPress={handleFavori} >
                                    <Image source={require("../../assests/images/outlineStar.png")} />
                                </TouchableOpacity>
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