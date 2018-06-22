//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Dimensions} from 'react-native';
import {Container,Content ,Icon,Header,Left,Right,Body,Button,Title} from 'native-base';
import { Font, AppLoading } from "expo";
import CardComponent from '../CardComponent';
var {width,height} =Dimensions.get('window');
var images =[
 
    require("../../assets/IMG_20180331_135215_406.jpg"),
    require("../../assets/_IGP0687.jpg"),
    require("../../assets/image-0-02-04-ea5a6213af89ce9c3d6874fff9bcc0514be488a10bf7f7409878dad45efff39d-V.jpg"),
    require("../../assets/IMG_2701.jpg"),
        

]
class ProfileTab extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
      }
      async componentWillMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false, activeIndex:0  });
      }
      selectSegment=(index)=>
      {
        this.setState(
          {activeIndex:index}
        )
      }
     
      renderSection=()=>
      {
        
           if(this.state.activeIndex==0)
           {
            
             
             return (

               <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                    
               <View style={[{width:(width)/3,height:(width)/3},{marginBottom:4}]}>
              <Image style={{flex:1,width:undefined,height:undefined}}  source={require("../../assets/IMG_20180331_135215_406.jpg")}  />
             </View>
             <View style={[{width:(width)/3,height:(width)/3},{paddingLeft:2,marginBottom:4}]}> 
             <Image style={{flex:1,width:undefined,height:undefined}} source={require("../../assets/IMG_20180331_135215_406.jpg")} />
             </View>
              <View style={[{width:(width)/3,height:(width)/3},{paddingLeft:2,marginBottom:4}]}>
              <Image style={{flex:1,width:undefined,height:undefined}} source={require("../../assets/IMG_20180331_135215_406.jpg")} />
              </View>
              <View style={[{width:(width)/3,height:(width)/3},{marginBottom:4}]}>
              <Image style={{flex:1,width:undefined,height:undefined}} source={require("../../assets/IMG_20180331_135215_406.jpg")} />
              </View>
              <View style={[{width:(width)/3,height:(width)/3},{paddingLeft:2,marginBottom:4}]}>
              <Image style={{flex:1,width:undefined,height:undefined}} source={require("../../assets/IMG_20180331_135215_406.jpg")} />
              </View>
              <View style={[{width:(width)/3,height:(width)/3},{paddingLeft:2,marginBottom:4}]}>
              <Image style={{flex:1,width:undefined,height:undefined}} source={require("../../assets/IMG_20180331_135215_406.jpg")} />
              </View>
                </View>
             )
             ; 
           }
           else {
             if(this.state.activeIndex==1)
              return (
                <View>
                    <CardComponent imageSource="1" likes="101" />
                     <CardComponent imageSource="2" likes="30" />
                     <CardComponent imageSource="3" likes="98" />
                      <CardComponent imageSource="4" likes="98" />
                </View>
              )
              ;
           }
      }
      render3=()=>
      {
          return (
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{alignItems:'center'}}><Text style={styles.grey}>10</Text><Text>Posts</Text></View>
            <View style={{alignItems:'center'}}><Text style={styles.grey}>10</Text><Text>Posts</Text></View>
            <View style={{alignItems:'center'}}><Text style={styles.grey}>10</Text><Text>Posts</Text></View>
             
           </View>
          );
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
                   <Button transparent
                     
                     >
                     <Icon name='md-person-add'  />
                   </Button>
                 </Left>
                 <Body>
                   <Title>oussama_sabour</Title>
                 </Body>
                 <Right>
                   <Button transparent>
                   <Icon name='md-person-add' /> 
                   </Button>
                 </Right>
               </Header>  
               <Content>
          <View style={{paddingTop:10,paddingHorizontal:5}}>
              <View style={{flexDirection:'row'}} >
                <View style={{flex:1}} > 
                  <Image style={{width:75,height:75,borderRadius:37.5 }} source={require("../../assets/IMG_20180331_135215_406.jpg")}/>
                </View>
                <View style={{flex:3}}>
                  <View>
                    {this.render3()}
                  </View>
                  <View style={{flex:1,flexDirection:"row",marginLeft:5,paddingTop:10}} >
                  <Button style={{flex:3,justifyContent:'center'}} bordered dark>
                   <Text> Edit Profile</Text>
                   </Button>
                       <Button style={{flex:1,justifyContent:'center'}} bordered dark >
                       <Icon name='settings' /> 
                       </Button>
                  </View>
                </View>
              </View>
              <View style={{paddingVertical:5}}>
                   <Text style={{fontWeight:'bold'}}>Oussama Sabour</Text>
                   <Text>fkdkflmdkslmfkdlmfklmdkflmdfkd </Text>
                   <Text>fkdkflmdkslmfkdlmfklmdkflmdfkd </Text>
              </View>
            </View>
                  <View style={{flexDirection:'row',justifyContent:'space-around',borderTopWidth:1,borderTopColor:'#eae5e5'}}>
                       
                      <Button transparent dark  onPress={()=>this.selectSegment(0)}
                      active={this.state.activeIndex==0} >
                      <Icon name='md-apps' style={[this.state.activeIndex==0 ? {} : {color:'grey'}]} />
                      </Button> 
                      <Button transparent dark onPress={()=>this.selectSegment(1)}
                      active={this.state.activeIndex==1} >
                      <Icon name='md-list'  style={[this.state.activeIndex==1 ? {} : {color:'grey'}]}/>
                      </Button>

                      <Button transparent dark onPress={()=>this.selectSegment(2)}
                      active={this.state.activeIndex==2} >
                      <Icon name='md-people'  style={[this.state.activeIndex==2 ? {} : {color:'grey'}]}/>
                        </Button>
                        <Button transparent dark onPress={()=>this.selectSegment(3)}
                        active={this.state.activeIndex==3} >
                      <Icon name='md-bookmark' style={[this.state.activeIndex==3 ? {} : {color:'grey'}]} />
                        </Button>
                  </View>
                  <View>
                  {this.renderSection()}
                  </View>


                   
                   </Content>
                </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white', 
        
    },
    grey : 
    {
      fontSize:10,color:'grey'
    }
});

//make this component available to the app
export default ProfileTab;
