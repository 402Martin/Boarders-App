import React from 'react';
import StyledDateInput from '../StyledDateInput';
import { StyledText } from '../StyledText';
import { StyledTextInput } from '../StyledTextInput';
import HandleInput from './HandleInput';
import { styles } from './styles';
import { ISchemaAttribute } from './types';

type Props = {
  field: ISchemaAttribute;
  inputKey: string;
  handleFieldsChange: (text: string, key: string) => void;
  handleOnFocus: (key: string) => void;
};
const HandleInputType: React.FC<Props> = (props) => {
  const { field, handleFieldsChange, handleOnFocus, inputKey } = props;
  const key = props.inputKey;

  switch (field.type) {
    case 'date':
      return (
        <>
          <StyledDateInput
            field={field}
            inputKey={inputKey}
            handleFieldsChange={handleFieldsChange}
            handleOnFocus={handleOnFocus}
          />
        </>
      );
    default:
      return (
        <>
          <HandleInput
            field={field}
            inputKey={inputKey}
            handleFieldsChange={handleFieldsChange}
            handleOnFocus={handleOnFocus}
          />
        </>
      );
  }
};

export default HandleInputType;
