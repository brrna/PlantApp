import { SafeAreaView } from "react-native";
import MySecondHeader from "../component/myBackHeader/MySecondHeader";

function MyPlants({navigation}) {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
            
            <MySecondHeader 
                headerText={"My Plants"} 
                onPress={() => navigation.navigate('ProfileScreen')} />

        </SafeAreaView>
    )
}
export default MyPlants