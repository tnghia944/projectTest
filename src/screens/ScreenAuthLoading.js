"use strict";
import React, { Component } from "react";
import { View,StatusBar, StyleSheet } from "react-native";
import StoreLogin from "../storage/StoreLogin";
import AppNavigate from "../AppNavigate";

export default class ScreenAuthLoading extends Component {
  constructor() {
    super();
  }
  componentDidMount(){
    this.authAsync();
  }
  async authAsync(){
    const user = await StoreLogin.getLogin();
    AppNavigate.next(this.props.navigation, user ? "ScreenTabAfterLoginMain" : "ScreenTabsBeforeLoginMain");    
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0.0)" barStyle="light-content"/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});