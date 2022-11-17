import React from 'react';
import { ScrollView, StyleProp, Text, ViewStyle } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import StyledTouchableAlternate from 'src/components/StyledTouchableAlternate';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { GameSession } from 'src/types/session.types';
import ListRow from './ListRow';
import { styles } from './styles';

type Props = {
  data: GameSession[];
  style?: StyleProp<ViewStyle>;
  setData: () => {};
};

const List: React.FC<Props> = (props) => {
  const { data, setData } = props;
  return (
    <ScrollView style={styles.table}>
      <StyledContainer style={styles.listTextContainer}>
        <StyledText color={PaletteScale.THIRD_SURFACE_GREYSCALE50} style={styles.listText}>
          Sessiones Cerca de ti
        </StyledText>
      </StyledContainer>
      {data?.map((data: any, index: number) => (
        <ListRow
          key={data.id}
          data={data}
          style={{ ...(index % 2 == 0 && styles.evenRow) }}
          setData={setData}
        />
      ))}
    </ScrollView>
  );
};

export default List;
