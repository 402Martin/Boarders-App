import { TouchableOpacityProps, ViewStyle } from 'react-native';
import { PaletteScale } from 'src/styles/types';

interface ExtraProps {
  title: string;
  backgroundColor?: PaletteScale;
  textColor?: PaletteScale;
  dark?: boolean;
  disabled?: boolean;
  containerStyle?: ViewStyle;
}

export type LayoutProps = TouchableOpacityProps & ExtraProps;
