import { StyleSheet } from 'react-native';
import { Palette } from 'src/styles/Palette';

export const styles = StyleSheet.create({
  alternate: {
    backgroundColor: Palette.WHITE,
    borderWidth: 2,
    color: Palette.PRIMARY_FIRST,
  },
  textStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 'auto',
    content: 'fill',
    marginTop: '3%',
    marginBottom: '3%',
    textAlign: 'center',
  },
});
