import React from 'react';
import Form from 'src/components/Form';
import { SceneContainer } from 'src/components/SceneContainer';
import Title from 'src/components/title';
import { RootStackParamList, routes } from 'src/navigation/routes';
import { userService } from 'src/services/user.service';
import { IUserRegister } from 'src/types/main.types';
import { schema, succesMessage } from './schemas';
import { strings } from './strings';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch } from 'src/store';
import { alarmActions } from 'src/store/alarm.slice';

type Props = NativeStackScreenProps<RootStackParamList, routes.REGISTER, 'MyStack'>;
const Register = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const submit = async (objValues: IUserRegister) => {
    const user = await userService.create(objValues);
    if (user) {
      dispatch(alarmActions.setAlarm(succesMessage));
      navigation.navigate(routes.LOGIN);
    }
  };
  const back = () => {
    navigation.navigate(routes.LOGIN);
  };
  const buttons = [
    { ...strings.buttons.register, isSubmit: true, onClick: submit },
    { ...strings.buttons.back, isSubmit: false, onClick: back },
  ];
  return (
    <SceneContainer>
      <Title />
      <Form<IUserRegister> schema={schema} buttons={buttons}></Form>
    </SceneContainer>
  );
};

export default Register;
