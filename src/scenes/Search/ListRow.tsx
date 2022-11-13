import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import StyledTouchableAlternate from 'src/components/StyledTouchableAlternate';
import { routes } from 'src/navigation/routes';
import { useAppSelector } from 'src/store';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { GameSession } from 'src/types/session.types';
import { styles } from './styles';

type Props = {
  data: GameSession;
  style?: object;
};

const ListRow: React.FC<Props> = (props) => {
  const user = useAppSelector((state) => state.user);

  const { navigate } = useNavigation();

  const { data, style } = props;

  const handleViewRequests = () => {
    console.log({ id: data.id });
    navigate(routes.PENDINGREQUEST, { id: data.id });
  };
  return (
    <StyledContainer style={{ ...styles.row, ...(style || {}) }}>
      <StyledContainer style={styles.rowHeader}>
        <StyledText color={PaletteScale.BLACK} typography={TypographyScale.HEADING_BOLD2}>
          {data.gameTitle}
        </StyledText>
        {!user?.id && (
          <StyledTouchableAlternate style={styles.rowHeaderButton}>
            <Text style={styles.rowHeaderButtonText}>QUIERO UNIRME</Text>
          </StyledTouchableAlternate>
        )}
        {user?.id && (
          <StyledTouchableAlternate style={styles.rowHeaderButton} onPress={handleViewRequests}>
            <Text style={styles.rowHeaderButtonText}>Ver Solicitudes</Text>
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
