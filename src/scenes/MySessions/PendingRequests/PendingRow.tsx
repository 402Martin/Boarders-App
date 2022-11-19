import { request } from 'https';
import React, { useState } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import { StyledTouchable } from 'src/components/StyledTouchable';
import StyledTouchableAlternate from 'src/components/StyledTouchableAlternate';
import { requestService } from 'src/services/request.service';
import { useAppSelector } from 'src/store';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { RequestOut, RequestStatus } from 'src/types/request.model.types';
import { styles as baseStyles } from '../styles';
import { styles } from './styles';

type Props = {
  data: RequestOut;
  style?: object;
};

const PendingRow: React.FC<Props> = (props) => {
  const user = useAppSelector((state) => state.user);
  const { data, style } = props;
  const [status, setStatus] = useState<RequestStatus>(data?.status || RequestStatus.PENDING);
  const handleUpdate = async (status: RequestStatus) => {
    const res = await requestService.update({ ...data, userId: user.id, status });
    if (!res.data || !res.data.status) return;
    setStatus(res.data.status);
  };
  return (
    <StyledContainer style={{ ...(props.style || {}) }}>
      <StyledContainer style={{ ...baseStyles.row, ...styles.row }}>
        <StyledContainer style={{ ...styles.imgContainer, ...(style || {}) }} />
        <StyledContainer style={styles.requestInfo}>
          <StyledText color={PaletteScale.BLACK} typography={TypographyScale.HEADING_BOLD2}>
            {data.user.username}
          </StyledText>
          <Text style={styles.info}>{data.user.email} </Text>
        </StyledContainer>
      </StyledContainer>
      <StyledContainer style={styles.buttonContainer}>
        {status === RequestStatus.PENDING && (
          <>
            <StyledTouchable
              style={{ ...styles.button, ...styles.succesButton }}
              onPress={() => {
                handleUpdate(RequestStatus.ACCEPTED);
              }}
            >
              <StyledText color={PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN70}>ACEPTAR</StyledText>
            </StyledTouchable>
            <StyledTouchable
              style={{ ...styles.button, ...styles.rejectButton }}
              onPress={() => {
                handleUpdate(RequestStatus.REJECTED);
              }}
            >
              <StyledText color={PaletteScale.SECONDARY_ACCENT_ERROR_RED70}>RECHAZAR</StyledText>
            </StyledTouchable>
          </>
        )}
        {status === RequestStatus.ACCEPTED && (
          <StyledText style={styles.text} color={PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN70}>
            Aceptado
          </StyledText>
        )}
        {status === RequestStatus.REJECTED && (
          <StyledText style={styles.text} color={PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN70}>
            Rechazado
          </StyledText>
        )}
      </StyledContainer>
    </StyledContainer>
  );
};

export default PendingRow;
