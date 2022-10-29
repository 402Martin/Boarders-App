import React from 'react';
import { SceneContainer } from 'src/components/SceneContainer';
import { styles } from '../styles';
import PendingList from './PendingList';

const PendingRequests = () => {
  return (
    <SceneContainer style={styles.container}>
      <PendingList data={[1, 2, 3, 4]} />
    </SceneContainer>
  );
};

export default PendingRequests;
