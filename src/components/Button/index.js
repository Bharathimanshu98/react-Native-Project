import { View, Text, Pressable, style, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { styles } from './style';

const Button = ({title, onPress, style}) => {

console.log("Button Clicked");

  return (
    <TouchableOpacity  activeOpacity={0.6} onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default React.memo(Button);