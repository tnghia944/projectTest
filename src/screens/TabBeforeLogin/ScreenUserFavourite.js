
import React, { PureComponent } from 'react'
import {Text,TouchableOpacity,Platform,ActivityIndicator,
    View,StyleSheet} from 'react-native'
import Carousel from 'react-native-snap-carousel';
import color from '../../utils/color';
import font from '../../utils/font';
import { SCREEN, HEIGHT_STATUS_BAR } from '../../utils/deviceInfo';
import {connect} from 'react-redux'
import _ from 'lodash';
import AppConfig from '../../AppConfig';
import AppNavigate from '../../AppNavigate'
import CardItem from '../../components/CardItem';
import StoreUser from '../../storage/StoreUser';

class ScreenUserFavourite extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            users: [],
            loading:true,
            tabName:AppConfig.ADDRESS
        }
        this._renderItem = this._renderItem.bind(this);
    }
    componentDidMount(){
        this._hanleGetListUser();
    }
    componentWillReceiveProps(nextProps){
      if(this.props.tabName !== nextProps.tabName ){
          this.setState({ tabName: nextProps.tabName },() => { this.forceUpdate()})
      }
    }
    _hanleGetListUser = async () => {
      try{
        this.setState({loading:true})
        const data = await StoreUser.getUsers() || [];
          if( !_.isNil(data) && !_.isNil(data.users) && _.isArray(data.users)  ){
            this.setState({ users: data.users })
          }else{
            this.setState({ users: [] })
          }
          this.setState({loading:false})
      }catch(e){
      }
      }
    _renderItem ({item, index}) {
        const {tabName} = this.state;
        return  <CardItem tabName={tabName} item={item} index={index} />
    }
    _handleBack = () => {
      AppNavigate.back(this.props.navigation)
    }
    render(){
      const {loading = true} = this.state;
        return(
            <View style={styles.viewContain}>
                <View style={styles.viewHeader} />
                <View style={styles.viewContent} >
                    {
                      loading ?
                      <View style={styles.viewLoading}>
                          <ActivityIndicator size="small" color={color.active} />
                      </View>
                      :
                      <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.users}
                        renderItem={this._renderItem}
                        extraData={this.state}
                        sliderWidth={SCREEN.width - 30}
                        itemWidth={SCREEN.width}
                    />
                    }
                    
                </View>
                <TouchableOpacity  onPress={this._handleBack} style={styles.touchFavourite}>
                    <Text style={styles.labelFavourite}>Back </Text>
                </TouchableOpacity>
              
            </View>
        )
    }
}
const mapStateToProps = state => {
  const TabBottomReducer = state.TabBottomReducer || {};
  return {
     tabName: TabBottomReducer.tabName,
  };
};
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps,mapDispatchToProps)(ScreenUserFavourite)

const HEIGHT_HEADER = 120;
const SIZE_AVATAR = 170;
const MARGIN_HORIZONTAL = 10;
const HEIGHT_CAROUSEL = SCREEN.height/2 + ( Platform.OS ==='ios' ? 0 : 50 ) ;
const HEIGHT_ITEM_HEADER = HEIGHT_HEADER + 30;

const styles = StyleSheet.create({
    viewContain: {
    flex:1, 
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:color.detail_transaction
  },
  slideInnerContainer:{
      height:HEIGHT_CAROUSEL,
      backgroundColor: color.white,
      borderColor: color.border,
      borderWidth: 1,
      borderRadius:5
  },

  viewContent:{
    marginTop: HEIGHT_STATUS_BAR + 20
  },
  viewHeader:{
      height:HEIGHT_HEADER,
      backgroundColor:color.black,
      position:'absolute',
      top:0,
      left:0,
      right: 0,
  },
  viewInnerHeader:{
    height:HEIGHT_ITEM_HEADER,
    borderBottomColor: color.border,
    borderBottomWidth: 1,
    backgroundColor:color.detail_transaction
  },
  viewLoading:{
    backgroundColor:color.background_transaction,
    height:HEIGHT_CAROUSEL,
    borderColor: color.border,
    borderWidth: 1,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    width:SCREEN.width - 30

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
  labelFavourite:{
    fontSize: 18,
    fontFamily:font.bold,
    fontWeight:'bold',
    textAlign:'center',
    color:color.white,
  },
  touchFavourite:{
    minHeight:40,
    minWidth:40,
    paddingHorizontal:5,
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    bottom:40,
    left:20,
    right:20,
    backgroundColor:color.mycolor,
    borderRadius:8
  },

})
