import React from 'react';
import { Colors, colorTranslucent } from 'src/styles/Palette';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { StyledText } from '../StyledText';
import { StyledTouchable } from '../StyledTouchable';
import { StyledView } from '../StyledView';
import { styles } from './styles';
import { LayoutProps } from './types';

export const Button: React.FC<LayoutProps> = (props) => {
  const {
    title,
    backgroundColor = PaletteScale.PRIMARY_FOURTH,
    textColor,
    onPress,
    disabled = false,
    style = {},
    containerStyle = {},
  } = props;

  return (
    <StyledView style={[styles.rowAligment, containerStyle]} color={PaletteScale.TRANSPARENT}>
      <StyledTouchable
        {...props}
        style={[styles.buttonContainer, styles.shadowProp, style]}
        color={backgroundColor}
        onPress={onPress}
        disabled={disabled}
        underlayColor={colorTranslucent(backgroundColor!, 0.5)}
      >
        <StyledText
          typography={TypographyScale.PARAGRAPH_BOLD2}
          color={textColor ? textColor : PaletteScale.WHITE}
          style={styles.textAlign}
        >
          {title}
        </StyledText>
      </StyledTouchable>
    </StyledView>
  );
};
