import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import createStyles from "./PlantSectionStyle";
import DropShadow from "react-native-drop-shadow";
import GreenCard from "../greenCard/GreenCard";

function PlantSection({ Plantname,Description,Uses,Health,Climate,Soil }) {

    const styles = createStyles();

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView  style={{height:("100%"),flex:1}} >

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
                            <View style={styles.top} >
                                <Text style={styles.topText} >PlantName</Text>
                                <Image style={styles.icon} source={require("../../assests/images/leafIcon.png")} />
                            </View>
                            <View style={styles.under} >
                                <Text style={styles.underText} >{Plantname}</Text>
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
                                            {Description}
                                        </Text>
                                    </View>
                                </View>
                            </DropShadow>
                        </View>
                    </DropShadow>
                </View>

                <View style={styles.cardsView} >
                    <GreenCard header={"Uses"} Uses={Uses} />
                    <GreenCard header={"Health"} Uses={Health}/>
                    <GreenCard header={"Climate"} Uses={Climate} />
                    <GreenCard header={"Soil"}  Uses={Soil}/>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default PlantSection;