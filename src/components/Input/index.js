import { View, Text, TextInput, Pressable , Image} from 'react-native'
import React, { useState } from 'react';
import { styles } from './styles';

const Input = ({placeholder,label, isPassword}) => {
    const[isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    // const onEyePress = ()=>{
    //  setIsPasswordVisible(!isPasswordVisible)
    // }

  return (
    <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputContainer}>
        <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input}/>
        
     {/* <Pressable onPress={onEyePress}>
          <Image source={require()}></Image>
     </Pressable> */}

        </View>
    </View>
  )
}

export default Input;
