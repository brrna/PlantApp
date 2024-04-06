import { TextInput, View } from "react-native";
import createStyles from "./MySearchStyle";
import DropShadow from "react-native-drop-shadow";
import Icon from "react-native-vector-icons/Ionicons"
import { useState } from "react";

function MySearch() {

    const styles = createStyles()

    const [value, setValue] = useState("");

    return (
        <View style={styles.container} >

            <DropShadow
                style={styles.shadow}>

                <View style={styles.search} >
                    <View style={styles.iconView} >
                        <Icon name="search-sharp" size={20} />
                    </View>

                    <TextInput
                        style={styles.input}
                        value={value}
                        onChange={(text) => setValue(text)}
                        placeholder="Ara..." />
                </View>

            </DropShadow>

        </View>
    )
}

export default MySearch;