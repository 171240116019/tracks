import React,{useContext, useState} from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import {Text,Button,Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
  const {state,signup}=useContext(AuthContext);
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  console.log(state);
 
  return (
    <View style={styles.container}>
    <Spacer>
    <Text h3>Sign Up for Tracker</Text>
    </Spacer>
    <Input label="Email"
      value={email}
      onChangeText={setEmail}
      autoCapitalize='none'
      autoCorrect={false}
    />
    <Input label="Password"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
      autoCapitalize='none'
      autoCorrect={false}
    />
    {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>:null}
   <Spacer>
    <Button title="Sign up" onPress={()=>signup({email,password})}/>
   </Spacer>
   <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
   <Text>Already have an Account ? Sign in instead</Text>

   </TouchableOpacity>
    </View>
  );
  
};

SignupScreen.navigationOptions=()=>{
  return{
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom:250,
    marginTop:100
  },
  errorMessage:{
    fontSize:16,
    color:'red'
  }
});

export default SignupScreen;
