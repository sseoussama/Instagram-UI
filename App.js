import React from 'react';

import CustomDrawerContentComponent from './Components/Views/Components/CustomDrawerContentComponent'
import { createStackNavigator, createSwitchNavigator,createDrawerNavigator} from 'react-navigation';
import SignInScreen from './Components/Views/SignInScreen';
import HomeScreen from './Components/Views/HomeScreen';
import SettingsScreen from './Components/Views/SettingsScreen';
import SignUpScreen from './Components/Views/SignUpScreen';
import AuthLoadingScreen from './Components/Views/AuthLoadingScreen';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
const store=createStore(reducers,{},applyMiddleware(reduxThunk)); 
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <MyApp/>
      </Provider>
    
    );
  }
}

const AuthStack = createStackNavigator({ SignIn: SignInScreen,SignUp:SignUpScreen });
const AppDrawer = createDrawerNavigator({
   
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen
  }
},
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
  
  });
const MyApp= createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppDrawer,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);