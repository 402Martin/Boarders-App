/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { StyledView } from 'src/components/StyledView';
import Register from 'src/scenes/register';

const App = () => {
  const isDarkMode = true;

  return (
    <StyledView style={styles.sceneContainer}>
      <Register />
    </StyledView>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    minWidth: '100%',
    minHeight: '100%',
  },
});
export default App;
