import moment from 'moment';
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

  const handleFieldsChange = (text: string) => {
    let value = text;
    if (!activeFilter || !active || !filters) return;

    if (active === 'from' || active === 'to') value = handleOnDateChange(value);
    setActiveFilter({ ...activeFilter, value });
    const newFilters = { ...filters, [active]: { ...activeFilter, value } };
    setFilters(newFilters);
  };

  const handleOnDateChange = (dateIn: string) => {
    if (dateIn.length === 0) return '';
    const unMaskedDate = dateIn.replace(/\D/g, '');
    if (unMaskedDate !== '0' && !Number(unMaskedDate)) return '';
    const split = unMaskedDate.match(/.{1,2}/g) ?? [];
    if (split.length > 3) return '';

    const maskedDate = split.join('/');

    if (split.length === 3 && !moment(maskedDate, 'DD/MM/YY').isValid()) return '';

    return maskedDate;
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
        placeholder={active === 'from' || active === 'to' ? 'DD/MM/YY' : undefined}
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
