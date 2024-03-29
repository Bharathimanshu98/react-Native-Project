import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
    container:{
     marginBottom:20
    },
    label:{
     marginBottom:8,
     color:colors.blue,
     fontSize:14,
     fontWeight:'500'
    },
    inputContainer:{
     borderWidth:1,
     borderColor:colors.grey,
     borderRadius:14
    },
    input:{
     borderWidth:1,
     paddingHorizontal:16,
     paddingVertical:20,
     borderRadius:14
    }
})