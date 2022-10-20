import { Dimensions, Platform, ScaledSize, StatusBar } from 'react-native';
import { hasNotch } from 'react-native-device-info';

const STATUSBAR_DEFAULT_HEIGHT = 20;
const STATUSBAR_X_HEIGHT = 44;
const STATUSBAR_IP12_HEIGHT = 47;
const STATUSBAR_IP12MAX_HEIGHT = 47;

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const IP12_WIDTH = 390;
const IP12_HEIGHT = 844;

const IP12MAX_WIDTH = 428;
const IP12MAX_HEIGHT = 926;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

export const isIphoneX = () => {
  const dimensions = Dimensions.get('window');

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (isIPhoneXSize(dimensions) || isIPhoneXrOrXsSize(dimensions))
  );
};

export const isIPhoneXSize = (dimensions: ScaledSize) =>
  dimensions.height === 812 || dimensions.width === 812;

export const isIPhoneXrOrXsSize = (dimensions: ScaledSize) =>
  dimensions.height === 896 || dimensions.width === 896;

export const getIphoneStatusBarHeight = () => {
  let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;

  if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV) {
    if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
      statusBarHeight = STATUSBAR_X_HEIGHT;
    } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
      statusBarHeight = STATUSBAR_X_HEIGHT;
    } else if (W_WIDTH === IP12_WIDTH && W_HEIGHT === IP12_HEIGHT) {
      statusBarHeight = STATUSBAR_IP12_HEIGHT;
    } else if (W_WIDTH === IP12MAX_WIDTH && W_HEIGHT === IP12MAX_HEIGHT) {
      statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
    }
  }
  return statusBarHeight;
};
export const getHeaderPaddingTop = () =>
  hasNotch() ? (Platform.OS === 'android' ? StatusBar.currentHeight : getIphoneStatusBarHeight()) : 0;
