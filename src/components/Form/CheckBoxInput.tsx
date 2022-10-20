import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Theme } from 'src/styles/Theme';
import { PaletteScale, TypographyScale } from 'src/styles/types';

import { StyledText } from '../StyledText';
import { StyledView } from '../StyledView';
import { styles } from './styles';
import { CheckBoxInputProps } from './types';

export const CheckBoxInput: React.FC<CheckBoxInputProps> = ({ onPress, selected, text, isMultiple }) => (
  <StyledView style={styles.item}>
    <StyledView style={styles.checkBoxTextMaxWidth}>
      <StyledText
        typography={selected ? TypographyScale.PARAGRAPH_BOLD2 : TypographyScale.PARAGRAPH_REGULAR2}
        color={PaletteScale.TEXT}
      >
        {text}
      </StyledText>
    </StyledView>

    <TouchableOpacity
      onPress={onPress}
      style={isMultiple ? styles.multipleCheckBoxContainer : styles.singleCheckBoxContainer}
    >
      <StyledView
        style={[
          isMultiple ? styles.multipleCheckBox : styles.singleCheckBox,
          {
            backgroundColor: selected ? Theme.colors.SECONDARY_THIRD : Theme.colors.TRANSPARENT,
          },
        ]}
      />
    </TouchableOpacity>
  </StyledView>
);
