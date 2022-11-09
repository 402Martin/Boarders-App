import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import StyledTouchableAlternate from 'src/components/StyledTouchableAlternate';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { styles } from './styles';

type Props = {
  data: any;
  style?: object;
};

const ListRow: React.FC<Props> = (props) => {
  const { data, style } = props;
  return (
    <StyledContainer style={{ ...styles.row, ...(style || {}) }}>
      <StyledContainer style={styles.rowHeader}>
        <StyledText color={PaletteScale.BLACK} typography={TypographyScale.HEADING_BOLD2}>
          Catan
        </StyledText>
        <StyledTouchableAlternate style={styles.rowHeaderButton}>
          <Text style={styles.rowHeaderButtonText}>QUIERO UNIRME</Text>
        </StyledTouchableAlternate>
      </StyledContainer>
      <StyledContainer style={styles.rowHeaderAdditionalInfo}>
        <Text style={styles.rowHeaderAdditionalInfoText}>Menos de 1km</Text>
        <Text style={styles.rowHeaderAdditionalInfoText}>5/6</Text>
        <Text style={styles.rowHeaderAdditionalInfoText}>12/10 14:00</Text>
      </StyledContainer>
    </StyledContainer>
  );
};

export default ListRow;
