import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
       alignItems:'center',
       marginBottom:54
    },
    image:{
       width:25,
       height:25
    },
    title:{
        color:colors.blue,
        fontSize:26,
        fontWeight:'600',
        paddingHorizontal:16
    }
})