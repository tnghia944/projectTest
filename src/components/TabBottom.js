import React, { PureComponent } from 'react';
import { View, StyleSheet, Platform,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import color from '../utils/color';
import AppConfig from '../AppConfig'
import {connect} from 'react-redux'
import {updateTabBottom} from '../redux/actions/TabBottomAction'
const TabItem = (props) => {
    const {name = '' , active = false,onPressTab,tabName} = props;
    return (
        <TouchableOpacity 
        onPress={() => onPressTab(tabName)}
        style={[styles.touchIconBottom,
        { borderTopColor: active ? color.active : color.disabled }]}>
            <Icon name={name} width={SIZE_ICON_TAB} height={SIZE_ICON_TAB} 
                 fill={active ? color.active : color.disabled} />
        </TouchableOpacity>
    )
}
 class TabBottom extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _onPressTabItem = (tabName) => {
    const {updateTabBottom} = this.props;
    if(updateTabBottom && tabName ){
        updateTabBottom(tabName);
    }
  }
   render() {
       const {tabName} = this.props;
    return (
        <View style={styles.tabBottom}>
                    <TabItem 
                        name='person-outline' 
                        onPressTab={this._onPressTabItem} 
                        tabName={AppConfig.ACCOUNT}
                        active={tabName === AppConfig.ACCOUNT ? true : false}
                        />
                    <TabItem  
                        name='calendar-outline'
                        onPressTab={this._onPressTabItem}  
                        tabName={AppConfig.CALENDAR}
                        active={tabName === AppConfig.CALENDAR ? true : false}
                        />
                    <TabItem  
                        name='globe-2-outline'  
                        onPressTab={this._onPressTabItem} 
                        tabName={AppConfig.ADDRESS}
                        active={tabName === AppConfig.ADDRESS ? true : false}
                        />
                    <TabItem  
                        name='phone-outline'  
                        onPressTab={this._onPressTabItem}
                        tabName={AppConfig.PHONE} 
                        active={tabName === AppConfig.PHONE ? true : false}
                        />
                    <TabItem 
                         name='lock-outline' 
                         onPressTab={this._onPressTabItem}
                         tabName={AppConfig.LOCK} 
                         active={tabName === AppConfig.LOCK ? true : false}
                         />
                </View>
    );
  }
}
const mapStateToProps = state => {
    const TabBottomReducer = state.TabBottomReducer || {};
    return {
       tabName: TabBottomReducer.tabName,
    };
  };
  const mapDispatchToProps = dispatch => ({
      updateTabBottom : (tabName) => (dispatch(updateTabBottom(tabName)))
  });
  export default connect(mapStateToProps,mapDispatchToProps)(TabBottom)
const SIZE_ICON_TAB = 40;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBottom:{
    flex:3,
    width:'100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop:  ( Platform.OS ==='ios' ? 30 : 10 ) 
},
touchIconBottom:{
    minWidth:40,
    minHeight:40,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor:color.disabled,
    borderTopWidth:2,
    paddingTop:10
}
})
