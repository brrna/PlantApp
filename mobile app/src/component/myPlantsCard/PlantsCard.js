import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import createStyles from "./PlantsCardStyle";
import DropShadow from "react-native-drop-shadow";
import { useState } from "react";
import PlantSection from "../plantSection/PlantSection";

function PlantsCard(props) {

    const styles = createStyles();

    const [modalVisible, setModalVisible] = useState(false);

    const {plantName, plantImage = [""]} = props;

    return (
        <View style={styles.container} >
            <DropShadow style={styles.shadow} >
                <Modal
                    style={{flex: 1}}
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}>
                        <PlantSection />
                </Modal>
                <TouchableOpacity 
                    onPress={()=>setModalVisible(true)}
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
                            source={require("../../assests/images/outlineStar.png")}/>
                    </View>
                </TouchableOpacity>
            </DropShadow>
        </View>
    )
}

export default PlantsCard;