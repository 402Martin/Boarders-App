import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    display: 'flex',
    width: '90%',
    height: '10%',
    left: '5%',
    bottom: '10%',
    zIndex: 1,
    backgroundColor: 'transperent',
  },

  message: {
    width: 100,
    height: 100,
    zIndex: 1,
  },
});
