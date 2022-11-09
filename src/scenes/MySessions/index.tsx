import React from 'react';
import List from './List';
import { SceneContainer } from 'src/components/SceneContainer';
import { styles } from './styles';
import { StyledTouchable } from 'src/components/StyledTouchable';
import { StyledText } from 'src/components/StyledText';

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Search = () => {
  return (
    <SceneContainer style={styles.container}>
      <List data={dummy} />
      <StyledTouchable style={styles.button}>
        <StyledText>{'Crear una partida'}</StyledText>
      </StyledTouchable>
    </SceneContainer>
  );
};

export default Search;
