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
