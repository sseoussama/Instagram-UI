//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class HomeTab extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeTab</Text>
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
export default HomeTab;
