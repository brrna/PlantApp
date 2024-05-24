import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import createStyles from "./PlantSectionStyle";
import DropShadow from "react-native-drop-shadow";
import GreenCard from "../greenCard/GreenCard";

function PlantSection({Plantname}) {

    const styles = createStyles();

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView >

                <View style={styles.imageView} >
                    <DropShadow style={styles.shadow} >
                        <Image
                            source={require("../../assests/images/bitki.jpeg")}
                            style={styles.image} />
                    </DropShadow>
                </View>

                <View style={styles.headerView} >
                    <DropShadow style={styles.shadow} >
                        <View style={styles.header} >
                            <View style={styles.info} >
                                <View style={styles.top} >
                                    <Text style={styles.topText} >    Plant name</Text>
                                    <Image
                                        source={require("../../assests/images/leafIcon.png")}
                                        style={styles.icon} />
                                </View>
                                <View style={styles.under} >
                                    <Text style={styles.underText} >{Plantname}</Text>
                                </View>
                            </View>

                            <View style={styles.line}></View>

                            <View style={styles.info} >
                                <View style={styles.top} >
                                    <Text style={styles.topText} >   Season</Text>
                                    <Image source={require("../../assests/images/season.png")} />
                                </View>
                                <View style={styles.under} >
                                    <Text style={styles.underText} >Summer</Text>
                                </View>
                            </View>
                        </View>
                    </DropShadow>
                </View>

                <View style={styles.informationView} >
                    <DropShadow style={styles.shadow} >
                        <View style={styles.frame}>
                            <DropShadow style={styles.shadow} >
                                <View style={styles.inner} >
                                    <View style={styles.innerHeader} >
                                        <DropShadow style={styles.shadow} >
                                            <Text style={styles.text} >Plant Detail</Text>
                                        </DropShadow>
                                    </View>
                                    <View style={styles.detailView} >
                                        <Text style={styles.detailText} >
                                            detail detail detail
                                        </Text>
                                    </View>
                                </View>
                            </DropShadow>
                        </View>
                    </DropShadow>
                </View>

                <View style={styles.cardsView} >
                    <GreenCard header={"Uses"} />
                    <GreenCard header={"Healt"} />
                    <GreenCard header={"Climate"} />
                    <GreenCard header={"Propagation"} />
                    <GreenCard header={"Soil"} />
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default PlantSection;