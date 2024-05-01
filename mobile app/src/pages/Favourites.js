import { SafeAreaView} from "react-native";
import MySecondHeader from "../component/myBackHeader/MySecondHeader";

function Favorites({ navigation }) {
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: "white" }}>

                <MySecondHeader 
                    headerText={"Favourites"} 
                    onPress={() => navigation.navigate('ProfileScreen')} />

        </SafeAreaView>
    )
}

export default Favorites;