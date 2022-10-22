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
          {Object.keys(fields)?.map((key: string) => (
            <>
              <StyledTextInput
                label={fields[key].label}
                style={styles.formChild}
                key={key}
                onChangeText={(text: string) => {
                  handleFieldsChange(text, key);
                }}
                validValue={fields[key].isValid}
                onBlur={() => handleOnFocus(key)}
              ></StyledTextInput>
              {!fields[key].isValid && (
                <StyledText style={styles.formChildError}>
                  {fields[key].isNotValidmessage || 'valor invalid'}
                </StyledText>
              )}
            </>
          ))}
          {buttons?.map(
            (button) =>
              (button.type != 'alternate' && (
                <StyledTouchable
                  hitSlop={{
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10,
                  }}
                  style={styles.formButton}
                  disabled={!isValid}
                  onPress={() => {
                    button.isSubmit ? button.onClick(getValues()) : button.onClick();
                  }}
                >
                  <StyledText style={styles.formButtonText}>{button.text}</StyledText>
                </StyledTouchable>
              )) ||
              (button.type === 'alternate' && (
                <StyledTouchableAlternate
                  hitSlop={{
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10,
                  }}
                  onPress={() => {
                    button.isSubmit ? button.onClick(getValues()) : button.onClick();
                  }}
                  style={styles.formButton}
                >
                  <Text style={styles.formButtonText}>{button.text}</Text>
                </StyledTouchableAlternate>
              )),
          )}

          <Message
            message="Registro Extioso!"
            color={PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN50}
          ></Message>
        </>
      </StyledView>
    </SceneContainer>
  );
};
export default Form;
