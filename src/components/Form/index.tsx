import React from 'react';
import { NativeSyntheticEvent, Text, TextInputChangeEventData } from 'react-native';
import { useForm } from 'src/hooks/useForm';
import { PaletteScale } from 'src/styles/types';
import Message from '../Message';
import { SceneContainer } from '../SceneContainer';
import { StyledText } from '../StyledText';
import { StyledTextInput } from '../StyledTextInput';
import { StyledTouchable } from '../StyledTouchable';
import StyledTouchableAlternate from '../StyledTouchableAlternate';
import { StyledView } from '../StyledView';
import HandleButton from './HandleButton';
import HandleInput from './HandleInput';
import { styles } from './styles';
import { ISchema } from './types';

type Props<T extends object> = {
  schema: ISchema;
  notify?: (state: ISchema) => void;
  buttons?: { text: string; type: string; onClick: (...arg: any) => any; isSubmit?: boolean }[];
};
const Form = <T extends object>(props: Props<T>) => {
  const { schema, notify, buttons } = props;

  const [fields, isValid, handleFieldsChange, getValues, handleOnFocus, handleIsInvalid] = useForm<T>(
    schema,
    notify,
  );
  return (
    <SceneContainer style={styles.container}>
      <StyledView style={styles.form}>
        <>
          {Object.keys(fields).map((key) => (
            <HandleInput
              key={key}
              inputKey={key}
              field={fields[key]}
              handleFieldsChange={handleFieldsChange}
              handleOnFocus={handleOnFocus}
            />
          ))}
        </>
        {buttons?.map((button) => (
          <HandleButton button={button} getValues={getValues} isValid={isValid} key={button.text} />
        ))}
        <Message message="Registro Extioso!" color={PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN50}></Message>
      </StyledView>
    </SceneContainer>
  );
};
export default Form;
