import React, { useEffect } from "react"
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native"
import Button from "../../../components/Button";


function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      //navigation.replace("Login")
    }, 2000);
  }, [])
  return (
    <View>
      <SafeAreaView>
      <Text style={StyleSheet.text}>Krinvi Technologies</Text>
        <Image resizeMode="contain"  
          source={require("../../../assets/logo.png")}
          />
          <Button title="sign Up"/>
      </SafeAreaView>
      
    </View>
  );
}
export const style = StyleSheet.create({
    image:{
        width: 200,
        height: 120,
        resizeMode: "contain",
        shadowColor: "#2ff",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 100,
    },
    text:{
        fontSize:40,
        fontWeight:"bold"
    }
})

export default SplashScreen;
