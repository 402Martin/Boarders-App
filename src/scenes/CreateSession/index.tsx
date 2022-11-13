import React, { useState } from 'react';
import Form from 'src/components/Form';
import { SceneContainer } from 'src/components/SceneContainer';
import { RootStackParamList, routes } from 'src/navigation/routes';
import { sessionService } from 'src/services';
import { IMessage } from 'src/types/main.types';
import { schema, succesMessage, wrongMessage } from './schema';
import { strings } from './strings';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyledText } from 'src/components/StyledText';
import { StyledView } from 'src/components/StyledView';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { ISessionForm } from 'src/types/session.types';
import { useNavigation } from '@react-navigation/native';

const CreateSessionScene = () => {
  const [message, setMessage] = useState<IMessage | undefined>();
  const { navigate } = useNavigation();

  const submit = async (objValues: ISessionForm) => {
    const session = await sessionService.createSession(objValues);
    if (session) {
      setMessage(succesMessage);
      setTimeout(() => {
        navigate(routes.MYSESSION);
      }, 500);
    } else setMessage(wrongMessage);
  };

  const buttons = [{ ...strings.buttons.createSession, isSubmit: true, onClick: submit }];
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
          {strings.title}
        </StyledText>
        <Form<ISessionForm> schema={schema} buttons={buttons} message={message}></Form>
      </StyledView>
    </SceneContainer>
  );
};

export default CreateSessionScene;