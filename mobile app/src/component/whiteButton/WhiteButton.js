import { Text, TouchableOpacity } from "react-native";
import createStyles from "./WhiteButtonStyle";
import DropShadow from "react-native-drop-shadow";

function WhiteButton({buttonText, onPress}) {

    const styles = createStyles();

    return (
            <DropShadow style={styles.shadow}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onPress} >
                    <Text style={styles.text} >
                        {buttonText}
                    </Text>
                </TouchableOpacity>
            </DropShadow>
    )
}

export default WhiteButton;