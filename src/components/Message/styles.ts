import { StyleSheet } from 'react-native';
import { Palette } from 'src/styles/Palette';
import { Typography } from 'src/styles/Typography';

export const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    width: '100%',
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
    ...Typography.HEADING_SEMI_BOLD3,
  },
});
