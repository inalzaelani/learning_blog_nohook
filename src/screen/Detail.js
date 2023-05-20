import React, { Component } from 'react';
import {View,Text,Image, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{flex:1}}>
             <StatusBar backgroundColor='#FFF' barStyle='dark-content'/>
                <View style={{
                    backgroundColor:'#fff', 
                    paddingVertical: 20, 
                    elevation:2,
                    flexDirection:'row',
                    paddingHorizontal:10}}>

                    <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                        <Icon name="chevron-left" size={30} color="#bdbdbd" />
                    </TouchableOpacity>

                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Detail</Text>
                    </View>
                    
                    <TouchableOpacity>
                        <Icon name="search" size={30} color="#bdbdbd" />
                    </TouchableOpacity>
                </View>
               
               

                <View style={{flex:1, backgroundColor:'#bdbdbd'}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Image 
                        source={{
                            uri : this.props.route.params.image,
                        }}
                        style={{width:250, height:250, marginVertical:20, borderRadius:10}}
                        />
                        <View>
                            <Text style={{fontWeight:'bold', fontSize:18}}>{this.props.route.params.title}</Text>
                            <Text style={{marginTop:20}}>{this.props.route.params.body}</Text>
                        </View>
                        
                    </View>
                </View>

                <View style={{
                    backgroundColor:'#fff', 
                    paddingVertical: 20, 
                    elevation:2,
                    flexDirection:'row',
                    paddingHorizontal:10}}>

                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="home" size={20} color="#0C134F" />
                    </TouchableOpacity>
    
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="folder-open" size={20} color="#bdbdbd" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="heart" size={20} color="#bdbdbd" />
                    </TouchableOpacity>
    
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="user" size={20} color="#bdbdbd" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="ellipsis-v" size={20} color="#bdbdbd" />
                    </TouchableOpacity>
                </View>
            </View>
            
        );
    }
}

export default Detail