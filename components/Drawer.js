import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import All from "./All";
import Done from "./Done";
import ContenidoDrawer from './ContenidoDrawer';

export default (Drawer = createDrawerNavigator(
  {
    All: {screen: All},
    Done: {screen: Done}
  },
  {
    contentComponent: ContenidoDrawer,
    initialRouteName: 'All',
  }
));
