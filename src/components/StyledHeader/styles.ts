import { StyleSheet } from 'react-native';
import { getHeaderPaddingTop } from 'src/common/devicesHelpers';
import { Colors } from 'src/styles/Palette';

export const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: getHeaderPaddingTop(),
    minHeight: 99,
    backgroundColor: Colors.PRIMARY_FOURTH,
    color: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
