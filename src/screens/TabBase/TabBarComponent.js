import React from 'react';
import { BottomTabBar } from 'react-navigation-tabs';
//Note
//Custom change tab
//TabBarBottom is deprecated https://giprobase.com/react-navigation/react-navigation-tabs
export default class TabBarComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isVisible: true};
  }
 
  render() {
    //Here: listener change change tab, back
    return this.state.isVisible ? <BottomTabBar {...this.props} /> : null;
  } 
}