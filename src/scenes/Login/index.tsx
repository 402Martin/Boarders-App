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
import { useAppDispatch, userActions } from 'src/store';

type Props = NativeStackScreenProps<RootStackParamList, routes.LOGIN, 'MyStack'>;

const Login = ({ navigation }: Props) => {
  const [message, setMessage] = useState<IMessage | undefined>();
  const dispatch = useAppDispatch();
  const submit = async (objValues: ILogin) => {
    const data = await userService.login(objValues);
    console.log(data);
    if (data) {
      setMessage(succesMessage);
      dispatch(userActions.setUser(data));
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
