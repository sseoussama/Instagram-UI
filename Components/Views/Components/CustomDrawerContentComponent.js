//import liraries
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Container,Header,Body,Image,Content} from 'native-base';
import {DrawerItems} from 'react-navigation'
// create a component
const  CustomDrawerContentComponent =(props)=> {
 return(
  <Container>
      <Header style={styles.drawerHeader}>
        <Body>
        
        </Body>
      </Header>
      <Content>
        <DrawerItems {...props} />
      </Content>
  
    </Container>
 )

    
  }


// define your styles
const styles = StyleSheet.create({

  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }
});

//make this component available to the app
export default CustomDrawerContentComponent;
