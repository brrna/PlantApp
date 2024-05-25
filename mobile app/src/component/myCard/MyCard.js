import { Image, Text, TouchableOpacity, View, Modal, Pressable, ScrollView } from "react-native";
import createStyles from "./MyCardStyle";
import { useContext, useState } from "react";
import DropShadow from "react-native-drop-shadow";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function MyCard(props) {

    const styles = createStyles();

    const { img = [""], name, description, id} = props;

    const {userInfo} = useContext(AuthContext)

    const [modalVisible, setModalVisible] = useState(false);
    const [star, setStar] = useState(true)

    const handleFavori = () => {
        let roseId = null;
        let plantsId = null;

        if (name && name.toLowerCase().includes("rose")) {
            roseId = id;
        } else {
            plantsId = id;
        }

        axios.post(`https://leaflove.com.tr/mobil/add-favorite`,
        {
            general_plants_id: plantsId,
            rose_id: roseId
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

    const toggleImage = () => {
        setStar(false)
    };

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
                        <View style={styles.modalTop} >
                            <DropShadow style={styles.shadow} >
                                <Image
                                    style={styles.modalImg}
                                    source={img} />
                            </DropShadow>
                            <View style={styles.transparent} >
                                <TouchableOpacity 
                                    style={styles.buttonView}
                                    onPress={() => setModalVisible(false)} >
                                    <Image source={require("../../assests/images/back.png")} />
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.buttonView} 
                                    onPress={() => {
                                        handleFavori();
                                        toggleImage();
                                    }} >
                                    <Image 
                                        source={
                                            star ? require("../../assests/images/outlineStar.png")
                                            : require("../../assests/images/fillStar.png")
                                        } />
                                </TouchableOpacity>
                            </View>
                        </View>
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