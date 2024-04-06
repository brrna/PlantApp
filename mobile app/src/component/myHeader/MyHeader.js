import { Text, View } from "react-native";
import createStyles from "./MyHeaderStyle";

function MyHeader() {

    const styles = createStyles()

    return(
        <View style={styles.container} >

            <View style={styles.viewUnder} ></View>

            <View style={styles.viewTop} ></View>

            <Text style={styles.text} >LeafLove</Text>

        </View> 
    )
}

export default MyHeader;