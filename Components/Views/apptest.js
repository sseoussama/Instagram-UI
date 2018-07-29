import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import axios from 'axios';
import SignInScreen from './Components/Views/SignInScreen'
import NotificationsScreen from './Components/Views/NotificationsScreen'

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk'
import { Container } from 'native-base';
const store=createStore(reducers,{},applyMiddleware(reduxThunk)); 

import {createStackNavigator,createDrawerNavigator} from 'react-navigation';
import HomeScreen from './Components/Views/HomeScreen';
import DrawerMenu from './Components/Views/Components/DrawerMenu';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
     
      <MyApp/>
    
         
      </Provider>
    
    );
  }
}

 const AppStackNavigator=createStackNavigator(
   {
     login :{screen:SignInScreen,
      navigationOptions : {
        headerTitle: 'التسجيل ',
     
      }
    }

   }
 ) 
 const AppDrawer = createDrawerNavigator({
   
    home: {
    screen: HomeScreen,
    
    navigationOptions : {
      drawerLabel: 'HomeScreen',
   
   }
  }

},
{
  contentComponent:DrawerMenu,
  contentOptions: {
  activeTintColor: '#e91e63',
  itemsContainerStyle: {
    marginVertical: 0,
  },
  iconContainerStyle: {
    opacity: 1
  }
}
}

);






































import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import axios from 'axios';
//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base'
import { createDrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

//custom files 

import SettingsScreen from './Components/Views/SettingsScreen'
import HomeScreen from './Components/Views/HomeScreen'
import SignInScreen from "./Components/Views/SignInScreen";


export default class App extends Component {
 
  render() {
    return (
   
      
         <MyApp/>
    
      
    )
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

const MyApp = createDrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen:SignInScreen
  },

},
  {
    initialRouteName: 'Home',
    
    contentComponent: CustomDrawerContentComponent,
  
  });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})
