import { Image, Text, View, } from "react-native";
import createStyles from "./MyCardStyle";

function MyCard(props) {

    const styles = createStyles();

    const { img = [""], name } = props;

    return (
        <View style={styles.background} >
            <View style={styles.frameFirst} >
                <View style={styles.frameSecond} >
                    <View style={styles.container} >
                        <View style={styles.imageView} >
                            <Image source={img} style={styles.image} />
                        </View>
                        <View style={styles.textView} >
                            <Text
                                style={styles.text}>{name}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

}

export default MyCard;