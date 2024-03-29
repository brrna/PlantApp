import { Text, View } from "react-native";
import createStyles from "./MyCardStyle";

function MyCard() {

    const styles = createStyles();
    return (
        <View style={styles.frameFirst} >
            <View style={styles.frameSecond} >
                <View style={styles.container} >
                    <View style={styles.image} ></View>
                    <View style={styles.text} >
                    </View>
                </View>
            </View>
        </View>
    )

}

export default MyCard;