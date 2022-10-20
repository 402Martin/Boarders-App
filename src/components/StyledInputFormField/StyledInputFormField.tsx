import React from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TextInputProps as TextInputPaperProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import { Colors } from 'src/styles/Palette';

interface LayoutProps extends TextInputProps {
  label: TextInputPaperProps['label'];
  disabled?: TextInputPaperProps['disabled'];
  validValue?: boolean;
  onChangeText?: any;
  keyboardType?: KeyboardTypeOptions;
}

export const StyledInputFormField: React.FunctionComponent<LayoutProps> = (props) => {
  const { label, returnKeyType, value, onChangeText, keyboardType } = props;

  return (
    <TextInput
      mode={'outlined'}
      theme={{
        colors: {
          primary: Colors.PRIMARY_FOURTH,
          background: Colors.THIRD_SURFACE_GREYSCALE10,
          placeholder: Colors.TEXT,
        },
      }}
      outlineColor={Colors.PRIMARY_FOURTH}
      selectionColor={Colors.PRIMARY_FOURTH}
      underlineColor={Colors.PRIMARY_FOURTH}
      placeholderTextColor={Colors.PRIMARY_FOURTH}
      label={label}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      onChangeText={onChangeText}
      value={value}
    />
  );
};
