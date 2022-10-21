import React from 'react';
import { TouchableHighlightProps } from 'react-native';
import { PaletteScale } from 'src/styles/types';
import { StyledText } from '../StyledText';
import { StyledTouchable } from '../StyledTouchable';
import { styles } from './style';

type CustomButtonProps = {
  children?: React.ReactNode;
  dark?: boolean;
  style?: any;
} & TouchableHighlightProps;

const StyledTouchableAlternate: React.FC<CustomButtonProps> = (props) => {
  const { children } = props;
  return (
    <StyledTouchable
      dark={props.dark}
      borderColor={PaletteScale.PRIMARY_FIRST}
      style={{ ...styles.alternate, ...props.style }}
    >
      <StyledText color={PaletteScale.PRIMARY_FIRST} style={styles.textStyles}>
        {children}
      </StyledText>
    </StyledTouchable>
  );
};

export default StyledTouchableAlternate;
