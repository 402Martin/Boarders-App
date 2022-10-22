import { concat } from 'lodash';
import React, { Fragment, useContext } from 'react';
import { StyleProp, TouchableHighlight, TouchableHighlightProps, ViewStyle } from 'react-native';
import {} from 'react-native-gesture-handler';
import { colorTranslucent } from 'src/styles/Palette';
import { ThemeContext } from 'src/styles/Theme';
import { PaletteScale } from 'src/styles/types';

type CustomButtonProps = {
  color?: PaletteScale;
  children?: React.ReactNode;
  borderColor?: PaletteScale;
  dark?: boolean;
} & TouchableHighlightProps;

export const StyledTouchable: React.FC<CustomButtonProps> = (props) => {
  const { Theme: ActualTheme } = useContext(ThemeContext);
  const { color, style, children, borderColor, disabled, dark, underlayColor } = props;

  const themedColor = color ? ActualTheme.colors[color] : ActualTheme.colors.PRIMARY_FIRST;
  const themedBorderColor = borderColor ? ActualTheme.colors[borderColor] : ActualTheme.colors.PRIMARY_FOURTH;

  const contextStyle: StyleProp<ViewStyle> = {
    backgroundColor: !disabled
      ? themedColor
      : colorTranslucent(color ? color : PaletteScale.PRIMARY_FOURTH, 0.5),
    borderColor: themedBorderColor,
    minHeight: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const mergedStyle: StyleProp<ViewStyle> = style
    ? style instanceof Array
      ? concat([contextStyle], style)
      : { ...contextStyle, ...(style as any) }
    : contextStyle;

  return (
    <TouchableHighlight
      accessible={true}
      activeOpacity={0.9}
      underlayColor={
        !!underlayColor
          ? underlayColor
          : dark
          ? ActualTheme.colors.SECONDARY_ACCENT_INFO_BLUE10
          : ActualTheme.colors.PRIMARY_FOURTH
      }
      {...props}
      style={mergedStyle}
    >
      <Fragment>{children}</Fragment>
    </TouchableHighlight>
  );
};
