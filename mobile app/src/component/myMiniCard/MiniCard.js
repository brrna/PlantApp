import { Image, Text, View } from "react-native";
import createStyles from "./MiniCardStyle";
import DropShadow from "react-native-drop-shadow";

function MiniCard(props) {

    const styles = createStyles();

    const {plantName, plantImage = [""], starIcon} = props;

    return (
        <View style={styles.container} >
            <DropShadow style={styles.shadow} >
                <View style={styles.card} >
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
                            source={starIcon}/>
                    </View>
                </View>
            </DropShadow>
        </View>
    )
}

export default MiniCard;