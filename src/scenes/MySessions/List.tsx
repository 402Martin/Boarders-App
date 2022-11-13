import React from 'react';
import { ScrollView, StyleProp, Text, ViewStyle } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { GameSession } from 'src/types/session.types';
import ListRow from './ListRow';
import { styles } from './styles';

type Props = {
  data: GameSession[];
  style?: StyleProp<ViewStyle>;
};

const List: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <ScrollView style={styles.table}>
      <StyledContainer style={styles.listTextContainer}>
        <StyledText color={PaletteScale.THIRD_SURFACE_GREYSCALE50} style={styles.listText}>
          Tus Sessiones
        </StyledText>
      </StyledContainer>
      {data?.map((data: any, index: number) => (
        <ListRow data={data} style={{ ...(index % 2 == 0 && styles.evenRow) }} />
      ))}
    </ScrollView>
  );
};

export default List;
