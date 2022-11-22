import moment from 'moment';
import React from 'react';
import { ScrollView } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import { PaletteScale } from 'src/styles/types';
import { RequestOut, RequestStatus } from 'src/types/request.model.types';
import { GameSession } from 'src/types/session.types';
import ListRow from '../ListRow';
import { styles as baseStyles } from '../styles';
import PendingRow from './PendingRow';
import { styles } from './styles';

type Props = {
  data: GameSession;
};
const PendingList = (props: Props) => {
  const { data } = props;
  return (
    <ScrollView style={baseStyles.table}>
      <StyledContainer style={styles.titleContainer}>
        <StyledContainer style={styles.title}>
          <StyledText color={PaletteScale.BLACK} style={{ ...styles.child, ...styles.titleText }}>
            {data.gameTitle}
          </StyledText>
          <StyledText style={styles.child} color={PaletteScale.THIRD_SURFACE_GREYSCALE50}>
            {moment(data.date).format('DD/MM/YYYY HH:mm')}
          </StyledText>
          <StyledText style={styles.child} color={PaletteScale.THIRD_SURFACE_GREYSCALE50}>
            {data.location}
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
            {data.requests?.filter((r) => r.status === RequestStatus.ACCEPTED).length}/
            {data.maxQuantityPlayers}
          </StyledText>
        </StyledContainer>
      </StyledContainer>
      {data?.requests?.map((item, index) => (
        <PendingRow
          data={item}
          key={item.id}
          style={{
            ...((index % 2 == 0 || index === (data?.requests || []).length - 1) && baseStyles.evenRow),
          }}
        />
      ))}
    </ScrollView>
  );
};

export default PendingList;
