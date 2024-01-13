import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#4F63AC',
        paddingVertical:20,
        paddingHorizontal:8,
        borderRadius:8
    },
    title:{
        color:colors.blue,
        textAlign:"center",
        fontSize:16,
        fontWeight:'bold'
    }
})