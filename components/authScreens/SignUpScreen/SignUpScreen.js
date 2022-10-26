import { View, Text, StyleSheet, ScrollView,Linking, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInput from '../../CustomInput/CustomInput'
import CustomButton from '../../CustomButton/CustomButton';
import GoogleButton from 'react-google-button'
import { auth } from '../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = ({navigation}) => {

  const [errMsg, setErrMsg] = useState('');

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


   let history = useNavigation();

      const register = () =>{
          createUserWithEmailAndPassword(auth, email, firstname, lastname, password, confirmPassword).then(()=>{
//              navigation.Profile();
              console.log(email, firstname)
          }).catch((error)=>{
              console.log(error);
              alert("Error!!!");
          })
      }


//  useEffect(()=>{
//    if (auth.currentUser) {
//        navigation.navigate('Home');
//    }
//}, [])
//
//
//console.log("Email",  email)
//console.log("L-name",  lastname)
//console.log("F-name",  firstname)
//
//const registerWithEmail = async() => {
//  //check if inputs are empty
//  if (email === '') {
//      //email empty
//      setErrMsg('Email is required to register');
//      alert('Email is required to register');
//  } else {
//      if (password === '') {
//          //new password empty
//          setErrMsg('Password is required to register');
//      } else {
//          if (confirmpassword === '') {
//              //confirm password empty
//              setErrMsg('Confirm password is required to register');
//          } else {
//              if (password !== confirmpassword) {
//                  //pasword does not match
//                  setErrMsg('Passwords entered does not match');
//              } else {
//                  //good to go
//                  await createUserWithEmailAndPassword(auth, firstname, lastname, email, password).then(
//                      userCridential => {
//                          setErrMsg('');
//                          navigation.navigate('Home');
//                      }
//                  ).catch(
//                      err => {
//                          setErrMsg(err.message);
//                      }
//                  )
//              }
//          }
//      }
//  }
//}




  return (
    <ScrollView>
      <View style={styles.root}>
        <View>
          <Text style={{ color: '#20DC49', fontSize: 30, fontWeight: 'bold' }}>Sign Up</Text>
        </View>
        <View>
          <Text style={styles.title1}>GetEatCheap</Text>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.line1}></View>
          <Text style={{ color: '#20DC49', marginLeft: 10, marginRight: 10, fontSize: 10 }}>Or continue with</Text>
          <View style={styles.line2}></View>
        </View>

        <View style={{ marginTop: 30 }}>
          <TextInput style={styles.input} placeholder="First Name" onChangeText={value => setFirstName(value)} />

          <TextInput style={styles.input} placeholder="Last Name" onChangeText={value => setLastName(value)} />

          <TextInput style={styles.input} placeholder="Enter Email" onChangeText={value => setEmail(value)} />

          <TextInput style={styles.input} placeholder="Password" onChangeText={value => setPassword(value)} secureTextEntry />

          <TextInput style={styles.input} placeholder="Confirm password" onChangeText={value => setConfirmPassword(value)} secureTextEntry />

        </View>

        {errMsg !== '' ? (<View><Text style={styles.badErr}>{errMsg}</Text></View>) : (<View><Text style={styles.goodErr}></Text></View>) }

        <View>
          <CustomButton text="Create Account" onPress={registerWithEmail} />
        </View>
        {/* <View style={{alignItems:'center',flexDirection:'row'}}>
          <Icon name="google" size={25} color="red"/>
          <CustomButton text="SignUp with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44"/>
        </View> */}
        <View>
          <GoogleButton style={{width:200,marginTop:20}}/>
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
            <Text style={{color:'#fff'}}>Have an account?</Text>
            <Text style={{color:'#20DC49'}}
            onPress={()=>Linking.openURL('')}>SignIn
            </Text>
        </View>

        {/* <CustomButton text="Have an account? SignIn" onPress={onSignInPressed} type="TERTIARY" /> */}

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
    fontSize: 25,
    //fontWeight: 'bold',
    color: '#20DC49',
    margin: 10,
    marginTop: 25,

  },
  title2: {
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
  goodErr: {
    backgroundColor: 'white',
    color: 'maroon',
    // width: '80vw',
    // height: '10vh',
},
  badErr:{

    // width: '80vw',
    // height: '10vh',
    color:'White',
    backgroundColor: 'maroon'


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

export default SignUpScreen