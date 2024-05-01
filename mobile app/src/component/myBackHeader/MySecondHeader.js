import { Image, Text, TouchableOpacity, View } from "react-native";
import createStyles from "./MySecondHeaderStyle";

function MySecondHeader({headerText, onPress}) {

    const styles = createStyles()

    return(
        <View style={styles.container} >

            <View style={styles.viewUnder} ></View>

            <View style={styles.viewTop} ></View>

            <TouchableOpacity 
                style={styles.button}
                onPress={onPress} >
                    <Image 
                        source={require("../../assests/images/back.png")}/>
            </TouchableOpacity> 

            <Text style={styles.text} >{headerText}</Text>

            <Image 
                source={require("../../assests/images/componentLeaf.png")}
                style={styles.image} />

        </View> 
    )
}

export default MySecondHeader;