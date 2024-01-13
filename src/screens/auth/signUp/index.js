import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../../../components/AuthHeader';
import { styles } from './style';
import Input from '../../../components/input';
import CheckBox from '../../../components/checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const onSignIn = ()=>{
      console.log("Hello");
  }

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="sign Up" />
      <Input label="Name" placeholder="Himanshu Sharma" />
      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="***********" />

      <View style={styles.agreeRow}>
        <CheckBox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>terms</Text> & <Text>privacy</Text></Text>
      </View>

      <Button style={styles.button} title="Sign Up" />
      <Separator text="Or Sign up with" />
      <GoogleLogin />

      <Text style={styles.footertext}>
        Already have an account?
        <Text onPress={onSignIn} style={styles.footerlink}>sign In</Text>
      </Text>
    </ScrollView>
  )
}

export default SignUp