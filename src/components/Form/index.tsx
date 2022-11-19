import React, { useEffect } from 'react';
import { NativeSyntheticEvent, Text, TextInputChangeEventData } from 'react-native';
import { useForm } from 'src/hooks/useForm';
import { useAppDispatch } from 'src/store';
import { alarmActions } from 'src/store/alarm.slice';
import { PaletteScale } from 'src/styles/types';
import Message from '../Message';
import { SceneContainer } from '../SceneContainer';
import { StyledView } from '../StyledView';
import HandleButton from './HandleButton';
import HandleInput from './HandleInput';
import HandleInputType from './HandleInputType';
import { styles } from './styles';
import { ISchema } from './types';

type Props<T extends object> = {
  schema: ISchema;
  notify?: (state: ISchema) => void;
  buttons?: { text: string; type: string; onClick: (...arg: any) => any; isSubmit?: boolean }[];
  message?: { type: PaletteScale; message: string };
};
const Form = <T extends object>(props: Props<T>) => {
  const { schema, notify, buttons, message } = props;
  const dispatch = useAppDispatch();
  const [fields, isValid, handleFieldsChange, getValues, handleOnFocus, handleIsInvalid] = useForm<T>(
    schema,
    notify,
  );

  useEffect(() => {
    if (!message?.message?.length) return;
    dispatch(alarmActions.setAlarm(message));
  }, [message]);
  return (
    <SceneContainer style={styles.container}>
      <StyledView style={styles.form}>
        <>
          {Object.keys(fields).map((key) => (
            <HandleInputType
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
      </StyledView>
    </SceneContainer>
  );
};
export default Form;
