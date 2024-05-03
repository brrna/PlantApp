import { SafeAreaView, Text, TouchableOpacity } from "react-native";

function Signin({navigation}){
    return(
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('HomeTabs')}>HomeTabs</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text>To Signup</Text>
            </TouchableOpacity>
            

        </SafeAreaView>
    )
}

export default Signin;