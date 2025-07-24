import {Dimensions, Platform} from 'react-native';
import {scale, verticalScale, moderateScale, moderateVerticalScale} from './metricsHelper';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../config/ResponsiveScreen';
import {
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');
// const width = 411.43
// const height = 832
const IS_IOS = Platform.OS === 'ios';
const statusBarHeight = IS_IOS ? getStatusBarHeight() : 0;
const headerHeight = scale(64);
const globalPadding = hp('1%');

const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const Metrics = {
  screenHeight,
  screenWidth,
  hp,
  wp,
  ScaleValue: val => {
    return scale(val);
  },
  VerticalScaleValue: val => {
    return verticalScale(val);
  },
  ModerateScale: (val, factor) => {
    return moderateScale(val, factor);
  },
  ModerateVerticalScale: (val, factor) => {
    return moderateVerticalScale(val, factor);
  },

  IS_IOS,
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  navBarHeight: IS_IOS ? 64 : 54,
  statusBarHeight: statusBarHeight,
  headerHeight: headerHeight,
  backHeaderHeight: scale(92),
  backCoachHeaderHeight: scale(70),
  globalPadding: globalPadding,
  fullHeaderHeight:
    headerHeight + statusBarHeight + globalPadding + globalPadding,
  bottomPadding: 20,
  buttonHeight: hp('4.92%'),
  marginHorizontal: 10,
  marginVertical: 10,
  marginTop: IS_IOS ? verticalScale(20) : 0,
};

export default Metrics;
