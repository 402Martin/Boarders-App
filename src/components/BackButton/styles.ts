import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Theme } from 'src/styles/Theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: heightPercentageToDP(3),
    paddingHorizontal: widthPercentageToDP(5),
    backgroundColor: Theme.colors.TRANSPARENT,
  },
  image: {
    height: 15,
    width: 15,
    tintColor: 'black',
  },
});
