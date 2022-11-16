import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import StyledTouchableAlternate from 'src/components/StyledTouchableAlternate';
import { routes } from 'src/navigation/routes';
import { useAppSelector } from 'src/store';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { RequestStatus } from 'src/types/request.model.types';
import { GameSession } from 'src/types/session.types';
import { styles } from './styles';

type Props = {
  data: GameSession;
  style?: object;
};

const ListRow: React.FC<Props> = (props) => {
  const user = useAppSelector((state) => state.user);
  const { data, style } = props;
  const [userRequest, setUserRequest] = useState(
    data.requests?.find((request) => request.userId === user.id),
  );

  const { navigate } = useNavigation();

  const request = data.requests?.find((request) => request.userId === user.id);

  useEffect(() => {
    setUserRequest(data.requests?.find((request) => request.userId === user.id));
  }, [user, data]);

  useEffect(() => {
    console.log(userRequest);
  }, [request]);
  const handleViewRequests = () => {
    navigate(routes.PENDINGREQUEST, { id: data.id });
  };
  return (
    <StyledContainer style={{ ...styles.row, ...(style || {}) }}>
      <StyledContainer style={styles.rowHeader}>
        <StyledText color={PaletteScale.BLACK} typography={TypographyScale.HEADING_BOLD2}>
          {data.gameTitle}
        </StyledText>
        {user?.id !== data.userId && !userRequest && (
          <StyledTouchableAlternate style={styles.rowHeaderButton}>
            <Text style={styles.rowHeaderButtonText}>QUIERO UNIRME</Text>
          </StyledTouchableAlternate>
        )}
        {user?.id === data.userId && (
          <StyledTouchableAlternate style={styles.rowHeaderButton} onPress={handleViewRequests}>
            <Text style={styles.rowHeaderButtonText}>Ver Solicitudes</Text>
          </StyledTouchableAlternate>
        )}

        {user?.id !== data.userId && userRequest && (
          <StyledTouchableAlternate style={styles.rowHeaderButton}>
            {parseInt(userRequest.status.toString(), 10) === RequestStatus.PENDING && (
              <Text style={styles.rowHeaderButtonText}>Pendiente</Text>
            )}
            {parseInt(userRequest.status.toString(), 10) === RequestStatus.ACCEPTED && (
              <Text style={styles.rowHeaderButtonText}>Aceptado</Text>
            )}
            {parseInt(userRequest.status.toString(), 10) === RequestStatus.REJECTED && (
              <Text style={styles.rowHeaderButtonText}>Rechazado</Text>
            )}
          </StyledTouchableAlternate>
        )}
      </StyledContainer>
      <StyledContainer style={styles.rowHeaderAdditionalInfo}>
        <Text style={styles.rowHeaderAdditionalInfoText}>{data.location}</Text>
        <Text
          style={styles.rowHeaderAdditionalInfoText}
        >{`${data.minQuantityPlayers}/${data.maxQuantityPlayers}`}</Text>
        {/* <Text style={styles.rowHeaderAdditionalInfoText}>5/6</Text> */}
        {/* <Text style={styles.rowHeaderAdditionalInfoText}>12/10 14:00</Text> */}
        <Text style={styles.rowHeaderAdditionalInfoText}>{data.date.toLocaleString()}</Text>
      </StyledContainer>
    </StyledContainer>
  );
};

export default ListRow;
