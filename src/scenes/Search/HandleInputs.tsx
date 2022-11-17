import React, { useEffect, useState } from 'react';
import { StyledContainer } from 'src/components/StyledContainer';
import { StyledText } from 'src/components/StyledText';
import { StyledTextInput } from 'src/components/StyledTextInput';
import { StyledTouchable } from 'src/components/StyledTouchable';
import { Filters } from 'src/types/main.types';
import { styles } from './styles';

type Props = {
  handleFetchData: () => void;
  active: keyof Filters | undefined;
  filters: Filters;
  setFilters: any;
};
const HandleInputs = (props: Props) => {
  const [activeFilter, setActiveFilter] = useState<{ value: string; label: string } | null>(null);
  const { handleFetchData, active, filters, setFilters } = props;

  const handleFieldsChange = (value: string) => {
    if (!activeFilter || !active || !filters) return;
    setActiveFilter({ ...activeFilter, value });
    const newFilters = { ...filters, [active]: { ...activeFilter, value } };
    setFilters(newFilters);
  };

  useEffect(() => {
    if (!active || !filters || !filters[active]) return;
    setActiveFilter(filters[active] || null);
  }, [active]);
  return (
    <StyledContainer style={styles.input}>
      <StyledTextInput
        label={activeFilter?.label}
        onChangeText={(text: string) => {
          handleFieldsChange(text);
        }}
        value={activeFilter?.value || ''}
      ></StyledTextInput>

      <StyledTouchable
        hitSlop={{
          top: 10,
          bottom: 10,
          left: 10,
          right: 10,
        }}
        onPress={handleFetchData}
      >
        <StyledText>Buscar</StyledText>
      </StyledTouchable>
    </StyledContainer>
  );
};

export default HandleInputs;
