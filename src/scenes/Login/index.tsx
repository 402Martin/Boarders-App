import React, { useState } from 'react';
import Form from 'src/components/Form';
import { SceneContainer } from 'src/components/SceneContainer';

import Title from 'src/components/title';
import { userService } from 'src/services';
import { IMessage } from 'src/types/main.types';
import { ILogin } from 'src/types/user.types';
import { schema, succesMessage, wrongMessage } from './schema';
import { strings } from './strings';

const Login = () => {
  const [message, setMessage] = useState<IMessage | undefined>();

  const submit = async (objValues: ILogin) => {
    const user = await userService.login(objValues);
    console.log('asd');
    if (user) setMessage(succesMessage);
    else setMessage(wrongMessage);
  };

  const register = async () => {
    console.log('register navigation');
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
