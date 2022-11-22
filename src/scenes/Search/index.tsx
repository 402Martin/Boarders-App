import React, { useEffect, useState } from 'react';
import List from './List';
import { SceneContainer } from 'src/components/SceneContainer';
import { styles } from './styles';
import Filters from './Filters';
import { sessionService } from 'src/services';
import { GameSession } from 'src/types/session.types';
import { FilterParam, Filters as FiltersType } from 'src/types/main.types';
import { useIsFocused } from '@react-navigation/native';

const Search = () => {
  const isFocused = useIsFocused();
  const [sessions, setSessions] = useState<GameSession[]>([]);

  const fetchData = async (filters?: FilterParam) => {
    const res = await sessionService.getAll(filters);
    setSessions(res.data);
  };

  useEffect(() => {
    if (!isFocused) return;
    fetchData();
  }, [isFocused]);
  return (
    <SceneContainer style={styles.container}>
      <Filters setData={fetchData} />
      <List data={sessions} setData={fetchData} />
    </SceneContainer>
  );
};

export default Search;
