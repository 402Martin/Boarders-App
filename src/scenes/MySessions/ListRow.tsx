import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useState } from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import StyledTouchableAlternate from 'src/components/StyledTouchableAlternate';
import { routes } from 'src/navigation/routes';
import { sessionService } from 'src/services';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { RequestStatus } from 'src/types/request.model.types';
import { GameSession } from 'src/types/session.types';
import { styles } from './styles';

type Props = {
  data: GameSession;
  style?: object;
};

const ListRow: React.FC<Props> = (props) => {
  const { data, style } = props;
  const [message, setMessage] = useState<{ value: string; color: PaletteScale } | null>();
  const { navigate } = useNavigation();

  const handleViewRequests = () => {
    navigate(routes.PENDINGREQUEST, { id: data.id });
  };

  const handleUpdateSession = () => {
    navigate(routes.UPDATE_SESSION, { id: data.id });
  };
  const handleSuspend = async () => {
    const res = await sessionService.delete(data.id);

    console.log(res);
    if (!res.data) return;

    setMessage({
      value: 'Session Suspendida',
      color: PaletteScale.SECONDARY_ACCENT_ERROR_RED50,
    });
  };
  return (
    <StyledContainer style={{ ...styles.row, ...(style || {}) }}>
      <StyledContainer style={styles.rowHeader}>
        <StyledText color={PaletteScale.BLACK} typography={TypographyScale.HEADING_BOLD2}>
          {data.gameTitle}
        </StyledText>
        <StyledText
          color={PaletteScale.THIRD_SURFACE_GREYSCALE50}
          typography={TypographyScale.BODY_BOLD}
          style={styles.rowHeaderButtonText}
        >
          Jugador
        </StyledText>
      </StyledContainer>
      <StyledContainer style={styles.rowHeaderAdditionalInfo}>
        <Text style={styles.rowHeaderAdditionalInfoText}>{data.location}</Text>
        <Text style={styles.rowHeaderAdditionalInfoText}>{`${
          data.requests?.filter((r) => r.status === RequestStatus.ACCEPTED).length
        }/${data.maxQuantityPlayers}`}</Text>
        <Text style={styles.rowHeaderAdditionalInfoText}>{moment(data.date).format('DD/MM/YY')}</Text>
      </StyledContainer>

      <StyledContainer style={styles.rowInputs}>
        {!message && (
          <>
            <StyledTouchableAlternate style={styles.inputButtons} onPress={handleViewRequests}>
              Ver Solicitudes
            </StyledTouchableAlternate>
            <StyledTouchableAlternate
              style={styles.inputButtons}
              color={PaletteScale.SECONDARY_ACCENT_ERROR_RED50}
              onPress={handleSuspend}
            >
              Suspender
            </StyledTouchableAlternate>
            <StyledTouchableAlternate
              style={styles.inputButtons}
              color={PaletteScale.SECONDARY_ACCENT_INFO_BLUE50}
              onPress={handleUpdateSession}
            >
              Editar
            </StyledTouchableAlternate>
          </>
        )}
        {message && <StyledText color={message?.color}>{message.value}</StyledText>}
      </StyledContainer>
    </StyledContainer>
  );
};

export default ListRow;
