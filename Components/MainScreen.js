//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base';
import {createMaterialTopTabNavigator} from 'react-navigation';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import HomeTab  from './AppTabNavigator/HomeTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SearchTab  from './AppTabNavigator/SearchTab';

// create a component
class MainScreen extends Component {
    static navigationOptions = {
        headerLeft:<Icon name='md-camera' style={{paddingLeft:10}}/> ,
        title :"Instagram" ,
        headerRight: <Icon name='md-send' style={{paddingRight:10}}/>,
    }
    render() {
        return (
            <AppTabNavigator/>
        );
    }
    
}
const AppTabNavigator=createMaterialTopTabNavigator(
    {
       HomeTab: {screen : HomeTab, navigationOptions:
    {
        tabBarIcon : ({tintColor})=>(
            <Icon name="md-home" style={{color :tintColor}} />
        )
    }},
       SearchTab:{screen : SearchTab,navigationOptions:
    {
        tabBarIcon : ({tintColor})=>(
            <Icon name="md-search" style={{color :tintColor}} />
        )
    }},
       AddMediaTab: {screen : AddMediaTab,navigationOptions:
    {
        tabBarIcon : ({tintColor})=>(
            <Icon name="md-add-circle" style={{color :tintColor}} />
        )
    }},
       ProfileTab: {screen : ProfileTab,navigationOptions:
    {
        tabBarIcon : ({tintColor})=>(
            <Icon name="person" style={{color :tintColor}} />
        )
    }},
       LikesTab:{screen : LikesTab ,navigationOptions:
    {
        tabBarIcon : ({tintColor})=>(
            <Icon name="md-heart" style={{color :tintColor}} />
        )
    }}
    },{
       tabBarPosition:'bottom', 
       animationEnabled:'true', 
       tabBarOptions:{
            activeTintColor:"#000",
            inactiveTintColor:"#d1cece",
            showIcon:true,
            showLabel:false,
            style:
            {
                backgroundColor: '#fff',
            }
            , indicatorStyle: 
            {
                height:0
            }
        
        }}
);
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
       
    },
});

//make this component available to the app
export default MainScreen;
