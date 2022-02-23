import React, * as react from 'react';
import {Text,View,Button, TouchableOpacity} from 'react-native';

export default class MainScreen extends React.Component{
    render(){
        return(
        <View styles={{flex:1,backgroundColor:"white"}}>
            <Text styles={{color:"black"}}>Main Screen</Text>
           <TouchableOpacity style={{width:'50%',height:'50%',borderRadius:30,alignContent:'center'}}>Click to see the Topics</TouchableOpacity>
        </View>

        )
    }
}