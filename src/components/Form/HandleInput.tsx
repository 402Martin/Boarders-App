import React from 'react';
import { StyledText } from '../StyledText';
import { StyledTextInput } from '../StyledTextInput';
import { styles } from './styles';
import { ISchemaAttribute } from './types';

type Props = {
  field: ISchemaAttribute;
  inputKey: string;
  handleFieldsChange: (text: string, key: string) => void;
  handleOnFocus: (key: string) => void;
};
const HandleInput: React.FC<Props> = (props) => {
  const { field, handleFieldsChange, handleOnFocus } = props;
  const key = props.inputKey;
  return (
    <>
      <StyledTextInput
        label={field.label}
        style={styles.formChild}
        key={key}
        onChangeText={(text: string) => {
          handleFieldsChange(text, key);
        }}
        validValue={field.isValid}
        onBlur={() => handleOnFocus(key)}
      ></StyledTextInput>
      {!field.isValid && (
        <StyledText style={styles.formChildError}>{field.isNotValidmessage || 'valor invalid'}</StyledText>
      )}
    </>
  );
};

export default HandleInput;
