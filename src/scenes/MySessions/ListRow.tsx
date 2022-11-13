import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import StyledTouchableAlternate from 'src/components/StyledTouchableAlternate';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { GameSession } from 'src/types/session.types';
import { styles } from './styles';

type Props = {
  data: GameSession;
  style?: object;
};

const ListRow: React.FC<Props> = (props) => {
  const { data, style } = props;
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
        <Text style={styles.rowHeaderAdditionalInfoText}>5/6</Text>
        <Text style={styles.rowHeaderAdditionalInfoText}>{data.date.toLocaleString()}</Text>
      </StyledContainer>
    </StyledContainer>
  );
};

export default ListRow;
