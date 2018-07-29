//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class SignUpScreen extends Component {


    submit = (values) =>{
        var props=this.props;
        axios.post('http://localhost:5000/api/users/signup', {
                    email:values.email,
                    password:values.password
                   })
                    .then(function (response) {
                     
                      Alert.alert("Sucefully SignUp ")
    
                    })
                    .catch(function (error) {
    
                        alert(error.response.data.msg);
                       
                    });
               
      }
    render() {
        return (
            <View style={styles.container}>
                <Text>SignUpScreen</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});

//make this component available to the app
export default SignUpScreen;
