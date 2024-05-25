import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import createStyles from "./PlantsCardStyle";
import DropShadow from "react-native-drop-shadow";
import { useState } from "react";
import PlantSection from "../plantSection/PlantSection";


function PlantsCard(props) {


    const styles = createStyles();
   

    const [modalVisible, setModalVisible] = useState(false);

    const {plantName, plantImage = [""]} = props;

    
    // useEffect(() => {
        
    //     axios.post(`https://leaflove.com.tr/mobil/plant-detail`,
    //     {
    //         headers: { Authorization: `Bearer ${userInfo.token}`},
    //         params: { plant_user_id: userInfo.user.Id }
    //     }
    //     )
    //         .then((response) => {
    //             console.log("response data",response.data)
    //             setData(response.data);
               
    //         })
    //         .catch((error) => {
    //             console.error("API isteği sırasında bir hata oluştu:", error);
    //         });
    // }, [])
    // console.log("datam",data)
    

  

    return (
        <View style={styles.container} >
            <DropShadow style={styles.shadow} >
                <Modal
                    style={{flex: 1}}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible)
                    }} 
                  
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
                            source={require("../../assests/images/leafIcon.png")}/>
                    </View>
                </TouchableOpacity>
            </DropShadow>
        </View>
    )
}

export default PlantsCard;