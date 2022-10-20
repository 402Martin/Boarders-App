import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface LayoutProps {
  edges?: ReadonlyArray<Edge>;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export const SceneContainer: React.FunctionComponent<LayoutProps> = ({
  edges = ['left', 'right'],
  style,
  children,
}) => (
  <SafeAreaView style={[styles.container, style]} edges={edges}>
    {children}
  </SafeAreaView>
);
