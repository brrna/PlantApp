import { StyleSheet, TextInput } from "react-native";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

function MyTextinput({value,setValue,placeholder,style}){
    return(
        
        <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
       
        style={[styles.textinput, style]}
        />
        
    )
}

const  styles=StyleSheet.create({
    textinput:{
        height:hp(5),
        width:wp(62),
        backgroundColor:"#E0EDCB",
        borderRadius:hp(5),
        fontWeight:"bold",
        textAlign:"center",

    }

})
export default MyTextinput;