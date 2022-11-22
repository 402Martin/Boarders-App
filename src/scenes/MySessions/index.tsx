import React, { useEffect, useState } from 'react';
import List from './List';
import { SceneContainer } from 'src/components/SceneContainer';
import { styles } from './styles';
import { StyledTouchable } from 'src/components/StyledTouchable';
import { StyledText } from 'src/components/StyledText';
import { Typography } from 'src/styles/Typography';
import { TypographyScale } from 'src/styles/types';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { RootStackParamList, routes } from 'src/navigation/routes';
import { strings } from './string';
import { sessionService } from 'src/services';
import { GameSession } from 'src/types/session.types';
import { useAppSelector } from 'src/store';
const Search = () => {
  const [sessions, setSessions] = useState<GameSession[]>([]);
  const user = useAppSelector((state) => state.user);
  const isFocused = useIsFocused();

  const { navigate } = useNavigation();
  const handleNewSession = () => {
    navigate(routes.CREATE_SESSION);
  };
  const fetchData = async () => {
    const filters = {
      userId: user?.id,
    };
    const res = await sessionService.getAll(filters);
    setSessions(res.data);
  };

  useEffect(() => {
    if (!isFocused) return;
    fetchData();
  }, [isFocused]);

  return (
    <SceneContainer style={styles.container}>
      <List data={sessions} />
      <StyledTouchable style={styles.button} onPress={handleNewSession}>
        <StyledText typography={TypographyScale.HEADING_BOLD2}>{strings.button}</StyledText>
      </StyledTouchable>
    </SceneContainer>
  );
};

export default Search;
