import React, { PureComponent } from 'react';
import {Text,
    View,StyleSheet,Platform} from 'react-native'
import { SCREEN } from '../utils/deviceInfo';
import color from '../utils/color';
import FastImage from 'react-native-fast-image';
import LogicCard from '../logicApp/LogicCard';
import font from '../utils/font';
import _ from 'lodash';
import TabBottom from './TabBottom';
export default class CardItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {item, index,tabName} = this.props;
      const {user = {}} = item;
      const urlImage = _.get(item.user,'picture',undefined);
    return (
        <View
          key={index}
          style={styles.slideInnerContainer}
          >
        <View  style={styles.viewInnerHeader}/>

        <View  style={styles.viewInnerAvatar}>
            <FastImage
                    style={styles.imgAvatar}
                    resizeMode={FastImage.resizeMode.cover}
                    source={
                      urlImage ? {uri:urlImage}
                      : require('../assets/Icons/user/accnt_avatar_defaut.png')
                    }
                    />
        </View>
        <View  style={styles.viewInnerContent}>
            <Text  numberOfLines={1} style={styles.labelAddress}>{LogicCard._getLabel(tabName)} </Text>
            <Text  numberOfLines={1} style={styles.textAddress}>{LogicCard._getValueLabel(tabName,user)} </Text>
            <TabBottom />
        </View>
      </View>
    )
  }
}
const MARGIN_HORIZONTAL = 10;
const HEIGHT_HEADER = 120;
const SIZE_AVATAR = 170;
const HEIGHT_ITEM_HEADER = HEIGHT_HEADER + 30;
const HEIGHT_CAROUSEL = SCREEN.height/2 + ( Platform.OS ==='ios' ? 0 : 50 ) ;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slideInnerContainer:{
    height:HEIGHT_CAROUSEL,
    backgroundColor: color.white,
    borderColor: color.border,
    borderWidth: 1,
    borderRadius:5
},
viewInnerHeader:{
    height:HEIGHT_ITEM_HEADER,
    borderBottomColor: color.border,
    borderBottomWidth: 1,
    backgroundColor:color.detail_transaction
  },
 viewInnerAvatar:{
    height:SIZE_AVATAR,
    width:SIZE_AVATAR,
    borderRadius: SIZE_AVATAR/2,
    position:'absolute',
    top:25,
    left:SCREEN.width/2 - SIZE_AVATAR/2 - MARGIN_HORIZONTAL ,
    backgroundColor:color.white,
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 0.5,
    borderColor: color.border,

  },
  imgAvatar:{
    height:SIZE_AVATAR - 10,
    width:SIZE_AVATAR - 10,
    borderRadius: (SIZE_AVATAR - 10 )/2,
    borderWidth: 0.5,
    borderColor: color.border,
  },
  viewInnerContent:{
    alignItems: 'center',
    marginTop:SIZE_AVATAR/2 - 20,
  },
  labelAddress:{
      fontSize: 18,
      fontFamily:font.medium,
      textAlign:'center',
      color:color.grey,
  },
  textAddress:{
    fontSize: 24,
    fontFamily:font.bold,
    marginTop: 5,
  },

})

