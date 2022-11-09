import React from 'react';
import List from './List';
import { SceneContainer } from 'src/components/SceneContainer';
import { styles } from './styles';
import Filters from './Filters';

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Search = () => {
  return (
    <SceneContainer style={styles.container}>
      <Filters />
      <List data={dummy} />
    </SceneContainer>
  );
};

export default Search;
