import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import createStyles from "./PlantsCardStyle";
import DropShadow from "react-native-drop-shadow";
import { useState,useEffect,useContext,useRef } from "react";
import PlantSection from "../plantSection/PlantSection";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function PlantsCard(props) {


    const styles = createStyles();
   
    const {userInfo} = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [detailData,setDetailData]= useState({})

    const {plantName, plantImage = [""],plantUserId,Item} = props;   //İtemı alarak da yapılabilir

    const responseref=useRef("")
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
    console.log("plantUserId",plantUserId)
    const handleItemPres=()=>{
        axios.get(`https://leaflove.com.tr/mobil/plant-detail`,
        {
            headers: { Authorization: `Bearer ${userInfo.token}`},
            params: { plant_user_id: Item.PlantUserId }
        }
        )
            .then((response) => {
                console.log("plantdetaildata",response.data)
                responseref.current=response.data
                console.log("detailsetdatsı",responseref)
                setModalVisible(true) 
               
            })
            .catch((error) => {
                console.error("API isteği sırasında bir hata oluştu:", error);
            });
        };

  

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
                      
                        <PlantSection 
                          Plantname={responseref.current?.Name}
                          Description={responseref.current.Description} 
                          Uses={responseref.current.Uses}
                          Health={responseref.current.Health}
                          Climate={responseref.current.Climate}
                          plantImage={{uri: responseref.current.Image}}
                          Soil={responseref.current.Soil}/>
                </Modal>
                <TouchableOpacity 
                    onPress={()=>{
                        handleItemPres();
                    }}
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