import React, { useEffect, useState } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { StyledTextInput } from '../StyledTextInput';
import { TextInput } from 'react-native-paper';

import { styles } from './styles';
import moment from 'moment';
import { ISchemaAttribute } from '../Form/types';
import { StyledText } from '../StyledText';
import { useIsFocused } from '@react-navigation/native';

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
    if (!Number(unMaskedDate)) return;
    const split = unMaskedDate.match(/.{1,2}/g) ?? [];
    if (split.length > 3) return;

    const maskedDate = split.join('/');

    setDate(maskedDate);
  };

  const handleTimeChange = (timeIn: string) => {
    if (timeIn.length === 0) setTime('');
    const unMaskedTime = timeIn.replace(/\D/g, '');
    const re = new RegExp('0', 'g');

    const count = unMaskedTime.match(re)?.length;
    if (!(unMaskedTime.length === count) && !Number(unMaskedTime)) return;
    const split = unMaskedTime.match(/.{1,2}/g) ?? [];

    if (split.length > 2) return;
    const maskedTime = split.join(':');

    setTime(maskedTime);
  };

  const handleFoucs = () => {
    if (!timeFocus || !dateFocus) return;
    handleOnFocus(key);
    validateTime();
  };

  const validateTime = () => {
    handleFieldsChange(`${date} ${time}`, key);
  };
  useEffect(() => {
    if (!timeFocus || !dateFocus) return;
    handleFoucs();
  }, [date, time]);

  useEffect(() => {
    handleFoucs();
  }, [dateFocus, timeFocus]);

  useEffect(() => {
    if (!field.value) return;
    const dateVal = moment(field.value, 'DD/MM/YY HH:mm');

    if (!dateVal.isValid()) return;
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
