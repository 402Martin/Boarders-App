import React, { useState } from 'react';
import { Image } from 'react-native';
import { StyledContainer } from 'src/components/StyledContainer';
import searchIcon from 'src/assets/icons/searchIcon.png';
import dateIcon from 'src/assets/icons/dateIcon.png';
import locationIcon from 'src/assets/icons/locationIcon.png';
import { styles } from './styles';
import { StyledTouchable } from 'src/components/StyledTouchable';
import HandleInputs from './HandleInputs';
import { FilterParam, Filters } from 'src/types/main.types';
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
          onPress={() => setActive((act) => (act === 'location' ? null : 'location'))}
        >
          <Image style={styles.filterImg} source={locationIcon} />
        </StyledTouchable>
        <StyledTouchable
          style={styles.touchableFilter}
          onPress={() => setActive((act) => (act === 'gameTitle' ? null : 'gameTitle'))}
        >
          <Image style={styles.filterImg} source={searchIcon} />
        </StyledTouchable>
        <StyledTouchable
          style={styles.touchableFilter}
          onPress={() => setActive((act) => (act === 'from' ? null : 'from'))}
        >
          <Image style={styles.filterImg} source={dateIcon} />
        </StyledTouchable>
        <StyledTouchable
          style={styles.touchableFilter}
          onPress={() => setActive((act) => (act === 'to' ? null : 'to'))}
        >
          <Image style={styles.filterImg} source={dateIcon} />
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
