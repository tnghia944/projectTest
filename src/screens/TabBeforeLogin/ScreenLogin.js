import React, { PureComponent } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  View,
  StyleSheet
} from "react-native";
import color from "../../utils/color";
import font from "../../utils/font";
import { SCREEN, HEIGHT_STATUS_BAR } from "../../utils/deviceInfo";
import { connect } from "react-redux";
import { actionGetUser } from "../../redux/actions/UsersAction";
import ActionsType from "../../constants/ActionsType";
import LogicMessage from "../../logicApp/LogicMessage";
import _ from "lodash";
import AppConfig from "../../AppConfig";
import CardItem from "../../components/CardItem";
import AppNavigate from "../../AppNavigate";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";
import StoreUser from "../../storage/StoreUser";

class ScreenLogin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      index: 1,
      item: {},
      lastItem:{},
      tabName: AppConfig.ADDRESS
    };
    this._onSwipeLeft = this._onSwipeLeft.bind(this);
    this._onSwipeRight = this._onSwipeRight.bind(this);
    this._onSwipe = this._onSwipe.bind(this);

  }
  componentDidMount() {
    this._hanleGetUser();
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.item !== nextProps.item &&
      nextProps.type === ActionsType.SUCCESS_GET_USER
    ) {
      if (
        LogicMessage.isSuccess(nextProps, false) &&
        !_.isNil(nextProps.item) &&
        _.isArray(nextProps.item.results) &&
        nextProps.item.results.length > 0
      ) {
        this.setState({ item: nextProps.item.results[0] });
      } else {
        this.setState({ item: {} });
      }
    }
    if (this.props.tabName !== nextProps.tabName) {
      this.setState({ tabName: nextProps.tabName }, () => {
        this.forceUpdate();
      });
    }
  }
  _hanleGetUser = () => {
    const { getUser } = this.props;
    if (getUser) {
      getUser();
    }
  };
  _handlePressFavourite =  () => {
    AppNavigate.next(this.props.navigation, "ScreenUserFavourite");
  };
  _onSwipeLeft = async () => {
    const {item,lastItem} = this.state;
    if( !_.isEqual(lastItem,item) ) {

      let data = await StoreUser.getUsers() || [];
      let users = data.users || [];
      this.setState({
        lastItem:item
      })
      users.push(item);
      await StoreUser.setUsers(users);
      alert('Add user favourite success ')
    }else{
      alert('user already exists ')
    }
  };
  _onSwipeRight = () => {
    const { getUser } = this.props;
    if (getUser) {
      getUser();
    }
  };
  _onSwipe(gestureName) {
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    switch (gestureName) {
      case SWIPE_LEFT:
        this._onSwipeLeft();
        break;
      case SWIPE_RIGHT:
        this._onSwipeRight();
        break;
    }
  }
 
  render() {
    const { loading = true } = this.props;
    const { tabName, item, index } = this.state;
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <View style={styles.viewContain}>
        <View style={styles.viewHeader} />
        <View style={styles.viewContent}>
          {loading ? (
            <View style={styles.viewLoading}>
              <ActivityIndicator size="small" color={color.active} />
            </View>
          ) : (
            <GestureRecognizer
              onSwipe={this._onSwipe}
              config={config}
              style={styles.viewGesture}
            >
              <CardItem tabName={tabName} item={item} index={index} />
            </GestureRecognizer>
          )}
        </View>
        <TouchableOpacity
          onPress={this._handlePressFavourite}
          style={styles.touchFavourite}
        >
          <Text style={styles.labelFavourite}>My favourite</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => {
  const UsersReducer = state.UsersReducer || {};
  const GlobalReducer = state.GlobalReducer || {};
  const TabBottomReducer = state.TabBottomReducer || {};
  return {
    item: UsersReducer.item || [],
    type: UsersReducer.type,
    loading: GlobalReducer.loading,
    tabName: TabBottomReducer.tabName
  };
};
const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(actionGetUser())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenLogin);

const HEIGHT_HEADER = 120;
const SIZE_AVATAR = 170;
const MARGIN_HORIZONTAL = 10;
const HEIGHT_CAROUSEL = SCREEN.height / 2 + (Platform.OS === "ios" ? 0 : 50);
const HEIGHT_ITEM_HEADER = HEIGHT_HEADER + 30;

const styles = StyleSheet.create({
  viewContain: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: color.detail_transaction
  },
  viewGesture: {
    flex: 1,
    zIndex:99999
  },
  labelFavourite: {
    fontSize: 18,
    fontFamily: font.bold,
    fontWeight: "bold",
    textAlign: "center",
    color: color.white
  },
  touchFavourite: {
    minHeight: 40,
    minWidth: 40,
    paddingHorizontal: 5,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: color.mycolor,
    borderRadius: 8,
    zIndex:99999
  },
  slideInnerContainer: {
    height: HEIGHT_CAROUSEL,
    backgroundColor: color.white,
    borderColor: color.border,
    borderWidth: 1,
    borderRadius: 5
  },

  viewContent: {
    marginTop: HEIGHT_STATUS_BAR + 20
  },
  viewHeader: {
    height: HEIGHT_HEADER,
    backgroundColor: color.black,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  viewInnerHeader: {
    height: HEIGHT_ITEM_HEADER,
    borderBottomColor: color.border,
    borderBottomWidth: 1,
    backgroundColor: color.detail_transaction
  },
  viewLoading: {
    backgroundColor: color.background_transaction,
    height: HEIGHT_CAROUSEL,
    borderColor: color.border,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN.width - 30
  },
  viewInnerAvatar: {
    height: SIZE_AVATAR,
    width: SIZE_AVATAR,
    borderRadius: SIZE_AVATAR / 2,
    position: "absolute",
    top: 25,
    left: SCREEN.width / 2 - SIZE_AVATAR / 2 - MARGIN_HORIZONTAL,
    backgroundColor: color.white,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: color.border
  },
  imgAvatar: {
    height: SIZE_AVATAR - 10,
    width: SIZE_AVATAR - 10,
    borderRadius: (SIZE_AVATAR - 10) / 2,
    borderWidth: 0.5,
    borderColor: color.border
  },
  viewInnerContent: {
    alignItems: "center",
    marginTop: SIZE_AVATAR / 2 - 20
  },
  labelAddress: {
    fontSize: 18,
    fontFamily: font.medium,
    textAlign: "center",
    color: color.grey
  },
  textAddress: {
    fontSize: 24,
    fontFamily: font.bold,
    marginTop: 5
  }
});
