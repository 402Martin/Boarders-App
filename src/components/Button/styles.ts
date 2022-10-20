import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: 'transparent',
    borderRadius: 28,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  rowAligment: {
    flexDirection: 'row',
    height: 40,
  },
  textAlign: {
    textAlign: 'center',
  },
});
