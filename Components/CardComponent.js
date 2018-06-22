//import liraries
import React, { Component } from 'react';
import {Text, StyleSheet,Image } from 'react-native';
import {Card,CardItem,Thumbnail,Body,Left,Right,Button,Icon} from 'native-base'; 
// create a component
class CardComponent extends Component {
   
    render() {
        const images ={
            "1" : require("../assets/IMG_20180331_135215_406.jpg"),
            "2" : require("../assets/_IGP0687.jpg"),
            "3" : require("../assets/image-0-02-04-ea5a6213af89ce9c3d6874fff9bcc0514be488a10bf7f7409878dad45efff39d-V.jpg"),
            "4" : require("../assets/IMG_2701.jpg"),
                
        }
        return (
          <Card>
              <CardItem>
                 <Left>
                     <Thumbnail source={require("../assets/IMG_20180331_135215_406.jpg")}/>
                     <Body>
                         <Text>Oussama </Text>
                         <Text>Jan 15, 2018 </Text>
                 
                         </Body>
                     </Left>
              </CardItem>
              <CardItem cardBody>
                <Image  source={images[this.props.imageSource]} style={
                   {flex:1,height:400,width:null}
                } /> 
              </CardItem>
              <CardItem style={{height:50}}>
                  <Left>
                      <Button transparent>
                      <Icon name="md-heart-outline" style={{color:'black'}}/>
                     </Button>
                      
                      <Button transparent>
                      <Icon name="md-chatbubbles" style={{color:'black'}}/>
                   </Button>

                  <Button transparent>
                      <Icon name="md-send" style={{color:'black'}}/>
               </Button>
                      </Left>
              </CardItem>
              <CardItem style={{height:20}}>
              <Text>{this.props.likes} Likes  </Text>
                 
                  </CardItem>
                 <CardItem>
                     <Body>
                         <Text>
                         <Text style={{fontWeight:"bold"}}>Amir</Text> fhdkfhkjdhfkjdhfkjdhfkjdhfkjdhfkjdhfjkdhjkffffffffffffffffffffffffffffffffffksmdfmdsfhdsjfhkshf
                          </Text>
                         </Body>
                   </CardItem>
              </Card>
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
export default CardComponent;
