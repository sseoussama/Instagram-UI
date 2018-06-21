//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardComponent from '../CardComponent';
import {Container,Content, } from 'native-base';
// create a component
class HomeTab extends Component {
    
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                <CardComponent imageSource="1" likes="101" />
                <CardComponent imageSource="2" likes="30" />
                <CardComponent imageSource="3" likes="98" />
                <CardComponent imageSource="4" likes="98" />
                </Content>
                </Container>
          
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
      
    },
});

//make this component available to the app
export default HomeTab;
