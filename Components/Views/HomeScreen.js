import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert
} from "react-native";
import {connect} from 'react-redux';
import * as actions from '../../actions';
import { Font, AppLoading,MapView,Constants, Location, Permissions } from "expo";
//library imports
import {SafeAreaView} from 'react-navigation';
import { Icon, Container,  Item,Input,Label } from 'native-base'

//custom components imports 
import CustomHeader from './Components/CustomHeader'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />,
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name="md-home"
        color={tintColor}
        style={styles.icon}
      />
    ),
    
  })
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  constructor(props) {
    super(props);
    this.state = { loading: true};
}

  state = {
    location: null,
    errorMessage: null,
    geocode:'',
    mapRegion:null
  };
    
      async componentWillMount() {
       
       
       
       
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });

        this._getLocationAsync();
       
      }
    
  
      _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        let geocode1 = await Location.reverseGeocodeAsync(location.coords);
        let geocode=geocode1.street +" , "+geocode1.city+" ,"+geocode1.region;
         console.log(geocode1[0].city);
        
        this.setState({ location });
            this.setState({ geocode });
        this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0022, longitudeDelta: 0.0121 }});
    
      };
      _handleMapRegionChange = mapRegion => {
        
        this.setState({ mapRegion });
      };
  render() {
 
   
      let text = 'Waiting..';
      let text1 = 'Waiting..';
    
     
      if (this.state.loading) {
        return (
          <Container>
            <AppLoading />
          </Container>
        );
      }
      if (this.state.errorMessage) {
        text = this.state.errorMessage;
        text1 = this.state.errorMessage;
      } else if (this.state.location) {
        text = JSON.stringify(this.state.location);
        text1 = this.state.geocode ;
      }
    return (
      <View style={{flex:1}}>
       <CustomHeader title="Home" drawerOpen={() => this.props.navigation.openDrawer()} />
      <View style={{flex:4}}>
      <MapView
              style={{ alignSelf: 'stretch', height: 400 }}
              region={this.state.mapRegion}
              onRegionChange={this._handleMapRegionChange}
            />
      </View> 

      
            <View style={{flex:1}}></View>
     <Item inlineLabel>
              <Label>{text1}</Label>
              <Input />   
              </Item>
             </View>        
           <Text style={styles.paragraph}></Text>
     
          </View>
    )
  }

}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
})
function mapStateToProps(state)
{
   
   return {user:state.user}; 
}
export default connect(mapStateToProps,null) (HomeScreen);



