import { View, Text } from "react-native";
import createStyles from "./GreenCardStyle";
import DropShadow from "react-native-drop-shadow";

function GreenCard({header}) {

    const styles = createStyles();

    return (
        <View style={styles.container} >
            <DropShadow style={styles.shadow} >
                <View style={styles.frame} >
                    <View style={styles.headerView} >
                        <Text style={styles.headerText} >{header}</Text>
                    </View>
                    <View style={styles.descriptionView} >
                        <Text style={styles.descriptionText} >fnkjnclnelmodsölcmlfsnd ljnmdaclmwdıcmlkmqlsmkcqjemwıonalnclmzŞOMKXAŞSMCADLCMAMŞKŞXşkddcnjsdjnkwfgbqıyedhouahcnwkhbfqeıgdbakdbc khwbqaıyshxbqwkdbwkd</Text>
                    </View>
                </View>
            </DropShadow>
        </View>
    )
}

export default GreenCard;