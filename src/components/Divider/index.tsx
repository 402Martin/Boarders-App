import React from 'react';
import { ViewStyle } from 'react-native';
import { StyledView } from '../StyledView';

interface LayoutProps {
  style: ViewStyle;
}

export const Divider: React.FC<LayoutProps> = ({ style }) => <StyledView style={style} />;
