import { useEffect, useState } from 'react';
import { sessionService } from 'src/services';
import { GameSession } from 'src/types/session.types';
import CreateSessionScene from '../CreateSession';

type Props = {
  route: {
    params: {
      id: string;
    };
  };
};
const UpdateSession = (props: Props) => {
  const id = props?.route?.params?.id;
  const [gameSession, setGameSession] = useState<GameSession | undefined>(undefined);
  const getData = async () => {
    const { data } = await sessionService.get(id);
    setGameSession(data);
  };

  useEffect(() => {
    getData();
  }, [id, props]);
  return <CreateSessionScene updateGameSession={gameSession} />;
};

export default UpdateSession;
