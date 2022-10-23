import React, { useState } from 'react';
import Form from 'src/components/Form';
import { SceneContainer } from 'src/components/SceneContainer';
import Title from 'src/components/title';
import { RootStackParamList, routes } from 'src/navigation/routes';
import { userService } from 'src/services/user.service';
import { PaletteScale } from 'src/styles/types';
import { IMessage, IUserRegister } from 'src/types/main.types';
import { errorMessage, schema, succesMessage } from './schemas';
import { strings } from './strings';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, routes.REGISTER, 'MyStack'>;
const Register = ({ navigation }: Props) => {
  const [message, setMessage] = useState<IMessage | undefined>();

  const submit = async (objValues: IUserRegister) => {
    const user = await userService.create(objValues);
    console.log('user', user);
    if (user) {
      setMessage(succesMessage);
      navigation.navigate(routes.LOGIN);
    }
    setMessage(errorMessage);
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
      <Form<IUserRegister> schema={schema} buttons={buttons} message={message}></Form>
    </SceneContainer>
  );
};

export default Register;
