import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import searchIcon from 'src/assets/icons/searchIcon.png';
import { styles } from './styles';
import { StyledTextInput } from 'src/components/StyledTextInput';
import { StyledTouchable } from 'src/components/StyledTouchable';
import { StyledText } from 'src/components/StyledText';
import HandleInputs from './HandleInputs';
import { FilterParam, Filters } from 'src/types/main.types';
import { sessionService } from 'src/services';
import { Filters as FiltersType } from 'src/types/main.types';

type Props = {
  setData: (filters?: FilterParam) => void;
};
const filters = (props: Props) => {
  const { setData } = props;
  const [active, setActive] = useState<keyof Filters | null>(null);
  const [filters, setFilters] = useState({
    location: { value: '', label: 'Ubicacion' },
    gameTitle: { value: '', label: 'Juego' },
    from: { value: '', label: 'Desde' },
    to: { value: '', label: 'Hasta' },
  });

  const handleFetchData = async () => {
    const filtersOut = Object.keys(filters).reduce((acc, key) => {
      if (filters[key as keyof FiltersType].value) acc[key] = filters[key as keyof FiltersType].value;
      return acc;
    }, {} as any);

    setData(filtersOut);
    setActive(null);
  };

  return (
    <>
      <StyledContainer style={styles.filters}>
        <StyledTouchable
          style={styles.touchableFilter}
          onPress={() => setActive((act) => (act ? null : 'location'))}
        >
          <Image style={styles.filterImg} source={searchIcon} />
        </StyledTouchable>
        <StyledTouchable
          style={styles.touchableFilter}
          onPress={() => setActive((act) => (act ? null : 'gameTitle'))}
        >
          <Image style={styles.filterImg} source={searchIcon} />
        </StyledTouchable>
        <StyledTouchable
          style={styles.touchableFilter}
          onPress={() => setActive((act) => (act ? null : 'from'))}
        >
          <Image style={styles.filterImg} source={searchIcon} />
        </StyledTouchable>
        <StyledTouchable
          style={styles.touchableFilter}
          onPress={() => setActive((act) => (act ? null : 'to'))}
        >
          <Image style={styles.filterImg} source={searchIcon} />
        </StyledTouchable>
      </StyledContainer>
      {active && (
        <StyledContainer style={styles.filtersInput}>
          <HandleInputs
            handleFetchData={handleFetchData}
            active={active}
            filters={filters}
            setFilters={setFilters}
          />
        </StyledContainer>
      )}
    </>
  );
};

export default filters;
