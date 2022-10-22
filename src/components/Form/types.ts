import { StyleProp, ViewStyle } from 'react-native';

export interface CheckBoxGroupProps {
  data: any[];
  updater: (identifier: any) => () => void;
  selectedComparer: any;
  isMultiple: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface CheckBoxInputProps {
  onPress: () => void;
  selected: boolean;
  text: string;
  isMultiple: boolean;
}

export interface ISchema {
  [key: string]: ISchemaAttribute;
}

export interface ISchemaAttribute {
  value: string | number;
  isValid: boolean;
  isNotValidmessage?: string;
  hasFocus: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validation: any;
  type?: 'number' | 'date' | 'text' | 'select' | 'amount';
  options?: { [key: string]: string };
  placeholder?: string;
  label?: string;
  transformToNumber?: boolean;
  notify?: boolean;
}
