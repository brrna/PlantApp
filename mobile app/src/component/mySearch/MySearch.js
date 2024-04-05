import { View } from "react-native";
import createStyles from "./MySearchStyle";

function MySearch() {

    const styles = createStyles()

    return(
        <View style={styles.container} >

            <View style={styles.search} >
                <View style={styles.iconView} >
                </View> 
                <View style={styles.input} ></View>
            </View> 

        </View>
    )
}

export default MySearch;