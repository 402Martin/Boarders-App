import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { Theme } from 'src/styles/Theme';
import { TypographyScale } from 'src/styles/types';
import { Typography } from 'src/styles/Typography';

export const styles = StyleSheet.create({
  item: {
    backgroundColor: Theme.colors.THIRD_SURFACE_GREYSCALE30,
    padding: 16,
    marginTop: 8,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkBoxTxt: {
    marginLeft: 20,
    maxWidth: widthPercentageToDP(60),
  },
  singleCheckBox: { height: 20, width: 20, borderRadius: 20, margin: 5 },
  singleCheckBoxContainer: {
    borderWidth: 1,
    borderColor: Theme.colors.SECONDARY_THIRD,
    borderRadius: 20,
  },
  multipleCheckBox: { height: 20, width: 20, margin: 5 },
  multipleCheckBoxContainer: {
    borderWidth: 1,
    borderColor: Theme.colors.SECONDARY_THIRD,
  },
  checkBoxGroupContainer: {
    backgroundColor: Theme.colors.TRANSPARENT,
  },
  checkBoxTextMaxWidth: {
    maxWidth: widthPercentageToDP(65),
    backgroundColor: Theme.colors.TRANSPARENT,
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  form: {
    display: 'flex',
    width: '80%',
    height: '95%',
    paddingTop: '10%',
    backgroundColor: 'transparent',
  },
  formChild: {
    marginTop: '2%',
  },
  formChildError: {
    borderColor: Theme.colors.SECONDARY_ACCENT_ERROR_RED50,
    color: Theme.colors.SECONDARY_ACCENT_ERROR_RED50,
  },

  formButton: {
    marginTop: '2%',
    textAlign: 'center',
    flexBasis: 'auto',
    content: 'fill',
  },
  formButtonText: {
    ...Typography.BUTTON,
    marginTop: '3%',
    marginBottom: '3%',
  },
  messageContainer: {
    height: '10%',
  },
});
