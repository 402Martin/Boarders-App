import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Theme } from 'src/styles/Theme';

export const styles = StyleSheet.create({
  view: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  date: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start',
    marginLeft: 5,
  },
  input: {
    width: '99%',
    ...Theme.typography.BODY_REGULAR,
  },
  time: {
    width: '48%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 5,
  },
  formChildError: {
    borderColor: Theme.colors.SECONDARY_ACCENT_ERROR_RED50,
    color: Theme.colors.SECONDARY_ACCENT_ERROR_RED50,
  },
});
