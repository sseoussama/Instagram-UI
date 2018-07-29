import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from './Input';



export default class App extends React.Component {
  _handleSubmit = async (values, bag) => {
    try {
      
      console.log(values);
      Alert.alert('Welcome');
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(error);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Formik
          initialValues={{ first:'',last:'',email: '',phone:'', password: '',  }}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
            first:Yup.string()
            .required('First Name Is requered '),
            last:Yup.string()
            .required('lAst Name Is requered '),
            phone:Yup.string()
            .required('phone number Is requered '),
            email: Yup.string()
              .email('Not valid email')
              .required('Email is required'),
            password: Yup.string()
              .min(6)
              .required('Password is required'),
           
          })}
          render={({
            values,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
            setFieldTouched,
            isValid,
            isSubmitting,
          }) => (
            <React.Fragment>
    <View style={{flex:1,flexDirection:'column'}}> 
        <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:1,justifyContent:'center'}}>
                     
            <Input
                label="First name"
                autoCapitalize="none"
                value={values.first}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="first"
                error={touched.first && errors.first}
              />   
                   </View>
                   <View style={{flex:1,justifyContent:'center'}}>
                     
                   <Input
                label="Last Name"
                autoCapitalize="none"
                value={values.last}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="last"
                error={touched.last && errors.last}
              />
                   </View>
             
              

        </View>
             
             
              <View style={{flex:1,justifyContent:'center'}}>
              <Input
                label="Email"
                autoCapitalize="none"
                value={values.email}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="email"
                error={touched.email && errors.email}
              />
              </View>
              <View style={{flex:1,flexDirection:'row',backgroundColor:'red'}}>
              <View style={{flex:1,justifyContent:'center'}}>
                 
                   <Text>+213</Text>
                 
              </View>
              <View style={{flex:3,justifyContent:'center'}}>
              <Input
                label="Phone Number"
                autoCapitalize="none"
                value={values.phone}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="phone"
                error={touched.phone && errors.phone}
              />
              </View>

                 
              </View>

              <View style={{flex:1,justifyContent:'center'}}>
              <Input
                label="Password"
                autoCapitalize="none"
                secureTextEntry
                value={values.password}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                name="password"
                style={{flex:1}}
                error={touched.password && errors.password}
              />
              </View>
              <Button
                backgroundColor="blue"
                buttonStyle={styles.button}
                title="Submit"
                onPress={handleSubmit}
                
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
              />
            
                 </View>
                 
            </React.Fragment>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    width: '100%',
  },
});