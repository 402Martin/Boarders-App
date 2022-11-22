import React, { useEffect, useState } from 'react';
import Form from 'src/components/Form';
import { SceneContainer } from 'src/components/SceneContainer';
import { RootStackParamList, routes } from 'src/navigation/routes';
import { sessionService } from 'src/services';
import { IMessage } from 'src/types/main.types';
import {
  schema,
  succesMessage,
  updateSchema,
  updateSuccesMessage,
  updateWrongMessage,
  wrongMessage,
} from './schema';
import { strings } from './strings';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyledText } from 'src/components/StyledText';
import { StyledView } from 'src/components/StyledView';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { ISessionForm } from 'src/types/session.types';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { GameSession } from 'src/types/session.types';
import { ISchema } from 'src/components/Form/types';
type Props = {
  updateGameSession?: GameSession;
};
const CreateSessionScene = (props: Props) => {
  const { updateGameSession } = props;
  const [message, setMessage] = useState<IMessage | undefined>();
  const { navigate } = useNavigation();
  const [initialSchema, setInitialSchema] = useState<ISchema | undefined>(undefined);
  const [isUpdate, setIsUpdate] = useState<Boolean>(false);
  const create = async (objValues: ISessionForm) => {
    const session = await sessionService.createSession(objValues);
    if (session) {
      setMessage(succesMessage);
      setTimeout(() => {
        navigate(routes.MYSESSION);
      }, 500);
    } else setMessage(wrongMessage);
  };

  const update = async (objValues: ISessionForm) => {
    const session = await sessionService.update({ ...objValues, id: updateGameSession?.id });
    if (session) {
      setMessage(!isUpdate ? succesMessage : updateSuccesMessage);
      setTimeout(() => {
        navigate(routes.MYSESSION);
      }, 500);
    } else setMessage(!isUpdate ? wrongMessage : updateWrongMessage);
  };
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      setMessage(undefined);
      return;
    }
    if (updateGameSession) {
      const newSchema = updateSchema(updateGameSession);
      setIsUpdate(true);
      setInitialSchema(newSchema);
      return;
    }
    setIsUpdate(false);
    setInitialSchema((s) => schema);
  }, [isFocused]);

  const submit = (objValues: ISessionForm) => {
    if (updateGameSession) return update(objValues);
    return create(objValues);
  };

  const buttons = [
    {
      ...(!isUpdate ? strings.buttons.createSession : strings.buttons.updateSession),
      isSubmit: true,
      onClick: submit,
    },
  ];
  return (
    <SceneContainer>
      <StyledView
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: 30,
          backgroundColor: 'transparent',
        }}
      >
        <StyledText
          color={PaletteScale.BLACK}
          typography={TypographyScale.HEADING_BOLD2}
          style={{ textAlign: 'center' }}
        >
          {!isUpdate ? strings.title : strings.updateTitle}
        </StyledText>
        {isFocused && initialSchema && (
          <Form<ISessionForm>
            schema={initialSchema}
            buttons={buttons}
            message={message}
            clear={isFocused}
          ></Form>
        )}
      </StyledView>
    </SceneContainer>
  );
};

export default CreateSessionScene;
