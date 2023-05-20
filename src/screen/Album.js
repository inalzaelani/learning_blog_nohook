import React, { Component } from 'react';
import {View,Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : []
         };
    }

    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((json) => this.setState({data: json}));
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

                    <TouchableOpacity>
                        <Icon name="bars" size={30} color="#bdbdbd" />
                    </TouchableOpacity>

                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Album</Text>
                    </View>
                    
                    <TouchableOpacity>
                        <Icon name="search" size={30} color="#bdbdbd" />
                    </TouchableOpacity>
                </View>

                <View style={{flex:1, backgroundColor:'#bdbdbd'}}>
                <FlatGrid
                itemDimension={150}
                data={this.state.data}
                renderItem={({item}) => (
                <TouchableOpacity style={{backgroundColor:'#FFFF', elevation:3, height:200, width:200}}>

                <View style={{justifyContent:'center',alignItems:'center',marginVertical:10}}>
                    <Image source={{uri : item.url }}
                        style={{width:100, height:100}}
                />
                </View>

                  
                    <View style={{justifyContent:'center', marginLeft:20, flex:1, marginRight:20}}>
                        <Text style={{fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
                )}
                />
                    
                </View>
                
                <View style={{
                    backgroundColor:'#fff', 
                    paddingVertical: 20, 
                    elevation:2,
                    flexDirection:'row',
                    paddingHorizontal:10}}>

                    <TouchableOpacity
                     onPress={()=>this.props.navigation.navigate('Home')} 
                    style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="home" size={20} color="#bdbdbd" />
                    </TouchableOpacity>
    
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="folder-open" size={20} color="#0C134F" />
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

export default Album