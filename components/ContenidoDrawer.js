
import React, { Component } from 'react';
import {NavigationActions, DrawerItems} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native'
import { white } from 'ansi-colors';
import All from './All';
import Done from './Done';

// import { Container, Header, Content } from 'native-base';
// import Icon from "react-native-vector-icons/FontAwesome";
// import Icon2 from '/Users/PC/Documents/GitHub/ProyectoUX/node_modules/@expo/vector-icons/FontAwesome';

export default class ContenidoDrawer extends React.Component {
    
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    
    return (
        <View style={styles.container}>
           
            <View style={styles.headerContainer}> 
                <Text style = {styles.title}>Todo List</Text>
            </View>
            <View style={styles.screenContainer}>
                <View style={styles.screenStyle}>
                    {/* <Icon name= "home" /> */}
                    <Text style = {styles.screenTextStyle} onPress={this.navigateToScreen('All')}>All</Text>
                </View>
                <View style={styles.screenStyle}>
                    {/* <Icon type="Entypo"  name = "news"/> */}
                    <Text style = {styles.screenTextStyle} onPress={this.navigateToScreen('Done')}>Done</Text>
                </View>
            </View>
            
        </View>
    
    )
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20, 
        
             
    },
    headerContainer: {
        height: 150,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        // fontSize:
    },
    headerText: {
        color: '#fff8f8',
        paddingLeft: 15
    },
    screenContainer: {
        paddingTop: 20,
        paddingLeft: 15

    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    screenTextStyle:{
        // fontSize: 20,
        // marginLeft: 20,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
    headerStyle:{
        height: 220,
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 80,
    }
});