import React, { useState } from 'react';
import Form from 'src/components/Form';
import { SceneContainer } from 'src/components/SceneContainer';

import Title from 'src/components/title';
import { RootStackParamList, routes } from 'src/navigation/routes';
import { userService } from 'src/services';
import { IMessage } from 'src/types/main.types';
import { ILogin } from 'src/types/user.types';
import { schema, succesMessage, wrongMessage } from './schema';
import { strings } from './strings';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Colors, Text } from 'react-native-paper';
import { StyledText } from 'src/components/StyledText';
import { StyledView } from 'src/components/StyledView';
import { PaletteScale } from 'src/styles/types';

type Props = NativeStackScreenProps<RootStackParamList, routes.CREATE_SESSION, 'MyStack'>;

const CreateSessionScene = ({ navigation }: Props) => {
  const [message, setMessage] = useState<IMessage | undefined>();

  const submit = async (objValues: ILogin) => {
    const user = await userService.login(objValues);
    console.log('asd');
    if (user) setMessage(succesMessage);
    else setMessage(wrongMessage);
  };

  const register = async () => {
    navigation.navigate(routes.REGISTER);
  };
  const buttons = [
    { ...strings.buttons.login, isSubmit: true, onClick: submit },
    { ...strings.buttons.register, isSubmit: false, onClick: register },
  ];
  return (
    <SceneContainer>
      <StyledView style={{ margin: 20 }}>
        <StyledText color={PaletteScale.BLACK}> idididiidididid</StyledText>
      </StyledView>
    </SceneContainer>
  );
};

export default CreateSessionScene;
