import React from 'react';
import { useForm } from 'src/hooks/useForm';
import { PaletteScale } from 'src/styles/types';
import Message from '../Message';
import { SceneContainer } from '../SceneContainer';
import { StyledView } from '../StyledView';
import HandleButton from './HandleButton';
import HandleInput from './HandleInput';
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
        {message?.message?.length ? (
          <Message
            message={message?.message || ''}
            color={message?.type || PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN50}
          ></Message>
        ) : (
          <></>
        )}
      </StyledView>
    </SceneContainer>
  );
};
export default Form;
