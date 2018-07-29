//import liraries
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {
    ActivityIndicator,
    AsyncStorage,
    
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';

// create a component
class AuthLoadingScreen extends React.Component {
    constructor() {
      super();
      this._bootstrapAsync();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
  
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      if(userToken)
      {
       // console.log(this.props.fetchUser(userToken));
        this.props.navigation.navigate('App');
      }
      else this.props.navigation.navigate('Auth');
          
      
      
    };
  
    // Render any loading content that you like here
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

//make this component available to the app

export default connect(null,actions)(AuthLoadingScreen);
