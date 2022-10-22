import axios from 'axios';
import React from 'react';
import Form from 'src/components/Form';
import { ISchema } from 'src/components/Form/types';
import { SceneContainer } from 'src/components/SceneContainer';
import Title from 'src/components/title';
import { userService } from 'src/services';
import { IUserRegister } from 'src/types/main.types';

const Register = () => {
  const schema: ISchema = {
    username: {
      value: '',
      isValid: true,
      isNotValidmessage: 'Debe contener almenos 6 caracteres',
      hasFocus: false,
      validation: (value: string) => value.trim().length > 6,
      label: 'Nombre de usuario',
    },

    email: {
      value: '',
      isValid: true,
      hasFocus: false,
      isNotValidmessage: 'Debe ser un email valido',
      validation: (value: string) => value.includes('@'),
      label: 'Email',
    },

    password: {
      value: '',
      isValid: true,
      hasFocus: false,
      isNotValidmessage: 'Debe contener almenos 6 caracteres',
      validation: (value: string) => value.trim().length > 6,
      label: 'Contraseña',
    },
  };
  const back = () => {
    console.log('back');
  };
  const submit = async (objValues: IUserRegister) => {
    const user = await userService.create(objValues);
    console.log({ user });
  };
  const buttons = [
    { text: 'Registrarme', type: 'normal', onClick: submit, isSubmit: true },
    { text: '¿Tienes una cuenta? \n Inicia sesion', type: 'alternate', onClick: back, isSubmit: false },
  ];
  return (
    <SceneContainer>
      <Title />
      <Form<IUserRegister> schema={schema} buttons={buttons}></Form>
    </SceneContainer>
  );
};

export default Register;
