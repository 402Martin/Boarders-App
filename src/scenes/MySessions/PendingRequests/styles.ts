import { StyleSheet } from 'react-native';
import { Palette } from 'src/styles/Palette';
import { Typography } from 'src/styles/Typography';
import { styles as baseStyles } from '../styles';

export const styles = StyleSheet.create({
  titleContainer: {
    ...baseStyles.listTextContainer,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...baseStyles.listText,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    height: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  titleText: {
    ...Typography.BUTTON,
  },

  child: {
    marginBottom: 10,
    ...Typography.PARAGRAPH_REGULAR2,
    width: '100%',
  },
  childText: {
    ...Typography.BUTTON,
  },
  alginRight: {
    textAlign: 'right',
  },

  imgContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  requestInfo: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 100,
  },
  row: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '45%',
    textTransform: 'toUpperCase',
  },
  succesButton: {
    borderColor: Palette.SECONDARY_ACCENT_SUCCESS_GREEN70,
  },
  rejectButton: {
    borderColor: Palette.SECONDARY_ACCENT_ERROR_RED70,
  },

  info: {
    width: 200,
  },

  text: {
    ...Typography.PARAGRAPH_REGULAR2,
    width: '100%',
    textAlign: 'center',
  },
});
