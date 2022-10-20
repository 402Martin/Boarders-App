import { StyleSheet } from 'react-native';
import { getFontScaleSync } from 'react-native-device-info';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { isDebug } from 'src/common/build';
import { Theme } from 'src/styles/Theme';

export const styles = StyleSheet.create({
  textAlign: {
    textAlign: 'center',
  },
  basicButton: {
    height: 44,
  },
  card: {
    borderRadius: 10,
    width: widthPercentageToDP(80),
    minHeight: isDebug() ? 172 : getFontScaleSync() > 1 ? 250 : 172,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: widthPercentageToDP(80),
    backgroundColor: Theme.colors.WHITE,
  },
  messageContainer: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  messageText: {
    textAlign: 'center',
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noPadding: {
    padding: 0,
  },
  subContainer: {
    alignItems: 'center',
    flex: 3,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
  },
  text: {
    textAlign: 'center',
  },
  titleAlignment: { textAlign: 'center' },
  button: { width: widthPercentageToDP(30), marginHorizontal: 4 },
  cancelButton: {
    borderColor: Theme.colors.PRIMARY_FOURTH,
    borderWidth: 1,
    backgroundColor: Theme.colors.WHITE,
  },
});
