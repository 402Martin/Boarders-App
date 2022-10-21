import * as React from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';

import { styles } from './styles';

interface LayoutProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export const SceneContainer: React.FunctionComponent<LayoutProps> = ({ style, children }) => (
  <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
);
