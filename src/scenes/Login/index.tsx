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

type Props = NativeStackScreenProps<RootStackParamList, routes.LOGIN, 'MyStack'>;

const Login = ({ navigation }: Props) => {
  const [message, setMessage] = useState<IMessage | undefined>();

  const submit = async (objValues: ILogin) => {
    const user = await userService.login(objValues);
    if (user) {
      setMessage(succesMessage);
      navigation.navigate(routes.CREATE_SESSION);
    } else setMessage(wrongMessage);
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
      <Title />
      <Form<ILogin> schema={schema} buttons={buttons} message={message}></Form>
    </SceneContainer>
  );
};

export default Login;
