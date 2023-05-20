import React, { Component } from 'react';
import {View,Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';

class Home extends Component {
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
        fetch('https://jsonplaceholder.typicode.com/posts')
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
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Home</Text>
                    </View>
                    
                    <TouchableOpacity>
                        <Icon name="search" size={30} color="#bdbdbd" />
                    </TouchableOpacity>
                </View>

                <View style={{flex:1, backgroundColor:'#bdbdbd'}}>
                <FlatGrid
                itemDimension={300}
                data={this.state.data}
                renderItem={({item}) => (
                <TouchableOpacity style={{backgroundColor:'#ffff', elevation:3, flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('Detail',{
                    title : item.title,
                    body : item.body,
                    image : 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                    })}
                >

                <View style={{justifyContent:'center',alignItems:'center', marginLeft:20}}>
                    <Image source={{uri : 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}}
                        style={{width:100, height:100}}
                />
                </View>

                  
                    <View style={{justifyContent:'center', marginLeft:20, flex:1, marginRight:20}}>
                        <Text style={{fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                        <Text>{item.body.slice(0,100)}</Text>
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

                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="home" size={20} color="#0C134F" />
                    </TouchableOpacity>
    
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Album')}
                    style={{flex:1,justifyContent:'center',alignItems:'center'}}>
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

export default Home