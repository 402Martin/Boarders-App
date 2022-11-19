import React, { useEffect, useState } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { StyledTextInput } from '../StyledTextInput';
import { TextInput } from 'react-native-paper';

import { styles } from './styles';
import moment from 'moment';
import { ISchemaAttribute } from '../Form/types';
import { StyledText } from '../StyledText';

type Props = {
  field: ISchemaAttribute;
  inputKey: string;
  handleFieldsChange: (text: string, key: string) => void;
  handleOnFocus: (key: string) => void;
};
const StyledDateInput: React.FC<Props> = (props) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [dateFocus, setDateFocus] = useState(false);
  const [timeFocus, setTimeFocus] = useState(false);
  const key = props.inputKey;

  const { field, handleFieldsChange, handleOnFocus } = props;

  const handleOnDateChange = (dateIn: string) => {
    if (dateIn.length === 0) setDate('');
    const unMaskedDate = dateIn.replace(/\D/g, '');
    if (unMaskedDate !== '0' && !Number(unMaskedDate)) return;
    const split = unMaskedDate.match(/.{1,2}/g) ?? [];
    if (split.length > 3) return;

    const maskedDate = split.join('/');

    if (split.length === 3 && !moment(maskedDate, 'DD/MM/YY').isValid()) return;

    setDate(maskedDate);
  };

  const handleTimeChange = (timeIn: string) => {
    if (timeIn.length === 0) setTime('');
    const unMaskedTime = timeIn.replace(/\D/g, '');
    if (unMaskedTime !== '0' && !Number(unMaskedTime)) return;
    const split = unMaskedTime.match(/.{1,2}/g) ?? [];

    if (split.length > 2) return;

    const maskedTime = split.join(':');

    if (split.length === 2 && !moment(maskedTime, 'HH:mm').isValid()) return;
    setTime(maskedTime);
  };

  const handleFoucs = () => {
    console.log({ dateFocus, timeFocus });
    if (!timeFocus || !dateFocus) return;
    handleOnFocus(key);
  };

  useEffect(() => {
    handleFoucs();
    const joinedDate = moment(`${date} ${time}`, 'DD/MM/YY HH:mm');
    if (joinedDate.isValid()) handleFieldsChange(joinedDate.format('DD/MM/YY HH:mm'), key);
  }, [date, time]);

  useEffect(() => {
    handleFoucs();
  }, [dateFocus, timeFocus]);

  useEffect(() => {
    console.log('date', field);
    if (!field.value) return;
    const dateVal = moment(field.value, 'DD/MM/YY HH:mm');
    console.log('date1', dateVal);

    if (!dateVal.isValid()) return;

    console.log('date2', dateVal);
    setDate(dateVal.format('DD/MM/YY'));
    setTime(dateVal.format('HH:mm'));
  }, [field, field.value]);

  return (
    <View style={{ ...styles.view }}>
      <View style={styles.date}>
        <StyledTextInput
          style={styles.input}
          onChangeText={(text: string) => {
            handleOnDateChange(text);
          }}
          label="DD/MM/YY"
          value={date}
          onBlur={() => setDateFocus(true)}
          validValue={field.isValid}
        ></StyledTextInput>
      </View>
      <View style={styles.time}>
        <StyledTextInput
          style={styles.input}
          label="HH:MM"
          onChangeText={(text: string) => {
            handleTimeChange(text);
          }}
          onBlur={() => {
            setTimeFocus(true);
          }}
          value={time}
          validValue={field.isValid}
        ></StyledTextInput>
      </View>

      {!field.isValid && (
        <StyledText style={styles.formChildError}>{field.isNotValidmessage || 'valor invalido'}</StyledText>
      )}
    </View>
  );
};

export default StyledDateInput;
