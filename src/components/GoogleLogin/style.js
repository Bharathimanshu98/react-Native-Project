import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.darkGrey,
        borderRadius:8,
        width:'46%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginBottom:50
    },
    image:{
        width:30,
        height:40
    }
})