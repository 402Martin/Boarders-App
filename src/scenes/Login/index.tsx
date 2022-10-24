import React, { useEffect } from 'react';
import Form from 'src/components/Form';
import { SceneContainer } from 'src/components/SceneContainer';

import Title from 'src/components/title';
import { RootStackParamList, routes } from 'src/navigation/routes';
import { userService } from 'src/services';
import { ILogin } from 'src/types/user.types';
import { schema, succesMessage } from './schema';
import { strings } from './strings';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector, userActions } from 'src/store';
import { alarmActions } from 'src/store/alarm.slice';

type Props = NativeStackScreenProps<RootStackParamList, routes.LOGIN, 'MyStack'>;

const Login = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const submit = async (objValues: ILogin) => {
    const data = await userService.login(objValues);
    if (data) {
      dispatch(alarmActions.setAlarm(succesMessage));
      dispatch(userActions.setUser(data));
    }
  };

  const register = async () => {
    navigation.navigate(routes.REGISTER);
  };
  const buttons = [
    { ...strings.buttons.login, isSubmit: true, onClick: submit },
    { ...strings.buttons.register, isSubmit: false, onClick: register },
  ];

  useEffect(() => {
    user;
  }, [user]);
  return (
    <SceneContainer>
      <Title />
      <Form<ILogin> schema={schema} buttons={buttons}></Form>
    </SceneContainer>
  );
};

export default Login;
