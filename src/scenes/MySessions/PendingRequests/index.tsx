import React, { useEffect, useState } from 'react';
import { SceneContainer } from 'src/components/SceneContainer';
import { sessionService } from 'src/services';
import { requestService } from 'src/services/request.service';
import { GameSession } from 'src/types/gameSession.types';
import { styles } from '../styles';
import PendingList from './PendingList';

type Props = {
  route: {
    params: {
      id: string;
    };
  };
};
const PendingRequests: React.FC<Props> = (props) => {
  const { id } = props?.route?.params;
  const [data, setData] = useState<GameSession | null>(null);
  const getData = async () => {
    const { data } = await sessionService.get(id);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, [props]);
  return <SceneContainer style={styles.container}>{data && <PendingList data={data} />}</SceneContainer>;
};

export default PendingRequests;
