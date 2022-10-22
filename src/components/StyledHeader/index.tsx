import React from 'react';

import { StyledView } from '../StyledView';
import { styles } from './styles';
import { LayoutProps } from './types';

export const StyledHeader: React.FC<LayoutProps> = ({ component, style }) => {
  return <StyledView style={[styles.headerContainer, style]}>{component}</StyledView>;
};
