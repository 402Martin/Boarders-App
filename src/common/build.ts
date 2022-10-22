import DeviceInfo from 'react-native-device-info';

export const developmentBundleId = 'com.boarders.debug';
export const qaBundleId = 'com.boarders.qa';
export const productionBundleId = 'com.boarders';

export const isDebug = () => DeviceInfo.getBundleId() === developmentBundleId;
