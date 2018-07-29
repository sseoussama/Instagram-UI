//import liraries

import React, { Component } from 'react';
import { View, Text, StyleSheet ,Alert,AsyncStorage,} from 'react-native';
import {Input,Container,Content,Item,Icon,Header,Button,Form,Label} from 'native-base';
import LoginForm from './Components/LoginForm';
import axios from 'axios'
// create a component
class SignInScreen extends Component {
 
  signInAsync   (token) {
      var props=this.props;
    const api = axios.create({
      headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
   }
  }); 
 api.get("http://192.168.1.4:5000/api/users/profile").then(function(response)
 {
   
   AsyncStorage.setItem('userToken', token);
   props.navigation.navigate('App');
      
     
 }).catch(function(error)
 {
        console.log(error);
 });
   
  };
  
  submit = (values) =>{
        axios.post('http://192.168.1.3:5000/api/users/login', {
      email:values.email,
       password:values.password
              })
               .then(function (response) {
                   
                _signInAsync(response.data.token);
                   
                 })
               .catch(function (error) {
                 Alert(error);
                  
               });

 }  


  
  async loginGoggle() {
    
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '361674328118-gi76294arh7sb3qglbatu42la0uon0pg.apps.googleusercontent.com',
        
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        _signInAsync(result.accessToken);
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }

   signInFb(accessToken)
   {
    var this1=this;
    axios.post('http://192.168.1.4:5000/api/users/auth/facebook', {
      access_token:accessToken,
             })
              .then(function (response) {
                
                  console.log(response.data.token)
                  this1.signInAsync(response.data.token);
                  
                  
                })
              .catch(function (error) {
                console.log(error);
                 
              });
   
  }
   
      async loginFb() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('2101013463449988', {
            permissions: ['public_profile'],
          });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`);
            this.signInFb(token);
            console.log(token);
            
          Alert.alert(
            'Logged in!',
            `Hi ${(await response.json()).name}!`,
          );
        }
      }
      
    render() {
        return (
           
         <View style={styles.container}>
         
<View style={{flex:2,paddingTop:20}}>
        
           <LoginForm/>
</View>
<View style={{flex:1,justifyContent:'center'}}>

    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
              <Text>Or</Text>
    </View>
<View style={{flex:1,flexDirection:'row'}}>

    <View style={{flex:1,paddingLeft:'5%'}}>
    <Button style={{width:'90%',backgroundColor:'#4C69BA',justifyContent:'center',height:45}} onPress={this.loginFb.bind(this)}><Icon name='logo-facebook'/></Button>
    </View>
    <View style={{flex:1,paddingRight:'5%'}}>
    <Button style={{backgroundColor:'#DD4B39',justifyContent:'center',width:'90%',height:45}} onPress={this.loginGoggle.bind(this)}><Icon name='logo-google'/></Button>
    </View>
              
          </View>
          
         </View>
        
         </View>
   
     
      
      
       
         
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#fff',
        
      
    },
});

//make this component available to the app
export default SignInScreen;
