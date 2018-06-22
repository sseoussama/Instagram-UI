//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,ScrollView} from 'react-native';
import CardComponent from '../CardComponent';
import {Container,Content,Thumbnail ,Icon,Header,Left,Right,Body,Button,Title} from 'native-base';
import { Font, AppLoading } from "expo";
// create a component
class HomeTab extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

    render() {
      if (this.state.loading) {
        return (
          <Container>
            <AppLoading />
          </Container>
        );
      }
        return (
            <Container style={styles.container}>
             
               <Header>
                 <Left>
                   <Button transparent>
                     <Icon name='md-camera' />
                   </Button>
                 </Left>
                 <Body>
                   <Title>Instagram</Title>
                 </Body>
                 <Right>
                   <Button transparent>
                     <Icon name='md-send' />
                   </Button>
                 </Right>
               </Header>       
                <View style={{height:90}}>
                      <View style={{flex:1,flexDirection:'row' , justifyContent:'space-between',alignItems:'center',paddingHorizontal:7}}>
                      <Text style={{fontWeight:'bold'}}> Stories </Text>
                      <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                      <Icon  name="md-play"/>
                      <Text> Watch All </Text>
                      </View>
                      </View>
                    <View style={{flex:3}}>
                         <ScrollView horizontal showsHorizontalScrollIndicator= {false} contentContainerStyle={{alignItems:'center', paddingStart:5,paddingEnd:5} } >
                             <Thumbnail style={{marginHorizontal:7 ,marginVertical:3,  borderColor:'pink',borderWidth:2 }} source={require("../../assets/IMG_20180331_135215_406.jpg")}/>
                             <Thumbnail style={{marginHorizontal:7 ,marginVertical:3,  borderColor:'pink',borderWidth:2 }} source={require("../../assets/IMG_20180331_135215_406.jpg")}/>
                             <Thumbnail style={{marginHorizontal:7 ,marginVertical:3,  borderColor:'pink',borderWidth:2 }} source={require("../../assets/IMG_20180331_135215_406.jpg")}/>
                             <Thumbnail style={{marginHorizontal:7 ,marginVertical:3,  borderColor:'pink',borderWidth:2 }} source={require("../../assets/IMG_20180331_135215_406.jpg")}/>
                             <Thumbnail style={{marginHorizontal:7 ,marginVertical:3,  borderColor:'pink',borderWidth:2 }} source={require("../../assets/IMG_20180331_135215_406.jpg")}/>
                             <Thumbnail style={{marginHorizontal:7 ,marginVertical:3,  borderColor:'pink',borderWidth:2 }} source={require("../../assets/IMG_20180331_135215_406.jpg")}/>
                             <Thumbnail style={{marginHorizontal:7 ,marginVertical:3,  borderColor:'pink',borderWidth:2 }} source={require("../../assets/IMG_20180331_135215_406.jpg")}/>
                             <Thumbnail style={{marginHorizontal:7 ,marginVertical:3,  borderColor:'pink',borderWidth:2 }} source={require("../../assets/IMG_20180331_135215_406.jpg")}/>
                            
                         </ScrollView>
                    </View>
                    </View>
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
