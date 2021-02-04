import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class HomeScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={titulo:''}
    }


    getfetch = () => {
        return fetch('http://192.168.43.202:8080/noticias/',{
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                titulo:this.state.titulo,
              })
            })
        .then((response) => response.json())
        .then((responseJson) => {
    
           console.log(responseJson);
    
        })
        .catch((error) =>{
            console.error(error);
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <Text value={this.setState.titulo}></Text>
            </View>
        );
    }
}

export default HomeScreen

const styles = {
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}
