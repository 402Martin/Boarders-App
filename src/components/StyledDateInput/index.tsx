import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { StyledTextInput } from '../StyledTextInput';
import { styles } from './styles';

type Props = {
  style?: object;
};
const StyledDateInput: React.FC<Props> = (props) => {
  const { style } = props;
  return (
    <View style={{ ...styles.view, ...(style || {}) }}>
      <StyledTextInput placeholder="DD" label="day"></StyledTextInput>
      <StyledTextInput placeholder="MM" label="month"></StyledTextInput>
      <StyledTextInput placeholder="YY" label="year"></StyledTextInput>
    </View>
  );
};

export default index;
