import { View, Text, Pressable, style, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { styles } from './style';

const CheckBox = ({checked, onCheck}) => {
  console.log("Inside Checkbox component");
  return (
    <TouchableOpacity  activeOpacity={0.6} onPress={onPress} style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image src={require()}></Image>
        </View>
      ):
      null
      }
    </TouchableOpacity>
  )
}

export default React.memo(CheckBox);