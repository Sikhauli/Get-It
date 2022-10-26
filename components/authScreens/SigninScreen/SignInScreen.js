import { View, Text, StyleSheet, ScrollView, Linking, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInput from '../../CustomInput/CustomInput'
import CustomButton from '../../CustomButton/CustomButton';
import GoogleButton from 'react-google-button'
import basket from '../../../assets/trolley.jpg'
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignInScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errMsg, setErrMsg] = useState('');

    useEffect(()=>{
        if (auth.currentUser) {
            navigation.navigate('Home');
        }
    }, [])

    const loginWithEmail = async() => {
      if (email === '') {
          setErrMsg('Email is required to log in');
      } else {
          if (password === '') {
              setErrMsg('Password is required to login')
          } else {
              await signInWithEmailAndPassword(auth, email, password).then(
                  userCridential => {
                      navigation.navigate('Home')
                  }
              ).catch(
                  err => {
                      setErrMsg(err.message);
                  }
              )
          }
      }
  }


  return (
    <ScrollView>
      <View style={styles.root}>
        <View>
       <Image source={basket} style={{ width: 200, height: 180 }} />
        </View>
        <View>
          <Text style={{ color: '#20DC49', fontSize: 30, fontWeight: 'bold' }}>Welcome Back</Text>
        </View>
        <View>
          <Text style={styles.title1}>Login to your account</Text>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.line1}></View>
          <Text style={{ color: '#20DC49', marginLeft: 10, marginRight: 10, fontSize: 10 }}>Or continue with</Text>
          <View style={styles.line2}></View>
        </View>
        <View style={{ marginTop: 30 }}>
          <TextInput
          style={styles.input}
           placeholder="Email"
           value={email}
           onChangeText={text => setEmail(text)}
            />
          <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          />
        </View>
        <View>
          <CustomButton text="Log in Account" onPress={loginWithEmail}/>
        </View>
        <View>
          <GoogleButton style={{ width: 200, marginTop: 20 }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ color: '#fff' }}>Have an account?</Text>
          <Text style={{ color: '#20DC49' }}
            onPress={() => Linking.openURL('')}>SignUp
          </Text>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1D2D44',
    alignItems: 'center',
    padding: 20,
  },
  title1: {
    fontSize: 16,
    color: '#50E683',
    margin: 10,
  },
  title2: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#50E683',
    margin: 10,
  },
  title3: {
    fontSize: 15,
    color: '#50E683',
    margin: 20,
  },
  title4: {
    fontSize: 15,
    color: '#50E683',
    margin: 10,
  },
  line1: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: 160,
    marginLeft: -35
  },
  line2: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: 160,
    marginRight: -35
  },
  input:{
    height: '5vh',
    width: '60vw',
    borderColor: 'green',
    borderWidth: 2,
    marginTop: '2vh',
    outlineColor: "none",
    padding: 7,
  }

});

export default SignInScreen