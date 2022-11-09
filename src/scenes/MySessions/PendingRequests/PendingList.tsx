import React from 'react';
import { ScrollView } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import { PaletteScale } from 'src/styles/types';
import ListRow from '../ListRow';
import { styles as baseStyles } from '../styles';
import PendingRow from './PendingRow';
import { styles } from './styles';

type Props = {
  data: any[];
};
const PendingList = (props: Props) => {
  const { data } = props;
  return (
    <ScrollView style={baseStyles.table}>
      <StyledContainer style={styles.titleContainer}>
        <StyledContainer style={styles.title}>
          <StyledText color={PaletteScale.BLACK} style={{ ...styles.child, ...styles.titleText }}>
            Monoply
          </StyledText>
          <StyledText style={styles.child} color={PaletteScale.THIRD_SURFACE_GREYSCALE50}>
            12/10/22 14:00
          </StyledText>
          <StyledText style={styles.child} color={PaletteScale.THIRD_SURFACE_GREYSCALE50}>
            Leyenda Patria
          </StyledText>
        </StyledContainer>
        <StyledContainer style={styles.title}>
          <StyledText
            style={{ ...styles.child, ...styles.childText }}
            color={PaletteScale.THIRD_SURFACE_GREYSCALE50}
          >
            Solictudes
          </StyledText>
          <StyledText
            style={{ ...styles.child, ...styles.alginRight }}
            color={PaletteScale.THIRD_SURFACE_GREYSCALE50}
          >
            1/6
          </StyledText>
        </StyledContainer>
      </StyledContainer>
      {data?.map((item, index) => (
        <PendingRow
          data={item}
          style={{ ...((index % 2 == 0 || index === data.length - 1) && baseStyles.evenRow) }}
        />
      ))}
    </ScrollView>
  );
};

export default PendingList;
