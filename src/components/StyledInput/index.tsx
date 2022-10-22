import React from 'react';
import { Image } from 'react-native';
import BackArrow from 'src/assets/icons/BackArrow.png';
import BackArrowWhite from 'src/assets/icons/BackArrowWhite.png';
import { StyledTouchable } from 'src/components/StyledTouchable';
import { useGoBack } from 'src/hooks/useGoBack';
import { Colors } from 'src/styles/Palette';
import { Theme } from 'src/styles/Theme';
import { PaletteScale } from 'src/styles/types';

import { styles } from './styles';
import { OuterProps } from './types';

export const BackButton: React.FunctionComponent<OuterProps> = ({ customOnPress, light }) => {
  const { goBack } = useGoBack();

  return (
    <StyledTouchable
      onPress={customOnPress ? customOnPress : goBack}
      style={styles.container}
      color={PaletteScale.TRANSPARENT}
      underlayColor={Theme.colors.TRANSPARENT}
      hitSlop={{
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      }}
    >
      <Image source={BackArrow} style={[styles.image, light && { tintColor: Colors.WHITE }]} />
    </StyledTouchable>
  );
};
