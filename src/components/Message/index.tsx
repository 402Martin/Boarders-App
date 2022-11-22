import React from 'react';
import { StyleSheet } from 'react-native';
import { colorTranslucent, Palette } from 'src/styles/Palette';
import { PaletteScale } from 'src/styles/types';
import { StyledText } from '../StyledText';
import { StyledView } from '../StyledView';
import { styles } from './styles';

type Props = {
  message: string;
  color?: PaletteScale;
  backgroundColor?: PaletteScale;
};

const Message: React.FC<Props> = (props) => {
  const { message, color, backgroundColor } = props;
  const themedColor = color || PaletteScale.PRIMARY_FIRST;
  const transformedStyles = StyleSheet.create({
    container: {
      ...styles.container,
      borderWidth: 2,
      borderColor: Palette[themedColor],
    },
  });

  return (
    <StyledView style={transformedStyles.container}>
      <StyledText
        color={themedColor}
        style={{
          ...styles.text,
          backgroundColor: backgroundColor
            ? colorTranslucent(backgroundColor, 0.5)
            : colorTranslucent(themedColor, 0.5),
        }}
      >
        {message}
      </StyledText>
    </StyledView>
  );
};

export default Message;
