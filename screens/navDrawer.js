import React, { Component } from 'react';
import { View, Text , Dimensions, SafeAreaView, ScrollView } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import All from './screens/All/index';
import Checked from './screens/Done/index';

export const NavDrawer = createDrawerNavigator (
    
    {
        All:{ screen: All },
        Checked:{ screen: Checked },
    },
    {
        contentComponent: ContenidoDrawer,
        initialRouteName: 'All',
    });