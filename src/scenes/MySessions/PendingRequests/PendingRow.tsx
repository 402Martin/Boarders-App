import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import { StyledTouchable } from 'src/components/StyledTouchable';
import StyledTouchableAlternate from 'src/components/StyledTouchableAlternate';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { styles as baseStyles } from '../styles';
import { styles } from './styles';

type Props = {
  data: any;
  style?: object;
};

const PendingRow: React.FC<Props> = (props) => {
  const { data, style } = props;
  return (
    <StyledContainer style={{ ...(props.style || {}) }}>
      <StyledContainer style={{ ...baseStyles.row, ...styles.row }}>
        <StyledContainer style={{ ...styles.imgContainer, ...(style || {}) }} />
        <StyledContainer style={styles.requestInfo}>
          <StyledText color={PaletteScale.BLACK} typography={TypographyScale.HEADING_BOLD2}>
            Martin Perez
          </StyledText>
          <Text style={styles.info}>Hola me llamo Martin, tengo 24 anos y me gusta el Monopoly</Text>
        </StyledContainer>
      </StyledContainer>
      <StyledContainer style={styles.buttonContainer}>
        <StyledTouchable style={{ ...styles.button, ...styles.succesButton }}>
          <StyledText color={PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN70}>ACEPTAR</StyledText>
        </StyledTouchable>
        <StyledTouchable style={{ ...styles.button, ...styles.rejectButton }}>
          <StyledText color={PaletteScale.SECONDARY_ACCENT_ERROR_RED70}>RECHAZAR</StyledText>
        </StyledTouchable>
      </StyledContainer>
    </StyledContainer>
  );
};

export default PendingRow;
