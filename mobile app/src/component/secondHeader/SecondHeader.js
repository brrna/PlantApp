import { View } from "react-native";
import createStyles from "./SecondHeaderStyle";

function SecondHeader() {

    const styles = createStyles()

    return(
        <View style={styles.container}>

            <View style={styles.viewUnder} ></View> 

            <View style={styles.viewTop} ></View>

        </View>
    )
}

export default SecondHeader;