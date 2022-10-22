import React, { useState } from 'react';
import Form from 'src/components/Form';
import { SceneContainer } from 'src/components/SceneContainer';
import Title from 'src/components/title';
import { userService } from 'src/services/user.service';
import { PaletteScale } from 'src/styles/types';
import { IMessage, IUserRegister } from 'src/types/main.types';
import { schema, succesMessage } from './schemas';
import { strings } from './strings';

const Register = () => {
  const [message, setMessage] = useState<IMessage | undefined>();

  const submit = async (objValues: IUserRegister) => {
    const user = await userService.create(objValues);
    if (user) setMessage(succesMessage);
  };
  const back = () => {
    console.log('back');
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
