/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import OneSignal from 'react-native-onesignal';

// OneSignal Initialization
OneSignal.setAppId('2e8b341a-757c-4497-94c7-a03b7a8429af');

// promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
OneSignal.promptForPushNotificationsWithUserResponse((response) => {});

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler((notificationReceivedEvent) => {
  let notification = notificationReceivedEvent.getNotification();
  const data = notification.additionalData;
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler((notification) => {});

AppRegistry.registerComponent(appName, () => App);
