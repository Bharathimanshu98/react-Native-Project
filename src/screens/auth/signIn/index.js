import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../../../components/AuthHeader';
import { styles } from './style';
import Input from '../../../components/input';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
const SignIn = () => {
  const [checked, setChecked] = useState(false);
  const onSignUp = ()=>{
      console.log("Hello");
  }

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="sign in" />
      <Input label="Name" placeholder="Himanshu Sharma" />
      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="***********" />
         

      <Button style={styles.button} title="Sign In" />
      <Separator text="Or Sign up with" />
      <GoogleLogin />

      <Text style={styles.footertext}>
        Don't have an account?
        <Text onPress={onSignUp} style={styles.footerlink}>sign Up</Text>
      </Text>
    </ScrollView>
  )
}

export default SignIn