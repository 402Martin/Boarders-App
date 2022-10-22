import React from 'react';
import { StyleSheet, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TextInputProps as TextInputPaperProps } from 'react-native-paper';
import { useInputColor } from 'src/hooks/useInputColor';
import { Colors } from 'src/styles/Palette';
import { Theme } from 'src/styles/Theme';
import { PaletteScale } from 'src/styles/types';

import { StyledView } from '../StyledView';

interface LayoutProps extends TextInputProps {
  label: TextInputPaperProps['label'];
  disabled?: TextInputPaperProps['disabled'];
  validValue?: boolean;
}

export const StyledTextInput: React.FunctionComponent<LayoutProps> = (props) => {
  const { validValue = true, style, disabled } = props;
  const { inputTheme } = useInputColor();
  const renderError = (isError: boolean) =>
    isError ? <></> : <StyledView color={PaletteScale.TRANSPARENT} />;

  const mergedStyle = style
    ? style instanceof Array
      ? [inputTheme.inputStyle].concat(style)
      : StyleSheet.flatten([inputTheme.inputStyle, style])
    : inputTheme.inputStyle;

  return (
    <TextInput
      accessible={true}
      autoCapitalize={'none'}
      mode={'outlined'}
      theme={inputTheme.theme}
      error={!validValue}
      right={renderError(!validValue)}
      {...props}
      outlineColor={Colors.PRIMARY_FOURTH}
      underlineColor={Colors.PRIMARY_FOURTH}
      placeholderTextColor={Colors.PRIMARY_FOURTH}
      selectionColor={validValue ? inputTheme.focusedColor : inputTheme.errorColor}
      style={[
        {
          marginBottom: 8,
        },
        mergedStyle,
        !disabled && {
          backgroundColor: Theme.colors.WHITE,
        },
      ]}
    />
  );
};
