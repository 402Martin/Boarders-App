import React from 'react';
import { ScrollView } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import { PaletteScale } from 'src/styles/types';
import ListRow from '../ListRow';
import { styles } from '../styles';

type Props = {
  data: any[];
};
const PendingList = (props: Props) => {
  const { data } = props;
  return (
    <ScrollView style={styles.table}>
      <StyledContainer style={styles.listTextContainer}>
        <StyledText color={PaletteScale.THIRD_SURFACE_GREYSCALE50} style={styles.listText}>
          Sessiones Cerca de ti
        </StyledText>
      </StyledContainer>
    </ScrollView>
  );
};

export default PendingList;
